import type {
  AcademiaDrive,
  AcademiaPageAssets,
} from "@/types/academia-page-data";
import { IFrame } from "../shared/iframe";

interface EspacioDeTrabajoProps {
  drive: AcademiaDrive;
  assets: AcademiaPageAssets;
  period: string;
  modality: string;
}

export function EspacioDeTrabajo({
  drive,
  assets,
  period,
  modality,
}: EspacioDeTrabajoProps) {
  return (
    <section>
      <div className="contenedor centrado revelar">
        <span className="eyebrow">Tu espacio</span>
        <h2 className="max-w-none">Este es tu espacio de trabajo</h2>
        <p className="intro-seccion">
          Sube implementaciones, consulta tu calendario y mantén tu avance
          visible para el equipo Growith.
        </p>

        <div className="acad-logo-box max-w-xl mx-auto">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={assets.clientLogo}
            className="object-contain w-full h-[8rem] mx-auto"
            alt="Logo del cliente"
          />
        </div>

        <div className="acad-grid-dos">
          <article className="acad-panel text-left">
            <span className="eyebrow">Implementaciones</span>
            <h3 className="text-xl mb-3">Carpeta personal</h3>
            <p className="intro-seccion mt-0 mb-4">
              Accede a tu carpeta personal para subir tus implementaciones aquí.
            </p>
            <div className="acad-frame">
              <IFrame src={drive.impURL} className="h-[25rem]" />
            </div>
          </article>

          <article className="acad-panel text-left">
            <span className="eyebrow">Calendario</span>
            <h3 className="text-xl mb-2">Business Academy</h3>
            <p className="font-bold tc-primary text-lg">
              {period} · {modality.toUpperCase()}
            </p>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="acad-calendario w-full h-auto lg:h-[24rem] object-contain"
              src={assets.calendario}
              alt="Calendario"
            />
          </article>
        </div>
      </div>
    </section>
  );
}
