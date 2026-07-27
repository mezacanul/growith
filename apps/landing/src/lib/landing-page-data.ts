import { readFile } from "fs/promises";
import path from "path";
import { cache } from "react";
import type { LandingPageData } from "@/types/landing-page-data";

const googleScriptURL = process.env.GOOGLE_SCRIPT_URL as string;
console.log("googleScriptURL", googleScriptURL);

export const getLandingPageData = cache(async (): Promise<LandingPageData> => {
  const filePath = path.join(process.cwd(), "public", "landing_page_data.json");
  const contents = await readFile(filePath, "utf8");

  try {
    const response = await fetch(googleScriptURL);
    console.log("response", response);
    const data = await response.json();
    console.log("data", data);
    return data as LandingPageData;
  } catch (error) {
    console.error("error", error);
    return JSON.parse(contents) as LandingPageData;
  }
});
