import { Button } from "@/components/shared/button";
import { toTitleCase } from "@/lib/utils";
import type { AcademiaMeet } from "@/types/academia-page-data";

interface ReunionesProps {
  meet: AcademiaMeet;
}

export function Reuniones({ meet }: ReunionesProps) {
  return (
    <section className="relative my-[clamp(4rem,8vw,6.5rem)] mx-[min(4vw,2rem)] overflow-hidden rounded-[1.75rem] bg-[linear-gradient(135deg,var(--text-night)_0%,var(--text-dark-green)_55%,var(--text-forest-green)_100%)] text-off-white !py-0 after:absolute after:right-[-20%] after:bottom-[-40%] after:h-72 after:w-72 after:rounded-full after:bg-off-white/8 after:content-['']">
      <div className="relative z-[1] px-6 py-[clamp(3rem,6vw,4.5rem)] text-center">
        <span className="eyebrow eyebrow-light">Sesiones en vivo</span>
        <p className="text-sm w-[80%] mx-auto lg:text-xl">
          Mantente al tanto de las sesiones con tu Trainer
        </p>
        <p className="my-4 text-[1.5rem] md:text-[2rem] lg:text-[2.5rem] font-bold italic tracking-[-0.02em]">
          {`${toTitleCase(meet.dayOfCall)} a las ${meet.timeOfCall.toUpperCase()}`}
        </p>
        {meet.meetURL && (
          <Button variant="brand-light" asLink href={meet.meetURL}>
            Reunión online
          </Button>
        )}
      </div>
    </section>
  );
}
