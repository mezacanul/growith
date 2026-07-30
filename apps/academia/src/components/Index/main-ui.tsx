import { Hero } from "@/components/Index/hero";
import { Evento } from "@/components/Index/evento";
import { EspacioDeTrabajo } from "@/components/Index/espacio-de-trabajo";
import { ImplementacionesDestacadas } from "@/components/Index/implementaciones-destacadas";
import { Reuniones } from "@/components/Index/reuniones";
import { AcademiaEffects } from "@/components/shared/academia-effects";
import type { AcademiaPageData } from "@/types/academia-page-data";

interface MainUIProps {
  data: AcademiaPageData;
}

export default function MainUI({ data }: MainUIProps) {
  return (
    <AcademiaEffects>
      <main>
        <Hero assets={data.assets} />
        <Evento data={data.evento} />
        <EspacioDeTrabajo
          drive={data.drive}
          assets={data.assets}
          period={data.period}
          modality={data.modality}
        />
        <ImplementacionesDestacadas drive={data.drive} />
        <Reuniones meet={data.meet} />
      </main>
    </AcademiaEffects>
  );
}
