import { cn } from "@/lib/utils";
import Image from "next/image";

export default function Home() {
  return (
    <div
      style={{ backgroundImage: `url(/growith/bg-1.jpg)` }}
      className={cn(
        "bg-cover bg-center bg-no-repeat",
        "flex flex-col items-center justify-center h-screen",
      )}
    >
      <Image
        src="/growith/icon-white.png"
        alt="Logo"
        width={140}
        height={140}
      />
      <p className="text-white text-xl italic">{"Próximamente..."}</p>
    </div>
  );
}
