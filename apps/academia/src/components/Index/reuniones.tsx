import { Button } from "@/components/shared/button";
import { toTitleCase } from "@/lib/utils";
import type { AcademiaMeet } from "@/types/academia-page-data";

interface ReunionesProps {
  meet: AcademiaMeet;
}

export function Reuniones({ meet }: ReunionesProps) {
  return (
    <section className="cta-final revelar">
      <div className="contenedor">
        <span className="marca-sup">Sesiones en vivo</span>
        <h2>Mantente al tanto de las sesiones con tu Trainer</h2>
        <p className="sub">
          Conecta puntualmente cada semana para revisar avances y resolver dudas.
        </p>
        <p className="nombre-programa">
          {`${toTitleCase(meet.dayOfCall)} a las ${meet.timeOfCall.toUpperCase()}`}
        </p>
        {meet.meetURL && (
          <div className="botones">
            <Button variant="dark" asLink href={meet.meetURL}>
              Reunión online
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
