"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { revalidateCacheTag } from "@/lib/actions/revalidate-tag";
import { toast, ToastContainer } from "react-toastify";

export default function GoogleCacheRevalidator({ tag }: { tag?: string }) {
  const pathname = usePathname();
  const visited = useRef<string[]>([]);

  useEffect(() => {
    if (typeof window === "undefined" || !pathname) return;

    const last = visited.current[visited.current.length - 1];
    if (last === pathname) return;

    const isReload = visited.current.length === 0;
    if (isReload && tag) {
      console.log(`refetching cache tag: ${tag}`);
      toast.success(`Actualizando datos...`);
      void revalidateCacheTag(tag);
    }

    visited.current = [...visited.current, pathname];
    console.log("visited routes", visited.current);
  }, [pathname, tag]);

  return <ToastContainer />;
}
