import { cn } from "@/lib/utils";
import { Button } from "@/components/shared/button";
import { Section } from "@/components/shared/section";
import { Text } from "@/components/shared/text";
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
    <Section parentClass="bgc-stone" className="py-[6rem]">
      {/* Bloque de titulo y logo */}
      <div className="flex flex-col items-center justify-center gap-10">
        {/* <Text variant="h3" className="text-center">
          Bienvenido a Business Academy
        </Text> */}
        <Text variant="h1" className="text-center">
          Este es tu espacio de trabajo
        </Text>
        <div className="w-full lg:w-[30rem] h-[10rem]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={assets.clientLogo}
            className="object-contain w-full h-full"
            alt="Logo"
          />
        </div>
      </div>

      {/* Bloque de calendario e implementaciones */}
      <div
        className={cn(
          "flex flex-col lg:grid grid-cols-2 justify-between items-center ",
          "gap-15 lg:gap-0",
          "mt-20",
        )}
      >
        <div className="flex flex-col items-center gap-[1.5rem]">
          <Text variant="h3" className="text-center w-[70%] margin-auto">
            {
              "Accede a tu carpeta personal para poder subir tus implementaciones aquí"
            }
          </Text>
          <IFrame src={drive.impURL} className="h-[25rem]" />
          {/* <Button variant="primary" asLink href={drive.impURL}>
          Sube aquí tus implementaciones
        </Button> */}
        </div>

        <div className="flex flex-col items-center justify-center gap-5 lg:gap-[1.5rem]">
          <div className="text-center flex flex-col items-center justify-center gap-2">
            <Text variant="h4">CALENDARIO BUSINESS ACADEMY</Text>
            <div className="flex flex-col lg:flex-row items-center justify-center gap-2">
              <Text variant="h4" className="font-bold tc-primary">
                {period}
              </Text>
              <Text variant="h4" className="font-bold tc-primary">
                {modality.toUpperCase()}
              </Text>
            </div>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="w-full lg:w-auto h-auto lg:h-[30rem] object-contain"
            src={assets.calendario}
            alt="Calendario"
          />
        </div>
      </div>
    </Section>
  );
}
