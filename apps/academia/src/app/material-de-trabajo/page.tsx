import type { Metadata } from "next";
import { HeroMT } from "@/components/material-de-trabajo/hero";
import { MaterialDeTrabajo } from "@/components/material-de-trabajo/material-de-trabajo";
import { AcademiaEffects } from "@/components/shared/academia-effects";
import { getAcademiaPageData } from "@/lib/academia-page-data";

export const metadata: Metadata = {
  title: "Material de Trabajo | Growith Academia",
  description:
    "Recursos de trabajo de la Academia Growith Business Academy para el periodo actual.",
};

export default async function MaterialDeTrabajoPage() {
  const data = await getAcademiaPageData();

  return (
    <AcademiaEffects>
      <main>
        <HeroMT assets={data.assets} />
        <MaterialDeTrabajo
          period={data.period}
          modality={data.modality}
          drive={data.drive}
        />
      </main>
    </AcademiaEffects>
  );
}
