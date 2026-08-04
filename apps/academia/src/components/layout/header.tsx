"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { AcademiaPageAssets } from "@/types/academia-page-data";

const paginas = [
  { title: "Inicio", route: "/" },
  { title: "Material de Trabajo", route: "/material-de-trabajo" },
  { title: "Videos", route: "/videos" },
] as const;

interface HeaderProps {
  assets: AcademiaPageAssets;
}

export function Header({ assets }: HeaderProps) {
  const pathname = usePathname();

  return (
    <header className="nav" id="nav">
      <div className="nav-inner">
        <Link href="/" className="nav-logo" aria-label="Growith Academia">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={assets.logoGrowith} alt="Growith Logo" />
        </Link>

        <nav
          className="nav-links"
          id="navLinks"
          aria-label="Navegación principal"
        >
          {paginas.map((pagina) => (
            <Link
              key={pagina.title}
              href={pagina.route}
              className={pathname === pagina.route ? "activo" : undefined}
            >
              {pagina.title}
            </Link>
          ))}
        </nav>

        <button
          className="hamburguesa"
          id="hamburguesa"
          aria-expanded="false"
          aria-controls="navLinks"
          aria-label="Abrir menú"
          type="button"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
