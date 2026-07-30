import { Button } from "@/components/shared/button";
import type { AcademiaEvento } from "@/types/academia-page-data";

interface EventoProps {
  data: AcademiaEvento;
}

export function Evento({ data }: EventoProps) {
  return (
    <section className="relative z-[2] -mt-10 bg-[var(--gris-100)] !py-[clamp(4rem,8vw,6.5rem)]">
      <div className="mx-auto w-[min(92%,72rem)]">
        <div className="grid gap-6 rounded-[1.25rem] border border-[rgba(31,58,38,0.1)] bg-white/55 p-[clamp(1.5rem,3vw,2.25rem)] shadow-[0_24px_60px_rgba(13,15,14,0.08)] backdrop-blur-[12px] lg:grid-cols-[0.9fr_1.4fr_auto] lg:items-center">
          <div>
            <span className="eyebrow">Próximo evento</span>
            <p className="text-[clamp(1.4rem,2.5vw,1.9rem)] font-bold leading-tight text-dark-green">
              {data.textoIzq}
            </p>
          </div>

          <div>
            <h2 className="mb-3 max-w-none text-2xl font-bold lg:text-3xl">
              {data.titulo}
            </h2>
            <p className="leading-[1.7] text-[rgba(13,15,14,0.72)]">
              {data.descripcion}
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[rgba(57,103,67,0.1)] px-3.5 py-1.5 text-[0.82rem] font-semibold text-dark-green">
                <span
                  className="material-symbols-outlined"
                  style={{ fontSize: "18px" }}
                >
                  event_available
                </span>
                {data.fecha}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[rgba(57,103,67,0.1)] px-3.5 py-1.5 text-[0.82rem] font-semibold text-dark-green">
                <span
                  className="material-symbols-outlined"
                  style={{ fontSize: "18px" }}
                >
                  schedule
                </span>
                {data.hora}
              </span>
            </div>
          </div>

          <div className="flex items-center lg:justify-end">
            <Button asLink href={data.url}>
              {data.textoBtn}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
