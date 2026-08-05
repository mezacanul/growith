import { readFile } from "fs/promises";
import path from "path";
import type { AcademiaList } from "@/types/academia-list";
import { unstable_cache } from "next/cache";

const googleAcademiaListURL = process.env.GOOGLE_SCRIPT_LIST_ACADEMIA as string;
console.log("googleAcademiaListURL", googleAcademiaListURL);

async function readFallbackList(): Promise<AcademiaList> {
  const filePath = path.join(process.cwd(), "public", "academia-list.json");
  const contents = await readFile(filePath, "utf8");
  return JSON.parse(contents) as AcademiaList;
}

export const getAcademiaList =
  unstable_cache(async (): Promise<AcademiaList> => {
    try {
      const response = await fetch(googleAcademiaListURL);
      const data = await response.json();
      return data as AcademiaList;
    } catch (error) {
      console.error("Error fetching academia list:", error);
      throw new Error("Error fetching academia list");
      return readFallbackList();
    }
  }, ["academia-list"]);
