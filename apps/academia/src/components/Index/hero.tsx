import type { AcademiaPageAssets } from "@/types/academia-page-data";

interface HeroProps {
  assets: AcademiaPageAssets;
}

export function Hero({ assets }: HeroProps) {
  return (
    <section
      className="relative flex min-h-[80vh] items-center justify-center overflow-hidden bg-night bg-cover bg-center !py-0"
      style={{ backgroundImage: `url(${assets.heroBg})` }}
    >
      <div
        className="absolute inset-0 bg-[linear-gradient(120deg,rgba(13,15,14,0.82)_0%,rgba(31,58,38,0.62)_50%,rgba(57,103,67,0.4)_100%)]"
        aria-hidden
      />
      <div className="contenedor relative z-10 revelar flex w-full justify-center">
        <div className="mx-auto w-[55rem] rounded-[1.5rem] border border-off-white/18 bg-off-white/8 p-6 text-center backdrop-blur-[10px] md:p-9">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <p className="mx-auto mb-5 font-sans text-[clamp(1rem,2vw,1.2rem)] font-normal leading-[1.45] text-off-white">
            Bienvenido a
          </p>
          <img
            src={assets.logoBusinessAcademy}
            alt="Business Academy Logo"
            className="mx-auto w-full md:max-w-md"
          />
          <p className="mx-auto mt-5 font-sans text-[clamp(1rem,2vw,1.2rem)] font-normal leading-[1.45] text-off-white">
            El crecimiento que estas buscando, esta en tus manos...
          </p>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={assets.letsGrowith}
            alt="Lets Growith"
            className="mx-auto mt-6 w-[15rem] md:w-[22rem]"
          />
        </div>
      </div>
    </section>
  );
}
