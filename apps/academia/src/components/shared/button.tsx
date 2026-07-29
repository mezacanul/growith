import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

const variantMap = {
  primary: "bgc-primary tc-white",
  light: "bgc-white tc-primary",
  dark: "bgc-night tc-white",
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
  const props = {
    className: cn(
      variantMap[variant],
      "rounded-sm py-2 px-5 text-center",
      "text-base font-bold",
      "transition-all duration-300",
      "hover:scale-105",
      "uppercase",
      "shadow-sm",
      "hover:cursor-pointer",
      className,
    ),
  };

  if (asLink) {
    return (
      <a target={target} href={href} rel="noopener noreferrer" {...props}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" {...props}>
      {children}
    </button>
  );
}
