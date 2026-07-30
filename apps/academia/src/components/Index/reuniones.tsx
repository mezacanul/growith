import { Button } from "@/components/shared/button";
import { cn, toTitleCase } from "@/lib/utils";
import type { AcademiaMeet } from "@/types/academia-page-data";

interface ReunionesProps {
  meet: AcademiaMeet;
}

export function Reuniones({ meet }: ReunionesProps) {
  return (
    <section
      className={cn(
        "bg-[var(--gris-100)]",
        "!pb-[clamp(4rem,8vw,6.5rem)]",
        "flex flex-col items-center",
      )}
    >
      <div
        className={cn(
          "w-[90%] md:w-[93%]",
          "relative overflow-hidden rounded-[1.75rem] bg-[linear-gradient(135deg,var(--text-night)_0%,var(--text-dark-green)_55%,var(--text-forest-green)_100%)] text-off-white",
          "mx-[0] md:mx-[min(4vw,2rem)]",
        )}
      >
        <div className="relative z-[1] px-6 py-[clamp(3rem,6vw,4.5rem)] text-center">
          <span className="eyebrow eyebrow-light">Sesiones en vivo</span>
          <p className="mx-auto w-[80%] text-sm lg:text-xl">
            Mantente al tanto de las sesiones con tu Trainer
          </p>
          <p className="my-4 text-[1.5rem] font-bold italic tracking-[-0.02em] md:text-[2rem] lg:text-[2.5rem]">
            {`${toTitleCase(meet.dayOfCall)} a las ${meet.timeOfCall.toUpperCase()}`}
          </p>
          {meet.meetURL && (
            <Button variant="brand-light" asLink href={meet.meetURL}>
              Reunión online
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
