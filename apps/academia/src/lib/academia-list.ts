import { readFile } from "fs/promises";
import path from "path";
import type { AcademiaList } from "@/types/academia-list";

export async function getAcademiaList(): Promise<AcademiaList> {
  const filePath = path.join(process.cwd(), "public", "academia-list.json");
  const contents = await readFile(filePath, "utf8");
  return JSON.parse(contents) as AcademiaList;
}
