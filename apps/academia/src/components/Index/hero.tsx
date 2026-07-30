import type { AcademiaPageAssets } from "@/types/academia-page-data";

interface HeroProps {
  assets: AcademiaPageAssets;
}

export function Hero({ assets }: HeroProps) {
  return (
    <section className="hero">
      <div className="contenedor hero-grid revelar">
        <div>
          <span className="hero-etiqueta">Growith Business Academy</span>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={assets.businessAcademyLogo}
            alt="Business Academy Logo"
            className="max-w-md"
          />
          <p className="hero-sub">
            El crecimiento que estas buscando, esta en tus manos...
          </p>
          <p className="hero-texto">
            Portal del participante para implementaciones, calendario y sesiones
            con tu trainer.
          </p>
        </div>

        <div className="hero-figura">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={assets.heroBg} alt="Academia Growith" />
          <div className="hero-tarjeta">
            <strong>Let&apos;s Growith</strong>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={assets.letsGrowith}
              alt="Lets Growith"
              className="mt-3 max-h-8 object-contain"
            />
            <span className="block mt-2">Tu espacio de trabajo ejecutivo</span>
          </div>
        </div>
      </div>
    </section>
  );
}
