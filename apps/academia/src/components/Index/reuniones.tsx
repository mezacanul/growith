import { Button } from "@/components/shared/button";
import { Section } from "@/components/shared/section";
import { Text } from "@/components/shared/text";
import { toTitleCase } from "@/lib/utils";
import type {
  AcademiaMeet,
  AcademiaPageAssets,
} from "@/types/academia-page-data";

interface ReunionesProps {
  assets: AcademiaPageAssets;
  meet: AcademiaMeet;
}

export function Reuniones({ assets, meet }: ReunionesProps) {
  return (
    <Section
      parentClass="bg-cover bg-center"
      className="h-[20rem] text-white flex flex-col justify-center items-center gap-3"
      style={{ backgroundImage: `url(${assets.heroBg})` }}
    >
      <Text variant="h4" className="text-center">
        Mantente al tanto de las sesiones con tu Trainer
      </Text>
      <Text variant="h1" className="text-center font-bold italic mb-4">
        {`${toTitleCase(meet.dayOfCall)} a las ${meet.timeOfCall.toUpperCase()}`}
      </Text>
      {meet.meetURL && (
        <Button variant="light" asLink href={meet.meetURL}>
          REUNIÓN ONLINE
        </Button>
      )}
    </Section>
  );
}
