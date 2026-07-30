"use client";

import { useRevealSections } from "@/hooks/use-reveal-sections";
import { useMobileMenu } from "@/hooks/use-mobile-menu";
import { useNavTransition } from "@/hooks/use-nav-transition";

export function AcademiaEffects({ children }: { children: React.ReactNode }) {
  useNavTransition();
  useMobileMenu();
  useRevealSections();
  return <>{children}</>;
}
