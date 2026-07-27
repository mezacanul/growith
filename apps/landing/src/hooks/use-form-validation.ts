"use client";

import { useEffect } from "react";

function validarCampo(
  campo: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement,
) {
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

/** --- 5. Validación básica de formularios --- */
export function useFormValidation(googleScriptURL: string) {
  useEffect(() => {
    const formAplicacion = document.getElementById(
      "formAplicacion",
    ) as HTMLFormElement | null;

    if (!formAplicacion) return;

    const onSubmit = (e: SubmitEvent) => {
      e.preventDefault();

      if (!validarFormulario(formAplicacion)) return;

      const formData = new FormData(e.currentTarget as HTMLFormElement);
      const values = [...formData.values()];
      console.log(values);

      const guardarLead = async () => {
        const response = await fetch(googleScriptURL, {
          // mode: "cors", // Evita bloqueos de origen
          headers: {
            "Content-Type": "text/plain", // Buenas prácticas para evitar pre-flights complejos de CORS
          },
          method: "POST",
          body: JSON.stringify(values),
        });
        const data = await response.json();
        console.log("data", data);
      };

      guardarLead();

      /* [REEMPLAZAR] Conectar aquí con el CRM, correo o backend oficial */
      document.getElementById("formExito")?.classList.add("visible");
      // formAplicacion.reset();
    };

    const onInput = (e: Event) => {
      const target = e.target as HTMLElement | null;
      const contenedor = target?.closest(".campo");
      if (contenedor) contenedor.classList.remove("invalido");
    };

    formAplicacion.addEventListener("submit", onSubmit);
    formAplicacion.addEventListener("input", onInput);

    return () => {
      formAplicacion.removeEventListener("submit", onSubmit);
      formAplicacion.removeEventListener("input", onInput);
    };
  }, []);
}
