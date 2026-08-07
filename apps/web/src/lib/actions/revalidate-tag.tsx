"use server";

import { updateTag } from "next/cache";

export async function revalidateCacheTag(tag: string) {
  console.log(`invalidating cache tag: ${tag}`);
  updateTag(tag);
}
