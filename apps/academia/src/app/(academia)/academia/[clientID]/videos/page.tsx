import type { Metadata } from "next";
import { HeroVideos } from "@/components/videos/hero";
import { Videos } from "@/components/videos/videos";
import { AcademiaEffects } from "@/components/shared/academia-effects";
import { getAcademiaPageData } from "@/lib/academia-page-data";

export const metadata: Metadata = {
  title: "Videos | Growith Academia",
  description:
    "Videos y sesiones de la Academia Growith Business Academy para el periodo actual.",
};

export default async function VideosPage() {
  const data = await getAcademiaPageData("soferp");
  console.log("data from videos page", data);

  return (
    <AcademiaEffects>
      <main>
        <HeroVideos assets={data.assets} />
        <Videos youtube={data.youtube} />
      </main>
    </AcademiaEffects>
  );
}
