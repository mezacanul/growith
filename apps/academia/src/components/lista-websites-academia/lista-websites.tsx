import { WebsiteCard } from "@/components/lista-websites-academia/website-card";
import type {
  AcademiaList,
  AcademiaPeriodGroup,
} from "@/types/academia-list";

interface ListaWebsitesProps {
  websites: AcademiaList;
}

function groupByPeriod(websites: AcademiaList): AcademiaPeriodGroup[] {
  return websites.reduce<AcademiaPeriodGroup[]>((groups, website) => {
    const existing = groups.find((group) => group.period === website.period);

    if (existing) {
      existing.websites.push(website);
      return groups;
    }

    groups.push({ period: website.period, websites: [website] });
    return groups;
  }, []);
}

export function ListaWebsites({ websites }: ListaWebsitesProps) {
  const periodGroups = groupByPeriod(websites);

  return (
    <section className="!py-12 bg-stone md:!py-16 lg:!py-20">
      <div className="contenedor">
        <div className="mb-10 max-w-2xl">
          <span className="eyebrow">Academia</span>
          <h3 className="max-w-none text-3xl font-bold tracking-tight text-dark-green md:text-4xl">
            Lista de websites
          </h3>
          <p className="intro-seccion mt-4">
            Revisa el estado de cada sitio: copia la URL cuando ya tiene carpeta,
            o inicializa los que aún no están listos.
          </p>
        </div>

        <div className="flex flex-col gap-8 sm:gap-14">
          {periodGroups.map((group) => (
            <div key={group.period}>
              <div className="mb-3 sm:mb-6">
                <span className="eyebrow mb-2 hidden sm:inline-flex">Periodo</span>
                <h3 className="max-w-none text-lg font-bold tracking-tight text-dark-green sm:text-xl md:text-3xl">
                  {group.period}
                </h3>
              </div>

              <div className="grid grid-cols-1 gap-2 sm:gap-5 sm:grid-cols-2 xl:grid-cols-3">
                {group.websites.map((website) => (
                  <WebsiteCard key={website.clientSTR} website={website} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
