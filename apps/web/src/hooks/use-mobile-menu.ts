"use client";

import { useEffect } from "react";

export function useMobileMenu() {
  useEffect(() => {
    const hamburguesa = document.getElementById("hamburguesa");
    const navLinks = document.getElementById("navLinks");
    if (!hamburguesa || !navLinks) return;

    const onToggle = () => {
      const abierto = navLinks.classList.toggle("abierto");
      hamburguesa.setAttribute("aria-expanded", abierto ? "true" : "false");
      hamburguesa.setAttribute(
        "aria-label",
        abierto ? "Cerrar menú" : "Abrir menú",
      );
    };

    const onNavClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (target?.tagName === "A") {
        navLinks.classList.remove("abierto");
        hamburguesa.setAttribute("aria-expanded", "false");
        hamburguesa.setAttribute("aria-label", "Abrir menú");
      }
    };

    hamburguesa.addEventListener("click", onToggle);
    navLinks.addEventListener("click", onNavClick);
    return () => {
      hamburguesa.removeEventListener("click", onToggle);
      navLinks.removeEventListener("click", onNavClick);
    };
  }, []);
}
