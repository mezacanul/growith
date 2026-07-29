import { cn } from "@/lib/utils";
import { Section } from "@/components/shared/section";
import { Text } from "@/components/shared/text";
import type { AcademiaPageAssets } from "@/types/academia-page-data";

interface HeroMTProps {
  assets: AcademiaPageAssets;
}

export function HeroMT({ assets }: HeroMTProps) {
  return (
    <Section
      parentClass="bg-cover bg-center"
      className={cn(
        "text-white text-center flex flex-col items-center justify-center",
        "h-[30rem]",
        "gap-4 lg:gap-4",
      )}
      style={{ backgroundImage: `url(${assets.heroBg})` }}
    >
      <Text variant="h1" className="font-light text-[3rem] lg:text-[4.5rem]">
        Material de Trabajo
      </Text>
    </Section>
  );
}
