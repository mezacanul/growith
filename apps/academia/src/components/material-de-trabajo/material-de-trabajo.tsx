import { IFrame } from "@/components/shared/iframe";
import type { AcademiaDrive } from "@/types/academia-page-data";

interface MaterialDeTrabajoProps {
  period: string;
  modality: string;
  drive: AcademiaDrive;
}

export function MaterialDeTrabajo({
  period,
  modality,
  drive,
}: MaterialDeTrabajoProps) {
  return (
    <section className="!py-[clamp(4rem,8vw,6.5rem)]">
      <div className="mx-auto w-[min(92%,72rem)]">
        <div className="mx-auto mb-10 max-w-xl text-center">
          <span className="mb-4 inline-flex items-center gap-2.5 text-[0.72rem] font-bold uppercase tracking-[0.24em] text-forest-green before:block before:h-0.5 before:w-8 before:bg-[linear-gradient(90deg,var(--text-forest-green),transparent)] before:content-['']">
            Biblioteca
          </span>
          <h2 className="max-w-none text-2xl font-light lg:text-4xl">
            Encuentra aquí nuestros recursos de trabajo
          </h2>
          <p className="mt-3 text-base lg:text-lg">Periodo</p>
          <p className="mt-3 inline-block rounded-full bg-[rgba(57,103,67,0.1)] px-4 py-2 font-bold italic text-forest-green">
            {`${period} - ${modality.toUpperCase()}`}
          </p>
        </div>

        <div className="rounded-[1.25rem] border border-[rgba(31,58,38,0.1)] bg-white/55 p-6 shadow-[0_24px_60px_rgba(13,15,14,0.08)] backdrop-blur-[12px]">
          <div className="min-h-[25rem] overflow-hidden rounded-xl border border-[rgba(31,58,38,0.1)] bg-white">
            <IFrame src={drive.resourcesURL} className="h-[30rem]" />
          </div>
        </div>
      </div>
    </section>
  );
}
