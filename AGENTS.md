# AGENTS.md

Guidance for agents working in the Growith monorepo.

## Monorepo overview

```
growith/
├── apps/
│   ├── landing/     # Marketing site (Business Growth program)
│   └── academia/    # Student portal (workspace, materials, meetings)
├── assets/          # Static media (logos, images, videos)
└── src/             # Legacy Google Sites / Apps Script HTML prototypes
```

Each app under `apps/` is a **standalone Next.js project** (own `package.json`, lockfile, and `pnpm-workspace.yaml` for native build allowlists). There is no shared `packages/` workspace yet — do not import landing content, components, or styles into academia (or vice versa).

Legacy prototypes live in `src/` (`Landing.html`, `Academia.html`). New work should land in the corresponding Next app, not in those HTML files.

---

## Setup steps followed for `apps/academia`

1. **Clone architectural layout from `apps/landing`**
   - Copied Next.js / TypeScript / ESLint / PostCSS / Tailwind v4 config surface (`package.json` deps, `tsconfig.json` with `@/*` → `./src/*`, `next.config.ts`, `postcss.config.mjs`, `eslint.config.mjs`, `.gitignore`, `pnpm-workspace.yaml`).
   - Created the same source folders: `src/app`, `src/components`, `src/hooks`, `src/lib`, `src/types`, `public`.

2. **Shared tooling only (no landing content)**
   - Reused stack: Next 16, React 19, Tailwind v4 (`@tailwindcss/postcss`), `clsx` + `tailwind-merge` via `cn()` in `src/lib/utils.ts`.
   - Did **not** copy landing `application.css`, Index marketing sections, hooks tied to landing UX, or landing JSON schema.

3. **Migrate CMS data off `window.GOOGLE_DATA`**
   - Source prototype: `src/Academia.html` assigned `window.GOOGLE_DATA`.
   - Replacement (same pattern as landing):
     - Static fallback: `public/academia_page_data.json`
     - Types: `src/types/academia-page-data.ts`
     - Server getter: `getAcademiaPageData()` in `src/lib/academia-page-data.ts` (`unstable_cache` → `fetch(GOOGLE_SCRIPT_URL)` → JSON fallback on failure)
   - Env: `GOOGLE_SCRIPT_URL` (see `.env.example`). Ready to swap the fetch target for a real REST endpoint later without changing call sites.

4. **Port Academia theme into CSS**
   - Tokens + utility aliases (`.tc-*`, `.bgc-*`, Material Symbols) from `Academia.html` → `src/app/application.css`.
   - Tailwind entry + `@theme` color/font tokens → `src/app/globals.css`.

5. **Split SPA routes into App Router pages**
   - Prototype used in-memory `page` state (`/` vs `material-de-trabajo`) with no URL change.
   - Next routes:
     - `/` → `src/app/page.tsx` → `components/Index/*`
     - `/material-de-trabajo` → `src/app/material-de-trabajo/page.tsx` → `components/material-de-trabajo/*`
   - Header uses `next/link` + `usePathname` instead of `setPage`.

6. **Component folder layout (mirrors landing)**
   - `components/layout/` — shell (`Header`)
   - `components/Index/` — home sections + `main-ui.tsx` orchestrator
   - `components/material-de-trabajo/` — material page sections
   - `components/shared/` — academia UI primitives (`Text`, `Button`, `Section`, `IFrame`) from the HTML prototype

7. **Install & run** (from `apps/academia`)
   ```bash
   pnpm install
   cp .env.example .env   # optional GOOGLE_SCRIPT_URL
   pnpm dev
   ```

---

## Architectural patterns (landing + academia)

### App Router composition

| Concern | Pattern |
|--------|---------|
| Root shell | `app/layout.tsx` — fonts, metadata, global CSS, shared chrome (Header / Footer) |
| Route entry | `app/<route>/page.tsx` — async Server Component; fetches data; composes route components |
| Sections | `components/<RouteOrIndex>/` — one file per section; home may use `main-ui.tsx` to orchestrate |
| Shared UI / effects | `components/shared/` |
| Client interactivity | `"use client"` only where needed (nav scroll/menu, forms, DOM effects) |

### Data loading (replacing Google Sites injection)

```
unstable_cache(async () => {
  try {
    return await fetch(process.env.GOOGLE_SCRIPT_URL).then(r => r.json())
  } catch {
    return JSON.parse(await readFile("public/<app>_page_data.json"))
  }
}, ["cache-key"])
```

| App | Getter | Fallback JSON | Types |
|-----|--------|---------------|-------|
| landing | `getLandingPageData()` | `public/landing_page_data.json` | `types/landing-page-data.ts` |
| academia | `getAcademiaPageData()` | `public/academia_page_data.json` | `types/academia-page-data.ts` |

Pages and layouts **await the getter** and pass typed slices as props. Do not read `window.GOOGLE_DATA` in the Next apps.

### Styling

- Tailwind v4 via CSS (`@import "tailwindcss"`) — no `tailwind.config.js`.
- Design system lives in `application.css`; theme bridges in `globals.css` `@theme`.
- Prefer existing class systems from each product’s CSS (landing: `.nav`, `.hero`, `.btn-*`; academia: `.tc-*`, `.bgc-*` + Tailwind utilities). Do not cross-import the other app’s stylesheet.

### Path alias

Both apps: `@/*` → `./src/*`.

### Independence rule

Treat `apps/landing` and `apps/academia` as separate products that share **patterns**, not **modules**. If you need shared code later, introduce an explicit `packages/` workspace — do not reach across apps with relative imports.

---

## Agent working notes

- Prefer editing the Next app that owns the surface; leave `src/*.html` alone unless the task is explicitly about the Google Sites prototype.
- When adding a new academia/landing route: add `app/<slug>/page.tsx` + matching `components/<slug>/`, and fetch via the existing getter if CMS fields are needed.
- Keep new CMS fields mirrored in both the TypeScript types and the public JSON fallback.
- Do not commit secrets; use `.env` locally (gitignored). `.env.example` documents keys only.
