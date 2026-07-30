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
    <section className="secondary-bg">
      <div className="contenedor centrado revelar">
        <span className="eyebrow">Biblioteca</span>
        <h2 className="max-w-none font-light text-3xl lg:text-4xl">
          Encuentra aquí nuestros recursos de trabajo
        </h2>
        <p className="intro-seccion">Periodo</p>
        <p className="tc-primary font-bold italic text-xl lg:text-3xl">
          {`${period} - ${modality.toUpperCase()}`}
        </p>

        <div className="acad-frame max-w-5xl mx-auto mt-10">
          <IFrame src={drive.resourcesURL} className="h-[30rem]" />
        </div>
      </div>
    </section>
  );
}
