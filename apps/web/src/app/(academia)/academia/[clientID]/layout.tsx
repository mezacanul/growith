import { Header } from "@/components/layout/header";
import { getAcademiaPageData } from "@/lib/data/academia-page-data";
import { notFound } from "next/navigation";
import GoogleCacheRevalidator from "@/components/shared/google-cache-revalidator";

export default async function AcademiaLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ clientID: string }>;
}) {
  const { clientID } = await params;
  const response = await getAcademiaPageData(clientID);
  if (response.status == "error") {
    notFound();
  }

  return (
    <body className="min-h-full flex flex-col font-sans">
      <GoogleCacheRevalidator tag="academia-google-script-data" />
      <Header assets={response.assets} clientID={clientID} />
      {children}
    </body>
  );
}
