import type { Metadata } from "next";
import Contenido from "@/components/contenido/contenido";
import { LandingEffects } from "@/components/shared/landing-effects";

export const metadata: Metadata = {
  title: "Contenido | Business Growth",
  description:
    "Quince sesiones ejecutivas de Business Growth: el contenido completo del programa para dirigir mejor tu empresa.",
};

export default function ContenidoPage() {
  return (
    <LandingEffects>
      <main id="inicio">
        <Contenido />
      </main>
    </LandingEffects>
  );
}
