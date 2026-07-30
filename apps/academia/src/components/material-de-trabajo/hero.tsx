import type { AcademiaPageAssets } from "@/types/academia-page-data";

interface HeroMTProps {
  assets: AcademiaPageAssets;
}

export function HeroMT({ assets }: HeroMTProps) {
  return (
    <section
      className="hero hero-compact hero-bg-image bg-cover bg-center"
      style={{ backgroundImage: `url(${assets.heroBg})` }}
    >
      <div className="contenedor centrado revelar">
        <div className="aca-hero-panel">
          <p className="aca-hero-kicker">Recursos</p>
          <h1 className="aca-hero-title">Material de Trabajo</h1>
          <p className="hero-texto hero-texto-light mt-4">
            Documentos, plantillas y recursos del periodo activo de Business
            Academy.
          </p>
        </div>
      </div>
    </section>
  );
}
