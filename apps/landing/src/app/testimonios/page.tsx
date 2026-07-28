import type { Metadata } from "next";
import { LandingEffects } from "@/components/shared/landing-effects";
import Testimonios from "@/components/testimonios/testimonios";
import { getLandingPageData } from "@/lib/landing-page-data";

export const metadata: Metadata = {
  title: "Testimonios | Business Growth",
  description:
    "Empresarios que decidieron dirigir diferente: testimonios de participantes de Business Growth.",
};

export default async function TestimoniosPage() {
  const data = await getLandingPageData();

  return (
    <LandingEffects>
      <main id="inicio">
        <Testimonios testimoniales={data.testimoniales} />
      </main>
    </LandingEffects>
  );
}
