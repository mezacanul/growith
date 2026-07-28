"use client";

import { useAccordions } from "@/hooks/use-accordions";
import { useMobileMenu } from "@/hooks/use-mobile-menu";
import { useNavTransition } from "@/hooks/use-nav-transition";
import { useRevealSections } from "@/hooks/use-reveal-sections";

/** Shared client effects for secondary landing routes (nav, mobile menu, reveal, accordions). */
export function LandingEffects({ children }: { children: React.ReactNode }) {
  useNavTransition();
  useMobileMenu();
  useRevealSections();
  useAccordions();

  return <>{children}</>;
}
