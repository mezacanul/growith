"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/shared/button";
import { toTitleCase } from "@/lib/utils";
import { getBaseUrl, handleCopyUrl } from "@/lib/helpers";
import type { AcademiaWebsite } from "@/types/academia-list";
import { Spinner } from "@/components/ui/spinner";
import { initWebsite } from "@/lib/actions/init-website";

interface WebsiteCardProps {
  website: AcademiaWebsite;
}

export function WebsiteCard({ website: initialWebsite }: WebsiteCardProps) {
  const [website, setWebsite] = useState(initialWebsite);
  const [copied, setCopied] = useState(false);
  const [initializing, setInitializing] = useState(false);
  const [baseUrl, setBaseUrl] = useState<string | null>(null);

  const title = toTitleCase(website.clientSTR);
  const hasFolder = website.folderID != null;
  // const href = website.websiteURL ? toHttpsUrl(website.websiteURL) : null;

  useEffect(() => {
    if (typeof window !== "undefined") {
      setBaseUrl(getBaseUrl(window));
    }
  }, []);

  async function handleInicializar() {
    if (initializing) return;

    setInitializing(true);
    const titleCased = toTitleCase(website.clientSTR);
    console.log("titleCased", titleCased);

    // return
    const response = await initWebsite(titleCased);
    console.log("response", response);
    if (response.status === "success") {
      setWebsite((current) => ({
        ...current,
        websiteURL: response.data.websiteURL,
        folderID: response.data.newFolder.id,
      }));
    } else {
      console.error("error", response.message);
    }
    setInitializing(false);
  }

  return (
    <article className="flex items-center gap-3 rounded-lg border border-dark-green/15 bg-off-white px-3 shadow-sm sm:h-full sm:flex-col sm:items-stretch sm:justify-between sm:gap-5 sm:p-6 sm:shadow-lg py-3">
      <div className="min-w-0 flex-1">
        {/* <div className="hidden sm:inline-flex">
          <span className="eyebrow inline-flex">Sitio</span>
        </div> */}
        {website.websiteURL ? (
          <a
            href={website.websiteURL}
            target="_blank"
            rel="noopener noreferrer"
            className="block truncate text-base font-bold !text-blue-primary underline decoration-blue-primary/30 underline-offset-2 transition hover:!text-blue-primary-hover hover:decoration-blue-primary sm:text-xl sm:underline-offset-4"
          >
            {title}
          </a>
        ) : (
          <h3 className="truncate text-base font-bold text-dark-green sm:text-xl">
            {title}
          </h3>
        )}
        {website.websiteURL && (
          <p className="mt-0.5 truncate text-xs text-night/60 sm:mt-2 sm:break-all sm:text-sm sm:whitespace-normal">
            {`${baseUrl}${website.websiteURL}`}
          </p>
        )}
      </div>

      <div className="shrink-0 sm:pt-1">
        {hasFolder ? (
          <Button
            variant="brand"
            className="px-3 py-2 sm:w-auto sm:px-5 sm:py-3.5"
            onClick={() =>
              handleCopyUrl(website.websiteURL as string, setCopied, baseUrl)
            }
          >
            {copied ? "Copiado" : "Copiar URL"}
          </Button>
        ) : (
          <Button
            variant="primary"
            className="min-w-28 px-3 py-2 sm:w-auto sm:px-5 sm:py-3.5"
            onClick={handleInicializar}
            disabled={initializing}
            aria-busy={initializing}
          >
            {initializing ? <Spinner /> : "Inicializar"}
          </Button>
        )}
      </div>
    </article>
  );
}
