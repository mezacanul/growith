import { IFrame } from "@/components/shared/iframe";
import type { AcademiaDrive } from "@/types/academia-page-data";

interface ImplementacionesDestacadasProps {
  drive: AcademiaDrive;
}

export function ImplementacionesDestacadas({
  drive,
}: ImplementacionesDestacadasProps) {
  return (
    <section className="bg-[var(--gris-100)]">
      <div className="contenedor revelar grid grid-cols-1 items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <span className="eyebrow">Destacadas</span>
          <h2>Encuentra aquí tus implementaciones más destacadas</h2>
          <p className="intro-seccion">
            Revisa el trabajo sobresaliente de tu generación y comparte avances
            con claridad.
          </p>
        </div>
        <div className="min-h-[25rem] overflow-hidden rounded-[10px] border border-[rgba(31,58,38,0.14)] bg-white shadow-[0_18px_48px_rgba(13,15,14,0.1)]">
          <IFrame src={drive.impDestacadasURL} className="h-[25rem]" />
        </div>
      </div>
    </section>
  );
}
