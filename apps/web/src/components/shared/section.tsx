import { cn } from "@/lib/utils";
import type { HTMLAttributes, ReactNode } from "react";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  className?: string;
  parentClass?: string;
}

export function Section({
  children,
  className,
  parentClass,
  ...props
}: SectionProps) {
  return (
    <section className={cn("w-full flex justify-center", parentClass)} {...props}>
      <div className={cn("w-[85%] lg:w-[80%] lg:mx-auto", className)}>
        {children}
      </div>
    </section>
  );
}
