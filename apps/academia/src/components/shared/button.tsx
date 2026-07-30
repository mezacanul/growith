import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3.5 text-[0.82rem] font-bold uppercase tracking-[0.06em] transition hover:-translate-y-0.5";

const variantMap = {
  brand: cn(
    base,
    "bg-[linear-gradient(135deg,var(--text-forest-green),var(--text-dark-green))] text-white shadow-[0_14px_30px_rgba(57,103,67,0.28)]",
  ),
  "brand-light": cn(
    base,
    "bg-off-white !text-dark-green shadow-[0_10px_24px_rgba(13,15,14,0.12)]",
  ),
} as const;

export type ButtonVariant = keyof typeof variantMap;

interface ButtonProps {
  variant?: ButtonVariant;
  children: ReactNode;
  className?: string;
  asLink?: boolean;
  href?: string;
  target?: string;
}

export function Button({
  variant = "brand",
  children,
  className,
  asLink = false,
  href = "",
  target = "_blank",
}: ButtonProps) {
  const classes = cn(variantMap[variant], className);

  if (asLink) {
    return (
      <a
        target={target}
        href={href}
        rel="noopener noreferrer"
        className={classes}
      >
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={classes}>
      {children}
    </button>
  );
}
