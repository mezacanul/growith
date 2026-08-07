import { cn } from "@/lib/utils";
import type { HTMLAttributes, ReactNode } from "react";

const fontSizeMap = {
  p: "text-base",
  h1: "text-4xl",
  h2: "text-3xl",
  h3: "text-2xl",
  h4: "text-xl",
  h5: "text-lg",
  h6: "text-base",
  sm: "text-sm",
  xs: "text-xs",
} as const;

type TextVariant = keyof typeof fontSizeMap;

interface TextProps extends HTMLAttributes<HTMLElement> {
  variant?: TextVariant;
  children: ReactNode;
  inline?: boolean;
}

export function Text({
  variant = "p",
  children,
  className,
  inline = false,
  ...props
}: TextProps) {
  const spreadProps = {
    className: cn(fontSizeMap[variant], className),
    ...props,
  };

  if (inline) {
    return <span {...spreadProps}>{children}</span>;
  }

  return <p {...spreadProps}>{children}</p>;
}
