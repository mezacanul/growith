import { Button } from "@/components/shared/button";
import type { AcademiaEvento } from "@/types/academia-page-data";

interface EventoProps {
  data: AcademiaEvento;
}

export function Evento({ data }: EventoProps) {
  return (
    <section className="aca-section aca-evento">
      <div className="aca-contenedor">
        <div className="aca-card aca-evento-card">
          <div>
            <span className="aca-eyebrow">Próximo evento</span>
            <p className="aca-evento-side">{data.textoIzq}</p>
          </div>

          <div>
            <h2 className="text-2xl lg:text-3xl font-bold mb-3">{data.titulo}</h2>
            <p className="aca-evento-body">{data.descripcion}</p>
            <div className="aca-evento-meta mt-4">
              <span className="aca-chip">
                <span className="material-symbols-outlined" style={{ fontSize: "18px" }}>
                  event_available
                </span>
                {data.fecha}
              </span>
              <span className="aca-chip">
                <span className="material-symbols-outlined" style={{ fontSize: "18px" }}>
                  schedule
                </span>
                {data.hora}
              </span>
            </div>
          </div>

          <div className="flex items-center lg:justify-end">
            <Button variant="primary" asLink href={data.url}>
              {data.textoBtn}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
