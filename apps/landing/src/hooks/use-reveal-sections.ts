"use client";

import { useEffect } from "react";

/** --- 3. Animaciones de entrada sutiles (IntersectionObserver) --- */
export function useRevealSections() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const elements = document.querySelectorAll(".revelar");
    let observer: IntersectionObserver | null = null;

    if ("IntersectionObserver" in window && !prefersReducedMotion) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
              observer?.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12 },
      );
      elements.forEach((el) => observer?.observe(el));
    } else {
      elements.forEach((el) => el.classList.add("visible"));
    }

    return () => {
      observer?.disconnect();
    };
  }, []);
}
