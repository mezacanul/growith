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
  async (): Promise<AcademiaPageData> => {
    if (!googleScriptURL) {
      return readFallbackData();
    }

    try {
      const response = await fetch(googleScriptURL);
      const data = await response.json();
      return data as AcademiaPageData;
    } catch (error) {
      console.error("error", error);
      return readFallbackData();
    }
  },
  ["academia-google-script-data"],
);
