"use client";

import { useEffect } from "react";

function validarCampo(campo: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement) {
  const contenedor = campo.closest(".campo");
  if (!contenedor) return true;

  let valido = campo.checkValidity() && campo.value.trim() !== "";
  if (!campo.required) valido = true;

  contenedor.classList.toggle("invalido", !valido);
  return valido;
}

function validarFormulario(form: HTMLFormElement) {
  let valido = true;

  form
    .querySelectorAll<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >("input[required], select[required], textarea[required]")
    .forEach((campo) => {
      if (campo instanceof HTMLInputElement && campo.type === "checkbox") {
        if (!campo.checked) {
          valido = false;
          campo.focus();
        }
        return;
      }

      if (!validarCampo(campo)) valido = false;
    });

  return valido;
}

/** --- 6. Modal de brochure --- */
export function useBrochureModal() {
  useEffect(() => {
    const modal = document.getElementById("modalBrochure");
    if (!modal) return;

    const abrirBtns = document.querySelectorAll("[data-abrir-brochure]");
    const cerrarBtns = document.querySelectorAll("[data-cerrar-modal]");
    const formBrochure = document.getElementById(
      "formBrochure",
    ) as HTMLFormElement | null;

    const abrirModal = () => {
      modal.classList.add("visible");
      document.getElementById("b-nombre")?.focus();
    };

    const cerrarModal = () => {
      modal.classList.remove("visible");
    };

    const onBackdropClick = (e: MouseEvent) => {
      if (e.target === modal) cerrarModal();
    };

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") cerrarModal();
    };

    const onBrochureSubmit = (e: SubmitEvent) => {
      e.preventDefault();
      if (!formBrochure) return;

      if (validarFormulario(formBrochure)) {
        /* [REEMPLAZAR] Conectar con el envío real del brochure (PDF oficial) */
        document.getElementById("brochureExito")?.classList.add("visible");
      }
    };

    const onBrochureInput = (e: Event) => {
      const target = e.target as HTMLElement | null;
      const contenedor = target?.closest(".campo");
      if (contenedor) contenedor.classList.remove("invalido");
    };

    abrirBtns.forEach((btn) => btn.addEventListener("click", abrirModal));
    cerrarBtns.forEach((btn) => btn.addEventListener("click", cerrarModal));
    modal.addEventListener("click", onBackdropClick);
    document.addEventListener("keydown", onKeyDown);
    formBrochure?.addEventListener("submit", onBrochureSubmit);
    formBrochure?.addEventListener("input", onBrochureInput);

    return () => {
      abrirBtns.forEach((btn) => btn.removeEventListener("click", abrirModal));
      cerrarBtns.forEach((btn) => btn.removeEventListener("click", cerrarModal));
      modal.removeEventListener("click", onBackdropClick);
      document.removeEventListener("keydown", onKeyDown);
      formBrochure?.removeEventListener("submit", onBrochureSubmit);
      formBrochure?.removeEventListener("input", onBrochureInput);
    };
  }, []);
}
