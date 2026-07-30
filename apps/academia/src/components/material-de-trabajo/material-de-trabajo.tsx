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
    <section className="aca-section">
      <div className="aca-contenedor">
        <div className="aca-material-intro mb-10">
          <span className="aca-eyebrow">Biblioteca</span>
          <h2 className="text-2xl lg:text-4xl font-light max-w-none">
            Encuentra aquí nuestros recursos de trabajo
          </h2>
          <p className="mt-3 text-base lg:text-lg">Periodo</p>
          <p className="aca-material-period">
            {`${period} - ${modality.toUpperCase()}`}
          </p>
        </div>

        <div className="aca-card aca-bento-panel">
          <div className="aca-frame-wrap">
            <IFrame src={drive.resourcesURL} className="h-[30rem]" />
          </div>
        </div>
      </div>
    </section>
  );
}
