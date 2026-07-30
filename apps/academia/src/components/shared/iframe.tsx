import { cn } from "@/lib/utils";
import Image from "next/image";

interface IFrameProps {
  src: string;
  className?: string;
}

export function IFrame({ src, className }: IFrameProps) {
  return (
    <div className="relative h-full w-full">
      <iframe
        src={src}
        title="Drive embed"
        className={cn("h-full w-full border-0", className)}
      />
      <a
        href={src}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Abrir en Google Drive"
        className="absolute bottom-6 right-6 z-10 flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-md ring-1 ring-black/10 transition hover:scale-110"
      >
        <Image
          src="/960px-Google_Drive_icon_2026-svg.webp"
          alt="Google Drive"
          width={26}
          height={24}
          className="h-7 w-auto"
        />
      </a>
    </div>
  );
}
