import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

const variantMap = {
  primary: "btn btn-primario",
  light: "btn btn-claro",
  dark: "btn btn-borde-claro",
} as const;

type ButtonVariant = keyof typeof variantMap;

interface ButtonProps {
  variant?: ButtonVariant;
  children: ReactNode;
  className?: string;
  asLink?: boolean;
  href?: string;
  target?: string;
}

export function Button({
  variant = "primary",
  children,
  className,
  asLink = false,
  href = "",
  target = "_blank",
}: ButtonProps) {
  const classes = cn(variantMap[variant], className);

  if (asLink) {
    return (
      <a target={target} href={href} rel="noopener noreferrer" className={classes}>
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
