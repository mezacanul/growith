import { Button } from "@/components/shared/button";
import type { AcademiaEvento } from "@/types/academia-page-data";

interface EventoProps {
  data: AcademiaEvento;
}

export function Evento({ data }: EventoProps) {
  return (
    <section className="secondary-bg">
      <div className="contenedor revelar">
        <span className="eyebrow">Próximo evento</span>
        <div className="acad-evento-grid">
          <h2 className="max-w-none">{data.textoIzq}</h2>

          <div>
            <h3 className="text-2xl mb-3">{data.titulo}</h3>
            <p className="intro-seccion mt-0">{data.descripcion}</p>
            <div className="acad-evento-meta">
              <span>
                <span className="material-symbols-outlined" style={{ fontSize: "20px" }}>
                  event_available
                </span>
                {data.fecha}
              </span>
              <span>
                <span className="material-symbols-outlined" style={{ fontSize: "20px" }}>
                  schedule
                </span>
                {data.hora}
              </span>
            </div>
          </div>

          <div>
            <Button variant="primary" asLink href={data.url}>
              {data.textoBtn}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
