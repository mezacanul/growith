import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes, ReactNode } from "react";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3.5 text-xs font-bold uppercase tracking-wider transition hover:-translate-y-0.5";

const variantMap = {
  brand: cn(
    base,
    "bg-forest-green text-off-white shadow-lg hover:bg-dark-green",
  ),
  "brand-light": cn(
    base,
    "bg-off-white text-dark-green shadow-md",
  ),
  primary: cn(
    base,
    "bg-blue-primary text-off-white shadow-lg hover:bg-blue-primary-hover",
  ),
} as const;

export type ButtonVariant = keyof typeof variantMap;

interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
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
  type = "button",
  ...props
}: ButtonProps) {
  const classes = cn(variantMap[variant], className, "!text-base");

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
    <button type={type} className={classes} {...props}>
      {children}
    </button>
  );
}
