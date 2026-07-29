import { cn } from "@/lib/utils";
import { Section } from "@/components/shared/section";
import { Text } from "@/components/shared/text";
import type { AcademiaPageAssets } from "@/types/academia-page-data";

interface HeroProps {
  assets: AcademiaPageAssets;
}

export function Hero({ assets }: HeroProps) {
  return (
    <Section
      className={cn(
        "text-white text-center flex flex-col items-center justify-center",
        "h-[30rem]",
        "gap-4 lg:gap-4",
      )}
      parentClass="bg-cover bg-center"
      style={{ backgroundImage: `url(${assets.heroBg})` }}
    >
      <Text variant="h5" className="font-light">
        Bienvenido a
      </Text>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={assets.businessAcademyLogo}
        alt="Business Academy Logo"
        className={cn(
          "object-contain",
          "h-auto md:h-auto lg:h-18",
          "w-auto md:w-[70%] lg:w-auto",
        )}
      />
      <Text
        className="text-lg lg:text-xl lg:border-b-2 lg:pb-2 w-75 lg:w-auto"
        style={{ borderColor: "var(--text-off-white)" }}
      >
        El crecimiento que estas buscando, esta en tus manos...
      </Text>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={assets.letsGrowith}
        alt="Lets Growith"
        className={cn(
          "object-contain",
          "h-auto lg:h-10",
          "w-[65%] md:w-[50%] lg:w-auto",
        )}
      />
    </Section>
  );
}
