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
    <section className="bg-off-white !pt-[4rem]">
      <div className="contenedor revelar text-center [&_h2]:mx-auto [&_.intro]:mx-auto">
        <span className="eyebrow">Tu espacio</span>
        <h2 className="max-w-none">Este es tu espacio de trabajo</h2>
        <p className="intro intro-seccion mx-auto">
          Sube implementaciones, consulta tu calendario y mantén tu avance
          visible para el equipo Growith.
        </p>

        <div className="mx-auto mt-7 max-w-xl rounded-[10px] border border-[rgba(31,58,38,0.14)] bg-off-white p-6">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={assets.clientLogo}
            className="mx-auto h-[8rem] w-full object-contain"
            alt="Logo del cliente"
          />
        </div>

        <div className="mt-12 h-[40rem] grid grid-cols-1 items-start gap-9 lg:grid-cols-2">
          <article className="h-full pt-10 flex flex-col rounded-[10px] border border-[rgba(31,58,38,0.14)] bg-off-white p-7 text-left shadow-[0_18px_48px_rgba(13,15,14,0.1)]">
            <span className="eyebrow">Implementaciones</span>
            <h3 className=" text-xl">Carpeta personal</h3>
            <p className="intro-seccion mt-0 mb-4">
              Accede a tu carpeta personal para subir tus implementaciones aquí.
            </p>
            <div className="h-full overflow-hidden rounded-[10px] border border-[rgba(31,58,38,0.14)] bg-white shadow-[0_18px_48px_rgba(13,15,14,0.1)]">
              <IFrame src={drive.impURL} className="" />
            </div>
          </article>

          <article className="h-full rounded-[10px] border border-[rgba(31,58,38,0.14)] bg-off-white p-7 text-left shadow-[0_18px_48px_rgba(13,15,14,0.1)]">
            <span className="eyebrow">Calendario</span>
            <h3 className="mb-2 text-xl">Business Academy</h3>
            <p className="text-lg font-bold text-forest-green">
              {period} · {modality.toUpperCase()}
            </p>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="mt-4 h-auto w-full rounded-[10px] object-contain shadow-[0_18px_48px_rgba(13,15,14,0.1)]"
              src={assets.calendario}
              alt="Calendario"
            />
          </article>
        </div>
      </div>
    </section>
  );
}
