import { IFrame } from "@/components/shared/iframe";
import type { AcademiaDrive } from "@/types/academia-page-data";

interface ImplementacionesDestacadasProps {
  drive: AcademiaDrive;
}

export function ImplementacionesDestacadas({
  drive,
}: ImplementacionesDestacadasProps) {
  return (
    <section className="secondary-bg">
      <div className="contenedor acad-feature-grid revelar">
        <div>
          <span className="eyebrow">Destacadas</span>
          <h2>Encuentra aquí tus implementaciones más destacadas</h2>
          <p className="intro-seccion">
            Revisa el trabajo sobresaliente de tu generación y comparte avances
            con claridad.
          </p>
        </div>
        <div className="acad-frame">
          <IFrame src={drive.impDestacadasURL} className="h-[25rem]" />
        </div>
      </div>
    </section>
  );
}
