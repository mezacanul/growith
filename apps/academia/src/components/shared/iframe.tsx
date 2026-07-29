import { cn } from "@/lib/utils";

interface IFrameProps {
  src: string;
  className?: string;
}

export function IFrame({ src, className }: IFrameProps) {
  return (
    <iframe
      src={src}
      title="Drive embed"
      className={cn(
        "w-full h-full",
        "bg-[#FFFFFF] rounded-md shadow-md border-4 border-gray-300",
        className,
      )}
    />
  );
}
