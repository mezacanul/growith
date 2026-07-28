"use client";

import { useAccordions } from "@/hooks/use-accordions";
// import { useBrochureModal } from "@/hooks/use-brochure-modal";
import { useFormValidation } from "@/hooks/use-form-validation";
import { useMobileMenu } from "@/hooks/use-mobile-menu";
import { useNavTransition } from "@/hooks/use-nav-transition";
import { useRevealSections } from "@/hooks/use-reveal-sections";
import type {
  LandingPageAssets,
  ProximaGeneracion,
} from "@/types/landing-page-data";
import Hero from "@/components/Index/hero";
import QuienesSomos from "@/components/Index/quienes-somos";
import Programa from "@/components/Index/programa";
import Perfil from "@/components/Index/perfil";
import Coach from "@/components/Index/coach";
import Experiencia from "@/components/Index/experiencia";
import Resultados from "@/components/Index/resultados";
import ProximaGeneracionSection from "@/components/Index/proxima-generacion";
import Aplicacion from "@/components/Index/aplicacion";
import Faq from "@/components/Index/faq";
import CtaFinal from "@/components/Index/cta-final";

type MainProps = {
  assets: LandingPageAssets;
  proximaGeneracion: ProximaGeneracion;
  googleScriptURL: string;
};

export default function MainUI({
  assets,
  proximaGeneracion,
  googleScriptURL,
}: MainProps) {
  useNavTransition();
  useMobileMenu();
  useRevealSections();
  useAccordions();
  useFormValidation(googleScriptURL);
  // useBrochureModal();

  return (
    <main id="inicio">
      {/**
       * Hero — Business Growth: construye una empresa rentable, organizada y
       * preparada para crecer sin depender completamente de ti.
       */}
      <Hero assets={assets} />

      {/**
       * Quiénes somos — Una nueva forma de ver los negocios: propósito, visión
       * y misión de Growith acompañando empresarios con metodologías comprobadas.
       */}
      <QuienesSomos />

      {/**
       * Problema — Tu empresa puede estar creciendo, pero también el caos:
       * dependencia del dueño, falta de indicadores y urgencias que dominan.
       */}
      {/* MOVE TO /acerca-del-programa */}
      {/* <Problema /> */}

      {/**
       * Programa — No es un curso: es un programa de transformación empresarial
       * de nueve meses (aprendizaje, implementación, coaching y accountability).
       */}
      <Programa />

      {/**
       * Perfil — Para empresarios listos para el siguiente nivel; aclara a quién
       * sí está dirigido Business Growth y a quién no.
       */}
      <Perfil />

      {/**
       * Transformación — Antes/después: de operar el negocio (apagar incendios)
       * a dirigir la empresa (prioridades, líderes, estructura).
       */}
      {/* MOVE TO /acerca-del-programa */}
      {/* <Transformacion /> */}

      {/**
       * Capacidades — Lo que construirás: estrategia, finanzas, marketing y
       * ventas, liderazgo, sistemas/operaciones y ejecución/crecimiento.
       */}
      {/* MOVE TO /acerca-del-programa */}
      {/* <Capacidades /> */}

      {/**
       * Roadmap — Recorrido de nueve meses en cinco etapas: Lead Yourself,
       * Business, Team, Operations y Growth.
       */}
      {/* MOVE TO /acerca-del-programa */}
      {/* <Roadmap /> */}

      {/**
       * Contenido — Quince sesiones ejecutivas (acordeón) con un solo objetivo:
       * una empresa mejor dirigida.
       */}
      {/* MOVE TO /contenido */}
      {/* <Contenido /> */}

      {/**
       * Coach — Luis Arredondo, Director Sede Península ActionCOACH: trayectoria,
       * formación y credenciales del coach del programa.
       */}
      <Coach assets={assets} />

      {/**
       * Metodología — Aprender, implementar, medir y mejorar: sesiones grupales,
       * seguimiento individual, auditorías y comunidad empresarial.
       */}
      {/* MOVE TO /acerca-del-programa */}
      {/* <Metodologia /> */}

      {/**
       * Esquemas — Academia Online vs Presencial: mismo contenido, distinta
       * cercanía; elige cómo vivir Business Growth.
       */}
      {/* MOVE TO /esquemas */}
      {/* <Esquemas /> */}

      {/**
       * Incluye — Una experiencia ejecutiva completa: coach, trainer, mentoría,
       * auditorías, plataforma, certificado, graduación y Alumni.
       */}
      {/* MOVE TO /acerca-del-programa */}
      {/* <Incluye /> */}

      {/**
       * Experiencia — Más que sesiones: comunidad de empresarios en crecimiento
       * (networking, pares, accountability y relaciones de largo plazo).
       */}
      <Experiencia assets={assets} />

      {/**
       * Resultados esperados — Claridad estratégica, finanzas, procesos, equipo
       * y menor dependencia de decisiones centralizadas (sin garantías absolutas).
       */}
      <Resultados />

      {/**
       * Testimonios — Empresarios que decidieron dirigir diferente: citas,
       * resúmenes y perfiles de ejemplo.
       */}
      {/* MOVE TO /testimonios */}
      {/* <Testimonios testimoniales={testimoniales} /> */}

      {/**
       * Alumni — La graduación es el inicio: eventos, networking, programas
       * avanzados y vinculación empresarial continua.
       */}
      {/* MOVE TO /acerca-del-programa */}
      {/* <Alumni /> */}

      {/**
       * Próxima generación — Reserva tu lugar: fecha, duración, modalidad,
       * inversión y cupo limitado de la siguiente generación.
       */}
      <ProximaGeneracionSection proximaGeneracion={proximaGeneracion} />

      {/**
       * Aplicación — El ingreso empieza con una conversación: pasos del proceso
       * y formulario de solicitud de aplicación.
       */}
      <Aplicacion />

      {/**
       * FAQ — Lo que los empresarios preguntan antes de aplicar: duración,
       * modalidad, requisitos, diferencia vs MBA/consultoría y pagos.
       */}
      <Faq />

      {/**
       * CTA final — Tu negocio llegó hasta aquí por esfuerzo; el siguiente nivel
       * pide mejor estrategia, equipo y sistema. Aplica o descarga el brochure.
       */}
      <CtaFinal assets={assets} />
    </main>
  );
}
