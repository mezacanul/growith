import { readFile } from "fs/promises";
import path from "path";
import { cache } from "react";
import type { LandingPageData } from "@/types/landing-page-data";

export const getLandingPageData = cache(async (): Promise<LandingPageData> => {
  const filePath = path.join(
    process.cwd(),
    "public",
    "landing_page_data.json",
  );
  const contents = await readFile(filePath, "utf8");
  return JSON.parse(contents) as LandingPageData;
});
