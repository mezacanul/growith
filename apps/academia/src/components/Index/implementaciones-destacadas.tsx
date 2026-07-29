import { cn } from "@/lib/utils";
import { IFrame } from "@/components/shared/iframe";
import { Section } from "@/components/shared/section";
import { Text } from "@/components/shared/text";
import type { AcademiaDrive } from "@/types/academia-page-data";

interface ImplementacionesDestacadasProps {
  drive: AcademiaDrive;
}

export function ImplementacionesDestacadas({
  drive,
}: ImplementacionesDestacadasProps) {
  return (
    <Section
      className={cn(
        "flex flex-col lg:grid h-auto lg:h-[35rem] grid-cols-5 justify-around items-center gap-5",
        "gap-15 lg:gap-0",
        "text-center lg:text-left",
        "py-15 lg:py-0",
      )}
    >
      <div className="col-span-2">
        <Text variant="h2" className="w-[80%]">
          Encuentra aquí tus implementaciones más destacadas
        </Text>
      </div>
      <div className="col-span-3 w-full lg:w-auto h-[25rem]">
        <IFrame src={drive.impDestacadasURL} />
      </div>
    </Section>
  );
}
