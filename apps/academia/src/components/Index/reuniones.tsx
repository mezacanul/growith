import { Button } from "@/components/shared/button";
import { toTitleCase } from "@/lib/utils";
import type { AcademiaMeet } from "@/types/academia-page-data";

interface ReunionesProps {
  meet: AcademiaMeet;
}

export function Reuniones({ meet }: ReunionesProps) {
  return (
    <section className="aca-meet">
      <div className="aca-meet-inner">
        <span className="aca-eyebrow tc-white">Sesiones en vivo</span>
        <p className="text-lg lg:text-xl">
          Mantente al tanto de las sesiones con tu Trainer
        </p>
        <p className="aca-meet-schedule">
          {`${toTitleCase(meet.dayOfCall)} a las ${meet.timeOfCall.toUpperCase()}`}
        </p>
        {meet.meetURL && (
          <Button variant="light" asLink href={meet.meetURL}>
            Reunión online
          </Button>
        )}
      </div>
    </section>
  );
}
