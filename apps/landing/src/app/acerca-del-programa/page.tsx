import type { Metadata } from "next";
import Alumni from "@/components/acerca-del-programa/alumni";
import Capacidades from "@/components/acerca-del-programa/capacidades";
import Incluye from "@/components/acerca-del-programa/incluye";
import Metodologia from "@/components/acerca-del-programa/metodologia";
import Problema from "@/components/acerca-del-programa/problema";
import Roadmap from "@/components/acerca-del-programa/roadmap";
import Transformacion from "@/components/acerca-del-programa/transformacion";
import { LandingEffects } from "@/components/shared/landing-effects";

export const metadata: Metadata = {
  title: "Acerca del programa | Business Growth",
  description:
    "Conoce el problema que resuelve Business Growth, la transformación, capacidades, roadmap, metodología e inclusiones del programa.",
};

export default function AcercaDelProgramaPage() {
  return (
    <LandingEffects>
      <main id="inicio">
        <Problema />
        <Transformacion />
        <Capacidades />
        <Roadmap />
        <Metodologia />
        <Incluye />
        <Alumni />
      </main>
    </LandingEffects>
  );
}
