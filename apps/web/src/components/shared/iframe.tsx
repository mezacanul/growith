import { cn } from "@/lib/utils";
import Image from "next/image";

interface IFrameProps {
  src: string;
  drive?: boolean;
  web?: string | null;
  className?: string;
  title?: string;
}

/** Colors sampled from public/960px-Google_Drive_icon_2026-svg.webp */
const DRIVE_BORDER =
  "conic-gradient(from -90deg, #0ebc5f 0deg 120deg, #fed60e 120deg 240deg, #3186ff 240deg 360deg)";

export function IFrame({
  src,
  drive = false,
  web = null,
  className,
  title = "Embedded content",
}: IFrameProps) {
  if (!drive) {
    return (
      <div className="relative h-full w-full overflow-hidden rounded-[10px] border-[3px] border-[#d8d6d1] bg-white">
        <iframe
          src={src}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className={cn("h-full w-full border-0", className)}
        />
      </div>
    );
  }

  return (
    <div
      className="relative h-full w-full rounded-[10px] p-[3px]"
      style={{ backgroundImage: DRIVE_BORDER }}
    >
      <div className="relative h-full w-full overflow-hidden rounded-[7px] bg-white">
        <iframe
          src={src}
          title={title}
          className={cn("h-full w-full border-0", className)}
        />
        {web && (
          <a
            href={web}
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
        )}
      </div>
    </div>
  );
}
