import type { AcademiaPageAssets } from "@/types/academia-page-data";

interface HeroVideosProps {
  assets: AcademiaPageAssets;
}

export function HeroVideos({ assets }: HeroVideosProps) {
  return (
    <section
      className="relative flex min-h-[70vh] items-center overflow-hidden bg-night bg-cover bg-center !py-0"
      style={{ backgroundImage: `url(${assets.heroBg})` }}
    >
      <div
        className="absolute inset-0 bg-[linear-gradient(120deg,rgba(13,15,14,0.82)_0%,rgba(31,58,38,0.62)_50%,rgba(57,103,67,0.4)_100%)]"
        aria-hidden
      />
      <div className="contenedor relative z-10 revelar w-full max-w-[60rem] text-center">
        <div className="mx-auto w-full rounded-[1.5rem] border border-off-white/18 bg-off-white/8 p-6 text-center text-off-white backdrop-blur-[10px] md:p-9">
          <p className="mb-4 text-[0.78rem] uppercase tracking-[0.28em] opacity-80">
            Biblioteca
          </p>
          <h1 className="max-w-none text-[clamp(2.5rem,6vw,4.5rem)] font-light leading-[1.05] tracking-[-0.03em] !text-off-white">
            Videos
          </h1>
          <p className="mx-auto mt-4 max-w-[56ch] text-off-white/80">
            Sesiones, masterclasses y recursos en video de Business Academy.
          </p>
        </div>
      </div>
    </section>
  );
}
