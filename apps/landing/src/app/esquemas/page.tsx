import type { Metadata } from "next";
import Esquemas from "@/components/esquemas/esquemas";
import { LandingEffects } from "@/components/shared/landing-effects";

export const metadata: Metadata = {
  title: "Esquemas | Business Growth",
  description:
    "Academia Online o Presencial: elige cómo vivir Business Growth con el mismo contenido y distinta cercanía.",
};

export default function EsquemasPage() {
  return (
    <LandingEffects>
      <main id="inicio">
        <Esquemas />
      </main>
    </LandingEffects>
  );
}
