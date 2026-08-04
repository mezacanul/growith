"use client";

import { useState } from "react";
import { Button } from "@/components/shared/button";
import { toTitleCase } from "@/lib/utils";
import type { AcademiaWebsite } from "@/types/academia-list";

function toHttpsUrl(str: string) {
  return `https://${str}`;
}

function Spinner() {
  return (
    <span
      className="inline-block size-4 animate-spin rounded-full border-2 border-off-white border-t-transparent"
      aria-hidden
    />
  );
}

interface WebsiteCardProps {
  website: AcademiaWebsite;
}

export function WebsiteCard({ website: initialWebsite }: WebsiteCardProps) {
  const [website, setWebsite] = useState(initialWebsite);
  const [copied, setCopied] = useState(false);
  const [initializing, setInitializing] = useState(false);

  const title = toTitleCase(website.clientSTR);
  const hasFolder = website.folderID != null;
  const href = website.websiteURL ? toHttpsUrl(website.websiteURL) : null;

  async function handleCopyUrl() {
    if (!href) return;
    try {
      await navigator.clipboard.writeText(href);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  }

  async function handleInicializar() {
    if (initializing) return;

    setInitializing(true);
    await new Promise((resolve) => window.setTimeout(resolve, 2000));
    setWebsite((current) => ({
      ...current,
      websiteURL: "test.com/test",
      folderID: "abc123",
    }));
    setInitializing(false);
  }

  return (
    <article className="flex items-center gap-3 rounded-lg border border-dark-green/15 bg-off-white px-3 py-5 shadow-sm sm:h-full sm:flex-col sm:items-stretch sm:justify-between sm:gap-5 sm:p-6 sm:py-3 sm:shadow-lg lg:py-2.5">
      <div className="min-w-0 flex-1">
        <div className="hidden sm:inline-flex">
          <span className="eyebrow inline-flex">Sitio</span>
        </div>
        {href ? (
          <a
            href={href}
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
            {website.websiteURL}
          </p>
        )}
      </div>

      <div className="shrink-0 sm:pt-1">
        {hasFolder ? (
          <Button
            variant="brand"
            className="px-3 py-2 sm:w-auto sm:px-5 sm:py-3.5"
            onClick={handleCopyUrl}
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
