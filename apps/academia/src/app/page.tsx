import MainUI from "@/components/Index/main-ui";
import { getAcademiaPageData } from "@/lib/academia-page-data";

export default async function Home() {
  const data = await getAcademiaPageData("soferp");
  console.log("data", data)

  return <MainUI data={data} />;
}
