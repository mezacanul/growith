import { cn } from "@/lib/utils";
import { Button } from "@/components/shared/button";
import { Section } from "@/components/shared/section";
import { Text } from "@/components/shared/text";
import type { AcademiaEvento } from "@/types/academia-page-data";

interface EventoProps {
  data: AcademiaEvento;
}

export function Evento({ data }: EventoProps) {
  return (
    <>
      <Section
        className={cn("flex py-10 flex-col items-start gap-[1rem] lg:hidden")}
      >
        <div className="w-[100%] h-full flex flex-col gap-2">
          <Text variant="h3" className="font-bold">
            {data.titulo}
          </Text>

          <div className="w-[100%] flex flex-col gap-3 justify-between font-bold">
            <div className="flex items-center gap-1">
              <span
                className="material-symbols-outlined"
                style={{ fontSize: "20px" }}
              >
                event_available
              </span>
              <span className="text-sm"> {data.fecha} </span>
            </div>

            <div className="flex items-center gap-1">
              <span
                className="material-symbols-outlined"
                style={{ fontSize: "20px" }}
              >
                schedule
              </span>
              <span className="text-sm">{data.hora}</span>
            </div>
          </div>

          <Text variant="p">{data.descripcion}</Text>
        </div>

        <Button
          variant="primary"
          className="w-[50%]"
          asLink
          href={data.url}
        >
          {data.textoBtn}
        </Button>
      </Section>

      <Section className="hidden h-[25rem] lg:flex gap-[2rem] items-center justify-between">
        <Text variant="h2" className="w-[25%] tc-primary">
          {data.textoIzq}
        </Text>

        <div className="w-[50%] flex justify-center items-center text-center">
          <div className="flex flex-col gap-3 w-[75%] h-full">
            <Text variant="h2" className="font-bold">
              {data.titulo}
            </Text>
            <Text variant="p">{data.descripcion}</Text>
            <div className="w-[100%] flex justify-between font-bold">
              <div className="flex items-center gap-2">
                <Text
                  variant="p"
                  inline
                  className="material-symbols-outlined"
                >
                  event_available
                </Text>
                <Text variant="p" inline>
                  {data.fecha}
                </Text>
              </div>

              <div className="flex items-center gap-2">
                <Text
                  variant="p"
                  inline
                  className="material-symbols-outlined"
                >
                  schedule
                </Text>
                <Text variant="p" inline>
                  {data.hora}
                </Text>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[25%] flex justify-end">
          <Button variant="primary" asLink href={data.url}>
            {data.textoBtn}
          </Button>
        </div>
      </Section>
    </>
  );
}
