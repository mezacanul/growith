import MainUI from "@/components/Index/main-ui";
import { getAcademiaPageData } from "@/lib/academia-page-data";
import { notFound } from "next/navigation";

export default async function Home({
  params,
}: {
  params: Promise<{ clientID: string }>;
}) {
  const { clientID } = await params;
  const response = await getAcademiaPageData(clientID);
  
  if (response.status == "error") {
    return notFound();
  }

  return <MainUI data={response} />;
}
