import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function NotFound() {
  return (
    <div
      style={{ backgroundImage: `url(/growith/bg-1.jpg)` }}
      className={cn(
        "bg-cover bg-center bg-no-repeat",
        "flex h-screen flex-col items-center justify-center gap-4 px-6 text-center",
      )}
    >
      <Image
        src="/growith/icon-white.png"
        alt="Growith"
        width={140}
        height={140}
        priority
      />
      <p className="text-lg tracking-widest text-off-white/70">
        {"404 | Página no encontrada"}
      </p>
    </div>
  );
}
