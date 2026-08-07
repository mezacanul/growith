"use server";

import { updateTag } from "next/cache";
import { getAcademiaList } from "@/lib/data/academia-list";
import { getAcademiaPageData } from "@/lib/data/academia-page-data";

/** Serializable keys only — functions cannot be passed into Server Actions. */
export type CacheRevalidateKey =
  | "academia-list"
  | "academia-google-script-data";

type RevalidateArgs = {
  [key: string]: unknown;
};

const fetchers: Record<
  CacheRevalidateKey,
  (args?: RevalidateArgs) => Promise<unknown>
> = {
  "academia-list": async () => getAcademiaList(),
  "academia-google-script-data": async (args) => {
    if (!args?.clientID || typeof args.clientID !== "string") {
      throw new Error("clientID is required for academia-google-script-data");
    }
    return getAcademiaPageData(args.clientID as string);
  },
};

export async function revalidateCacheTag(
  tag: CacheRevalidateKey,
  args?: RevalidateArgs,
) {
  // console.log(`[revalidate] invalidating tag: ${tag}`);
  updateTag(tag);

  const fetchData = fetchers[tag];
  if (!fetchData) {
    throw new Error(`No fetcher registered for tag: ${tag}`);
  }

  console.log(`[revalidate] refetching data for tag: ${tag}`);
  await fetchData(args);
  console.log(`[complete] refetch complete for tag: ${tag}`);

  return { tag, status: "complete" as const };
}
