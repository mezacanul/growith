import { cn } from "@/lib/utils";
import { IFrame } from "@/components/shared/iframe";
import { Section } from "@/components/shared/section";
import { Text } from "@/components/shared/text";
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
    <Section
      className={cn(
        "text-center flex flex-col items-center justify-center",
        "gap-5 lg:gap-10",
        "py-17 lg:py-26",
      )}
    >
      <div className="text-center flex flex-col items-center justify-center gap-3">
        <Text variant="h3" className="font-light text-xl lg:text-4xl">
          Encuentra aquí nuestros recursos de trabajo
        </Text>
        <Text variant="p" className="text-base lg:text-xl">
          Periodo
        </Text>
        <Text
          variant="p"
          className="tc-primary font-bold italic text-base lg:text-3xl"
        >
          {`${period} - ${modality.toUpperCase()}`}
        </Text>
      </div>

      <div className="w-full h-[30rem]">
        <IFrame src={drive.resourcesURL} />
      </div>
    </Section>
  );
}
