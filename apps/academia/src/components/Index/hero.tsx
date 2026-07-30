import type { AcademiaPageAssets } from "@/types/academia-page-data";

interface HeroProps {
  assets: AcademiaPageAssets;
}

export function Hero({ assets }: HeroProps) {
  return (
    <section
      className="hero hero-bg-image bg-cover bg-center"
      style={{ backgroundImage: `url(${assets.heroBg})` }}
    >
      <div className="contenedor revelar">
        <div className="hero-bg-content">
          {/* <span className="hero-etiqueta hero-etiqueta-light">
            Growith Business Academy
          </span> */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={assets.businessAcademyLogo}
            alt="Business Academy Logo"
            className="max-w-md"
          />
          <p className="hero-sub hero-sub-light !font-normal">
            El crecimiento que estas buscando, esta en tus manos...
          </p>
          {/* <p className="hero-texto hero-texto-light">
            Portal del participante para implementaciones, calendario y sesiones
            con tu trainer.
          </p> */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={assets.letsGrowith}
            alt="Lets Growith"
            className="hero-logo-sub"
          />
        </div>
      </div>
    </section>
  );
}
