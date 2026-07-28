import MainUI from "@/components/Index/main-ui";
import { getLandingPageData } from "@/lib/landing-page-data";

const googleScriptURL = process.env.GOOGLE_SCRIPT_URL as string;

export default async function Home() {
  const data = await getLandingPageData();
  const { assets } = data;
  const proximaGeneracion = data["proxima-generacion"];

  return (
    <MainUI
      assets={assets}
      proximaGeneracion={proximaGeneracion}
      googleScriptURL={googleScriptURL}
    />
  );
}
