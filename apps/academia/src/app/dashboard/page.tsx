import { ListaWebsites } from "@/components/lista-websites-academia/lista-websites";
import { getAcademiaList } from "@/lib/data/academia-list";

export default async function Dashboard() {
  const websites = await getAcademiaList();
  // console.log(websites);

  return (
    <main className="min-h-full flex-1">
      <ListaWebsites websites={websites} />
    </main>
  );
}
