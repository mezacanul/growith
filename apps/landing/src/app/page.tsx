import MainUI from "@/components/main-ui";
import { getLandingPageData } from "@/lib/landing-page-data";

const googleScriptURL = process.env.GOOGLE_SCRIPT_URL as string;

export default async function Home() {
  const data = await getLandingPageData();
  const { assets, testimoniales } = data;
  const proximaGeneracion = data["proxima-generacion"];

  return (
    <MainUI
      assets={assets}
      testimoniales={testimoniales}
      proximaGeneracion={proximaGeneracion}
      googleScriptURL={googleScriptURL}
    />
  );
}
