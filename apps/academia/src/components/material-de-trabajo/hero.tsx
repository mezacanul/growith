import type { AcademiaPageAssets } from "@/types/academia-page-data";

interface HeroMTProps {
  assets: AcademiaPageAssets;
}

export function HeroMT({ assets }: HeroMTProps) {
  return (
    <section className="hero hero-compact">
      <div className="contenedor centrado revelar">
        <span className="hero-etiqueta">Recursos</span>
        <h1>Material de Trabajo</h1>
        <p className="intro-seccion">
          Documentos, plantillas y recursos del periodo activo de Business
          Academy.
        </p>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={assets.heroBg}
          alt=""
          className="mt-10 mx-auto max-w-3xl rounded-[10px] shadow-lg aspect-[16/7] object-cover"
        />
      </div>
    </section>
  );
}
