"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  revalidateCacheTag,
  type CacheRevalidateKey,
} from "@/lib/actions/revalidate-tag";

type GoogleCacheRevalidatorProps = {
  tag: CacheRevalidateKey;
  fetchFnArgs?: Record<string, unknown>;
};

export default function GoogleCacheRevalidator({
  tag,
  fetchFnArgs,
}: GoogleCacheRevalidatorProps) {
  const pathname = usePathname();
  const visited = useRef<string[]>([]);

  useEffect(() => {
    if (typeof window === "undefined" || !pathname) return;

    const last = visited.current[visited.current.length - 1];
    if (last === pathname) return;

    const isReload = visited.current.length === 0;
    if (isReload) {
      console.log(`[revalidate] started for tag: ${tag}`);
      const toastId = toast.loading("Actualizando datos...", {
        autoClose: false,
        closeOnClick: false,
        draggable: false,
      });

      void revalidateCacheTag(tag, fetchFnArgs)
        .then((result) => {
          console.log(`[revalidate] finished for tag: ${result.tag}`, result);
          toast.dismiss(toastId);
        })
        .catch((error) => {
          console.error(`[revalidate] failed for tag: ${tag}`, error);
          toast.update(toastId, {
            render: "Error al actualizar datos",
            type: "error",
            isLoading: false,
            autoClose: 4000,
            closeOnClick: true,
          });
        });
    }

    visited.current = [...visited.current, pathname];
    console.log("visited routes", visited.current);
  }, [pathname, tag, fetchFnArgs]);

  return null;
}
