import { readFile } from "fs/promises";
import path from "path";
import { unstable_cache } from "next/cache";
import type { AcademiaPageData } from "@/types/academia-page-data";

const googleScriptURL = process.env.GOOGLE_SCRIPT_URL as string;

async function readFallbackData(): Promise<AcademiaPageData> {
  const filePath = path.join(
    process.cwd(),
    "public",
    "academia_page_data.json",
  );
  const contents = await readFile(filePath, "utf8");
  return JSON.parse(contents) as AcademiaPageData;
}

export const getAcademiaPageData = unstable_cache(
  async (clientID: string): Promise<AcademiaPageData> => {
    // Se construye la URL completa con el ID del cliente.
    const fullURL = `${googleScriptURL}?id=${clientID}`;
    console.log("fullURL", fullURL)

    // Si no hay URL, se lee el archivo con el fallback.
    if (!googleScriptURL) {
      return readFallbackData();
    }

    try {
      // Se hace la petición a la URL de Google Script.
      const response = await fetch(fullURL);
      const data = await response.json();
      return data as AcademiaPageData;
    } catch (error) {
      // Si hay un error, se lee el archivo con el fallback.
      console.error("error", error);
      return readFallbackData();
    }
  },
  ["academia-google-script-data"],
);
