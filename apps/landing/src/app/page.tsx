import MainUI from "@/components/main-ui";
import { getLandingPageData } from "@/lib/landing-page-data";

export default async function Home() {
  const data = await getLandingPageData();
  const { assets, testimoniales } = data;
  const proximaGeneracion = data["proxima-generacion"];

  return (
    <MainUI
      assets={assets}
      testimoniales={testimoniales}
      proximaGeneracion={proximaGeneracion}
    />
  );
}
