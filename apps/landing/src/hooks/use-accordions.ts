"use client";

import { useEffect } from "react";

function activarAcordeon(
  selectorItem: string,
  selectorBoton: string,
  selectorContenido: string,
) {
  const cleanups: Array<() => void> = [];

  document.querySelectorAll(selectorItem).forEach((item) => {
    const boton = item.querySelector<HTMLElement>(selectorBoton);
    const contenido = item.querySelector<HTMLElement>(selectorContenido);
    if (!boton || !contenido) return;

    const onClick = () => {
      const abierto = item.classList.toggle("abierta");
      boton.setAttribute("aria-expanded", abierto ? "true" : "false");
      contenido.style.maxHeight = abierto
        ? `${contenido.scrollHeight}px`
        : "0";
    };

    boton.addEventListener("click", onClick);
    cleanups.push(() => boton.removeEventListener("click", onClick));
  });

  return () => cleanups.forEach((cleanup) => cleanup());
}

/** --- 4. Acordeones (sesiones y FAQ) --- */
export function useAccordions() {
  useEffect(() => {
    const cleanupSesiones = activarAcordeon(
      ".sesion",
      ".sesion-btn",
      ".sesion-contenido",
    );
    const cleanupFaqs = activarAcordeon(".faq", ".faq-btn", ".faq-contenido");

    return () => {
      cleanupSesiones();
      cleanupFaqs();
    };
  }, []);
}
