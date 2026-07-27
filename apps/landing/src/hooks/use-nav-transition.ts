"use client";

import { useEffect } from "react";

/** --- 1. Navegación: estado con scroll --- */
export function useNavTransition() {
  useEffect(() => {
    const nav = document.getElementById("nav");

    const onScroll = () => {
      if (!nav) return;
      nav.classList.toggle("con-scroll", window.scrollY > 10);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
}
