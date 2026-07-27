"use client";

import { useAccordions } from "@/hooks/use-accordions";
// import { useBrochureModal } from "@/hooks/use-brochure-modal";
import { useFormValidation } from "@/hooks/use-form-validation";
import { useMobileMenu } from "@/hooks/use-mobile-menu";
import { useNavTransition } from "@/hooks/use-nav-transition";
import { useRevealSections } from "@/hooks/use-reveal-sections";
import type {
  LandingPageAssets,
  LandingPageTestimoniales,
  ProximaGeneracion,
} from "@/types/landing-page-data";

type MainProps = {
  assets: LandingPageAssets;
  testimoniales: LandingPageTestimoniales;
  proximaGeneracion: ProximaGeneracion;
  googleScriptURL: string;
};

export default function MainUI({
  assets,
  testimoniales,
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
      {/* ============================================================
      SECCIÓN 2. HERO
      ============================================================ */}
      <section className="hero" aria-labelledby="titulo-hero">
        <div className="contenedor">
          <div className="hero-grid">
            <div className="revelar visible">
              <span className="hero-etiqueta">
                Programa insignia de Growith Business Academy
              </span>
              <h1 id="titulo-hero">
                Business <em>Growth</em>
              </h1>
              <p className="hero-sub">
                Construye una empresa rentable, organizada y preparada
                para crecer sin depender completamente de ti.
              </p>
              <p className="hero-texto">
                Business Growth es un programa ejecutivo de nueve meses
                diseñado para empresarios que quieren dejar de operar cada
                detalle y comenzar a dirigir su empresa con estrategia,
                estructura, liderazgo e indicadores.
              </p>
              <div className="hero-botones">
                <a href="#aplicar" className="btn btn-primario">
                  Aplicar al programa
                </a>
                <a
                  href={assets.brochure}
                  target="_blank"
                  className="btn btn-secundario"
                  data-abrir-brochure
                >
                  Descargar brochure
                </a>
                {/* <button
                        className="btn btn-secundario"
                        data-abrir-brochure
                      >
                        Descargar brochure
                      </button> */}
              </div>
              <ul
                className="hero-datos"
                aria-label="Datos clave del programa"
              >
                <li>9 meses</li>
                <li>15 sesiones grupales</li>
                <li>Seguimiento individual</li>
                <li>Modalidad online o presencial</li>
                <li>Comunidad empresarial</li>
              </ul>
            </div>
            <figure className="hero-figura revelar visible">
              {/* [REEMPLAZAR] Fotografía oficial: empresario/a dirigiendo una reunión con su equipo */}
              <img
                src={assets.clientaGrowith}
                alt="Empresaria dirigiendo una reunión estratégica con su equipo directivo"
                loading="eager"
              />
              {/* <figcaption className="hero-tarjeta">
                  <strong>Deja de administrar un negocio.</strong>
                  <span>Comienza a dirigir una empresa.</span>
                </figcaption> */}
            </figure>
          </div>
        </div>
      </section>

      {/* ============================================================
      SECCIÓN 2.5. QUIÉNES SOMOS (Propósito / Visión / Misión)
      ============================================================ */}
      <section
        className="problema"
        id="quienes"
        aria-labelledby="titulo-quienes"
      >
        <div className="contenedor">
          <div className="centrado revelar">
            <span className="eyebrow">Quiénes somos</span>
            <h2 id="titulo-quienes">
              Una nueva forma de ver los negocios.
            </h2>
            <p className="intro-seccion">
              Acompañamos a los empresarios a implementar metodologías
              comprobadas, las mismas que ya han transformado a más de un
              millón de negocios alrededor del mundo.
            </p>
          </div>
          <div className="revelar grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
            <article className="pilar">
              <h3>Nuestro propósito</h3>
              <p>
                Ayudamos a los empresarios a crecer sin caos,
                implementando metodologías comprobadas para tener negocios
                rentables y estructurados.
              </p>
            </article>
            <article className="pilar">
              <h3>Nuestra visión</h3>
              <p>
                Abundancia mundial a través de la re-educación en los
                negocios.
              </p>
            </article>
            <article className="pilar">
              <h3>Nuestra misión</h3>
              <p>Dar valor en cada conversación.</p>
            </article>
          </div>
        </div>
      </section>

      {/* ============================================================
      SECCIÓN 3. IDENTIFICACIÓN DEL PROBLEMA
      ============================================================ */}
      <section className="problema" aria-labelledby="titulo-problema">
        <div className="contenedor">
          <div className="revelar">
            <span className="eyebrow">El punto de partida</span>
            <h2 id="titulo-problema">
              Tu empresa puede estar creciendo. Pero también el caos.
            </h2>
            <p className="intro-seccion">
              Muchos empresarios construyen negocios exitosos a partir de
              esfuerzo, experiencia y determinación. Sin embargo, llega un
              momento en el que trabajar más deja de ser suficiente.
            </p>
          </div>
          <div className="grid-retos revelar">
            <div className="reto">Todo depende del dueño.</div>
            <div className="reto">
              El equipo espera instrucciones constantemente.
            </div>
            <div className="reto">
              Se vende, pero la utilidad no crece.
            </div>
            <div className="reto">No existen indicadores claros.</div>
            <div className="reto">
              Los procesos viven en la cabeza de las personas.
            </div>
            <div className="reto">Las urgencias dominan la agenda.</div>
            <div className="reto">
              La empresa crece sin suficiente estructura.
            </div>
            <div className="reto">
              El empresario tiene poco tiempo para pensar
              estratégicamente.
            </div>
          </div>
          <p className="frase-destacada revelar">
            El problema no siempre es la falta de crecimiento. Muchas
            veces es crecer sin sistema.
          </p>
        </div>
      </section>

      {/* ============================================================
      SECCIÓN 4. QUÉ ES BUSINESS GROWTH
      ============================================================ */}
      <section id="programa" aria-labelledby="titulo-programa">
        <div className="contenedor">
          <div className="que-es-grid">
            <div className="revelar">
              <span className="eyebrow">El programa</span>
              <h2 id="titulo-programa">
                No es un curso. Es un programa de transformación
                empresarial.
              </h2>
              <p className="intro-seccion">
                Business Growth es el programa insignia de Growith
                Business Academy. Durante nueve meses, los participantes
                trabajan sobre su propia empresa para construir las
                capacidades, herramientas y sistemas necesarios para
                crecer con mayor rentabilidad, orden y autonomía.
              </p>
              <p className="cita-editorial">
                No estudiarás casos de empresas lejanas. Trabajarás sobre
                la tuya.
              </p>
            </div>
            <div className="pilares revelar">
              <article className="pilar">
                <div className="icono" aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <path d="M4 19.5V5a1 1 0 0 1 1-1h6v16H5.5a1.5 1.5 0 0 1-1.5-1.5zM20 19.5V5a1 1 0 0 0-1-1h-6v16h5.5a1.5 1.5 0 0 0 1.5-1.5z" />
                  </svg>
                </div>
                <h3>Aprendizaje práctico</h3>
                <p>
                  Conceptos y herramientas aplicables desde la primera
                  sesión, sin teoría innecesaria.
                </p>
              </article>
              <article className="pilar">
                <div className="icono" aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <path d="M14 4h6v6M20 4 9 15M4 9v11h11" />
                  </svg>
                </div>
                <h3>Implementación</h3>
                <p>
                  Cada tema se convierte en acciones concretas dentro de
                  tu empresa.
                </p>
              </article>
              <article className="pilar">
                <div className="icono" aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <circle cx="9" cy="8" r="3.5" />
                    <path d="M2.5 20c.8-3.4 3.4-5 6.5-5s5.7 1.6 6.5 5M17 8h5M17 12h5M17 16h3" />
                  </svg>
                </div>
                <h3>Coaching</h3>
                <p>
                  Acompañamiento cercano para tomar mejores decisiones en
                  cada etapa.
                </p>
              </article>
              <article className="pilar">
                <div className="icono" aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <path d="M9 12.5 11.5 15 16 9.5M12 3l7 3v5c0 4.5-3 8.5-7 10-4-1.5-7-5.5-7-10V6z" />
                  </svg>
                </div>
                <h3>Accountability</h3>
                <p>
                  Seguimiento estructurado para asegurar avances reales
                  entre sesiones.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
      SECCIÓN 5. PARA QUIÉN ES
      ============================================================ */}
      <section
        className="problema"
        aria-labelledby="titulo-perfil"
        style={{ paddingTop: 0, background: "var(--blanco)" }}
      >
        <div className="contenedor">
          <div className="revelar">
            <span className="eyebrow">El perfil</span>
            <h2 id="titulo-perfil">
              Diseñado para empresarios que están listos para dirigir el
              siguiente nivel de su empresa.
            </h2>
          </div>
          <div className="perfil-grid revelar">
            <div className="panel panel-si">
              <h3>Business Growth está dirigido a:</h3>
              <ul>
                <li>Dueños de negocio.</li>
                <li>Socios directores.</li>
                <li>Directores generales.</li>
                <li>Empresarios con un negocio en operación.</li>
                <li>Líderes con equipos de trabajo.</li>
                <li>Empresas que buscan profesionalización.</li>
                <li>Negocios que desean crecer sin perder el control.</li>
                <li>
                  Empresarios dispuestos a implementar cambios reales.
                </li>
              </ul>
            </div>
            <div className="panel panel-no">
              <h3>Este programa no es para ti si:</h3>
              <ul>
                <li>Buscas únicamente teoría.</li>
                <li>No tienes disposición para implementar.</li>
                <li>No puedes dedicar tiempo entre sesiones.</li>
                <li>
                  Esperas resultados sin cambiar la forma de dirigir.
                </li>
                <li>Solo buscas inspiración momentánea.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
      SECCIÓN 6. LA TRANSFORMACIÓN (Antes / Después)
      ============================================================ */}
      <section
        className="transformacion"
        aria-labelledby="titulo-transformacion"
      >
        <div className="contenedor">
          <div className="revelar">
            <span className="eyebrow">La transformación</span>
            <h2 id="titulo-transformacion">
              De operar el negocio a dirigir la empresa.
            </h2>
          </div>
          <div className="comparador revelar">
            <div className="col-antes">
              <h3>Antes</h3>
              <ul>
                <li>Apagar incendios.</li>
                <li>Tomar todas las decisiones.</li>
                <li>Trabajar sin indicadores.</li>
                <li>Depender de pocas personas clave.</li>
                <li>Crecer de manera reactiva.</li>
                <li>Vender sin claridad de rentabilidad.</li>
                <li>Tener procesos informales.</li>
                <li>Vivir atrapado en la operación.</li>
              </ul>
            </div>
            <div className="col-despues">
              <h3>Después</h3>
              <ul>
                <li>Dirigir con prioridades.</li>
                <li>Desarrollar líderes.</li>
                <li>Tomar decisiones con información.</li>
                <li>Construir procesos replicables.</li>
                <li>Crecer con estructura.</li>
                <li>Entender los números del negocio.</li>
                <li>Tener un equipo más autónomo.</li>
                <li>Recuperar tiempo para pensar estratégicamente.</li>
              </ul>
            </div>
          </div>
          <div className="cta-inline revelar">
            <a href="#aplicar" className="btn btn-claro">
              Aplicar al programa
            </a>
          </div>
        </div>
      </section>

      {/* ============================================================
      SECCIÓN 7. LO QUE CONSTRUIRÁS
      ============================================================ */}
      <section aria-labelledby="titulo-capacidades">
        <div className="contenedor">
          <div className="centrado revelar">
            <span className="eyebrow">Lo que construirás</span>
            <h2 id="titulo-capacidades">
              Las capacidades que necesita una empresa preparada para
              crecer.
            </h2>
          </div>
          <div className="grid-capacidades revelar">
            <article className="capacidad">
              <div className="icono" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="9" />
                  <circle cx="12" cy="12" r="4.5" />
                  <circle cx="12" cy="12" r="1" />
                </svg>
              </div>
              <span className="tag-en">Business Strategy</span>
              <h3>Estrategia empresarial</h3>
              <p>
                Define con claridad hacia dónde va la empresa, cuáles son
                sus prioridades y cómo convertir la visión en un plan
                ejecutable.
              </p>
            </article>
            <article className="capacidad">
              <div className="icono" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path d="M3 21h18M6 21V11m6 10V6m6 15v-8" />
                </svg>
              </div>
              <span className="tag-en">Financial Performance</span>
              <h3>Desempeño financiero</h3>
              <p>
                Comprende los indicadores financieros que determinan la
                salud, rentabilidad y capacidad de crecimiento del
                negocio.
              </p>
            </article>
            <article className="capacidad">
              <div className="icono" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path d="M3 11l14-6v14L3 13v-2zM17 8.5c2 0 4 1.5 4 3.5s-2 3.5-4 3.5M7 13.5V19a1.5 1.5 0 0 0 3 0v-4" />
                </svg>
              </div>
              <span className="tag-en">Marketing and Sales</span>
              <h3>Marketing y ventas</h3>
              <p>
                Construye una estrategia comercial más clara, consistente
                y medible para atraer, convertir y desarrollar clientes.
              </p>
            </article>
            <article className="capacidad">
              <div className="icono" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <circle cx="12" cy="7" r="3.5" />
                  <path d="M5 21c.9-3.8 3.7-5.5 7-5.5s6.1 1.7 7 5.5" />
                </svg>
              </div>
              <span className="tag-en">Leadership and Team</span>
              <h3>Liderazgo y equipo</h3>
              <p>
                Fortalece tu liderazgo y desarrolla un equipo capaz de
                asumir responsabilidades, tomar decisiones y ejecutar.
              </p>
            </article>
            <article className="capacidad">
              <div className="icono" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="3" />
                  <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M19.1 4.9 17 7M7 17l-2.1 2.1" />
                </svg>
              </div>
              <span className="tag-en">Systems and Operations</span>
              <h3>Sistemas y operaciones</h3>
              <p>
                Diseña procesos, controles, indicadores y estructuras que
                permitan operar con mayor orden y menor dependencia.
              </p>
            </article>
            <article className="capacidad">
              <div className="icono" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path d="M4 20 20 4M13 4h7v7M4 20h5m-5 0v-5" />
                </svg>
              </div>
              <span className="tag-en">Execution and Growth</span>
              <h3>Ejecución y crecimiento</h3>
              <p>
                Convierte los objetivos en acciones, instala
                accountability y prepara a la empresa para un crecimiento
                sostenible.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* ============================================================
      SECCIÓN 8. BUSINESS GROWTH ROADMAP (elemento firma: escalera)
      ============================================================ */}
      <section className="roadmap" aria-labelledby="titulo-roadmap">
        <div className="contenedor">
          <div className="revelar">
            <span className="eyebrow">Business Growth Roadmap</span>
            <h2 id="titulo-roadmap">
              Un recorrido de nueve meses para transformar la forma en la
              que diriges tu negocio.
            </h2>
            <p className="intro-seccion">
              Cinco etapas progresivas: primero el empresario, después el
              negocio, el equipo, la operación y finalmente el
              crecimiento.
            </p>
          </div>
          <div
            className="escalera revelar"
            role="list"
            aria-label="Etapas del programa"
          >
            <article className="etapa" role="listitem">
              <span className="num" aria-hidden="true">
                1
              </span>
              <h3>Lead Yourself</h3>
              <p>
                Mentalidad empresarial, visión, objetivos, productividad y
                administración del tiempo.
              </p>
              <div className="base-escalera" aria-hidden="true"></div>
            </article>
            <article className="etapa" role="listitem">
              <span className="num" aria-hidden="true">
                2
              </span>
              <h3>Lead Your Business</h3>
              <p>
                Modelo de negocio, estrategia, diferenciación, marketing y
                crecimiento.
              </p>
              <div className="base-escalera" aria-hidden="true"></div>
            </article>
            <article className="etapa" role="listitem">
              <span className="num" aria-hidden="true">
                3
              </span>
              <h3>Lead Your Team</h3>
              <p>
                Liderazgo, contratación, cultura, comunicación, delegación
                y accountability.
              </p>
              <div className="base-escalera" aria-hidden="true"></div>
            </article>
            <article className="etapa" role="listitem">
              <span className="num" aria-hidden="true">
                4
              </span>
              <h3>Lead Your Operations</h3>
              <p>
                Procesos, indicadores, finanzas, rentabilidad, control y
                ejecución.
              </p>
              <div className="base-escalera" aria-hidden="true"></div>
            </article>
            <article className="etapa" role="listitem">
              <span className="num" aria-hidden="true">
                5
              </span>
              <h3>Lead Your Growth</h3>
              <p>
                Planeación, escalamiento, autonomía, sostenibilidad y
                crecimiento sin caos.
              </p>
              <div className="base-escalera" aria-hidden="true"></div>
            </article>
          </div>
          <div className="cta-inline revelar">
            <a href="#aplicar" className="btn btn-primario">
              Aplicar al programa
            </a>
          </div>
        </div>
      </section>

      {/* ============================================================
      SECCIÓN 9. CONTENIDO DE LAS 15 SESIONES (acordeón)
      ============================================================ */}
      <section id="contenido" aria-labelledby="titulo-contenido">
        <div className="contenedor">
          <div className="revelar">
            <span className="eyebrow">Contenido del programa</span>
            <h2 id="titulo-contenido">
              Quince sesiones ejecutivas. Un solo objetivo: una empresa
              mejor dirigida.
            </h2>
          </div>
          <div className="lista-sesiones revelar">
            <div className="sesion">
              <button className="sesion-btn" aria-expanded="false">
                <span className="sesion-num">01</span>
                <h3>Alineación</h3>
                <span className="flecha" aria-hidden="true"></span>
              </button>
              <div className="sesion-contenido">
                <p>
                  Defines tu punto de partida y adoptas un nuevo chip
                  mental como empresario: identificas qué tanto camino
                  tienes que recorrer y sueltas las creencias que te
                  limitan para empezar a dirigir desde otro lugar.
                </p>
              </div>
            </div>
            <div className="sesion">
              <button className="sesion-btn" aria-expanded="false">
                <span className="sesion-num">02</span>
                <h3>Indicadores financieros</h3>
                <span className="flecha" aria-hidden="true"></span>
              </button>
              <div className="sesion-contenido">
                <p>
                  Conoces y controlas de forma real tus ingresos y
                  egresos: flujo de efectivo, punto de equilibrio, Mark Up
                  y el cálculo del margen neto y bruto de tu empresa, para
                  decidir con información y no con intuición.
                </p>
              </div>
            </div>
            <div className="sesion">
              <button className="sesion-btn" aria-expanded="false">
                <span className="sesion-num">03</span>
                <h3>Cultura empresarial y destino</h3>
                <span className="flecha" aria-hidden="true"></span>
              </button>
              <div className="sesion-contenido">
                <p>
                  Defines cómo ves tu empresa en cinco años y qué
                  necesitas hacer para lograrlo: metas de negocio a cinco
                  años, misión y visión, y el sistema RAS para dar
                  seguimiento a tus compromisos.
                </p>
              </div>
            </div>
            <div className="sesion">
              <button className="sesion-btn" aria-expanded="false">
                <span className="sesion-num">04</span>
                <h3>Administración del tiempo</h3>
                <span className="flecha" aria-hidden="true"></span>
              </button>
              <div className="sesion-contenido">
                <p>
                  Descubres cuánto vale tu tiempo como empresario, dominas
                  el Registro Maestro para enfocarte en lo que realmente
                  importa, construyes tu horario modelo y aprendes a
                  delegar de manera eficiente.
                </p>
              </div>
            </div>
            <div className="sesion">
              <button className="sesion-btn" aria-expanded="false">
                <span className="sesion-num">05</span>
                <h3>Servicio al cliente</h3>
                <span className="flecha" aria-hidden="true"></span>
              </button>
              <div className="sesion-contenido">
                <p>
                  Fortaleces la experiencia que ofreces en cada punto de
                  contacto para generar recompra, fidelización y
                  recomendación de tus clientes actuales.
                </p>
              </div>
            </div>
            <div className="sesion">
              <button className="sesion-btn" aria-expanded="false">
                <span className="sesion-num">06</span>
                <h3>Marketing y publicidad</h3>
                <span className="flecha" aria-hidden="true"></span>
              </button>
              <div className="sesion-contenido">
                <p>
                  Aprendes a diseñar campañas efectivas con el formato
                  AIDA, identificas tu Característica Única de Venta,
                  defines a tu cliente ideal y dejas de competir solo por
                  precio.
                </p>
              </div>
            </div>
            <div className="sesion">
              <button className="sesion-btn" aria-expanded="false">
                <span className="sesion-num">07</span>
                <h3>Plan de marketing</h3>
                <span className="flecha" aria-hidden="true"></span>
              </button>
              <div className="sesion-contenido">
                <p>
                  Traduces la estrategia en un plan de marketing concreto,
                  listo para implementarse con tu equipo comercial.
                </p>
              </div>
            </div>
            <div className="sesion">
              <button className="sesion-btn" aria-expanded="false">
                <span className="sesion-num">08</span>
                <h3>Ventas efectivas</h3>
                <span className="flecha" aria-hidden="true"></span>
              </button>
              <div className="sesion-contenido">
                <p>
                  Tu equipo gana herramientas reales para cerrar ventas:
                  lógica vs. emoción, el sistema VAK, un catálogo de
                  ventas y un guion que maneja objeciones con un
                  seguimiento idóneo.
                </p>
              </div>
            </div>
            <div className="sesion">
              <button className="sesion-btn" aria-expanded="false">
                <span className="sesion-num">09</span>
                <h3>Sistemas e incentivos para el equipo</h3>
                <span className="flecha" aria-hidden="true"></span>
              </button>
              <div className="sesion-contenido">
                <p>
                  Entiendes cómo calcular comisiones, bonos e incentivos
                  de manera detallada, basados en la información
                  financiera real de tu negocio.
                </p>
              </div>
            </div>
            <div className="sesion">
              <button className="sesion-btn" aria-expanded="false">
                <span className="sesion-num">10</span>
                <h3>Liderazgo y equipo</h3>
                <span className="flecha" aria-hidden="true"></span>
              </button>
              <div className="sesion-contenido">
                <p>
                  Construyes las bases de un equipo verdaderamente
                  integrado y productivo, con los 13 pasos de
                  reclutamiento y la herramienta DISC.
                </p>
              </div>
            </div>
            <div className="sesion">
              <button className="sesion-btn" aria-expanded="false">
                <span className="sesion-num">11</span>
                <h3>Sistematización del negocio</h3>
                <span className="flecha" aria-hidden="true"></span>
              </button>
              <div className="sesion-contenido">
                <p>
                  Aprendes a apalancarte para que la empresa funcione sin
                  depender de ti: herramientas para sistematizar las
                  cuatro áreas principales del negocio y los indicadores
                  de desempeño de cada una.
                </p>
              </div>
            </div>
            <div className="sesion">
              <button className="sesion-btn" aria-expanded="false">
                <span className="sesion-num">12</span>
                <h3>Plan de vida</h3>
                <span className="flecha" aria-hidden="true"></span>
              </button>
              <div className="sesion-contenido">
                <p>
                  Defines el porqué detrás de tu negocio: una meta
                  personal clara que le da sentido a tu meta empresarial y
                  te muestra con precisión dónde estás y hacia dónde vas.
                </p>
              </div>
            </div>
            <div className="sesion">
              <button className="sesion-btn" aria-expanded="false">
                <span className="sesion-num">13</span>
                <h3>Manejo de utilidades</h3>
                <span className="flecha" aria-hidden="true"></span>
              </button>
              <div className="sesion-contenido">
                <p>
                  Construyes un plan de acción más estructurado para el
                  futuro: cómo quedará tu familia económicamente y cómo
                  prepararte ante contingencias o crisis.
                </p>
              </div>
            </div>
            <div className="sesion">
              <button className="sesion-btn" aria-expanded="false">
                <span className="sesion-num">14</span>
                <h3>Planeación estratégica</h3>
                <span className="flecha" aria-hidden="true"></span>
              </button>
              <div className="sesion-contenido">
                <p>
                  Con las estrategias ya implementadas en todas las áreas,
                  es momento de planear y medir: defines metas
                  trimestrales por área y desarrollas tu plan de 90 días
                  enfocado en generar flujo de efectivo.
                </p>
              </div>
            </div>
            <div className="sesion">
              <button className="sesion-btn" aria-expanded="false">
                <span className="sesion-num">15</span>
                <h3>Leverage</h3>
                <span className="flecha" aria-hidden="true"></span>
              </button>
              <div className="sesion-contenido">
                <p>
                  Pones a prueba todo lo aprendido en un simulador de
                  negocios: tomas decisiones en escenarios empresariales
                  reales (marketing, sistemas, inversiones) buscando que
                  la empresa que administres cierre con un buen margen de
                  utilidad.
                </p>
              </div>
            </div>
          </div>
          {/* <p className="nota">
                  El contenido puede adaptarse de acuerdo con la metodología
                  oficial de Growith Business Academy.
                </p> */}
        </div>
      </section>

      {/* ============================================================
      SECCIÓN 9.5. TU COACH DE NEGOCIOS
      ============================================================ */}
      <section
        className="problema"
        id="coach"
        aria-labelledby="titulo-coach"
      >
        <div className="contenedor">
          <div className="experiencia-grid">
            <figure className="experiencia-figura revelar">
              {/* [REEMPLAZAR] Fotografía oficial del coach */}
              <img
                src={assets.luisCoach}
                alt="Luis Arredondo, coach de negocios"
                loading="lazy"
                //className="coach-img"
                className="h-auto w-full"
              />
            </figure>
            <div className="revelar">
              <span className="eyebrow">Tu coach de negocios</span>
              <h2 id="titulo-coach">
                Luis Arredondo — Director Sede Península, ActionCOACH
              </h2>
              <p className="intro-seccion">
                Coach #1 de Latinoamérica y TOP 3 Partners de Iberoamérica
                en ActionCOACH. Más de 10 años de experiencia acompañando
                a dueños de negocio, con más de 500 empresas trabajadas a
                lo largo de su carrera.
              </p>
              <ul className="lista-comunidad">
                <li>
                  Lic. en Negocios Internacionales, Tecnológico de
                  Monterrey.
                </li>
                <li>PMBA, London Imperial College Business School.</li>
                <li>
                  Especialista en Finance &amp; Supply Chain Management,
                  University of British Columbia.
                </li>
                <li>
                  Certificado en Dialogue and Deliberation, Harvard
                  University.
                </li>
                <li>
                  Certificado en Leadership &amp; Entrepreneurship,
                  University of Malaya.
                </li>
                <li>
                  Premiado por el Tecnológico de Monterrey y University of
                  Malaya por sus contribuciones al desarrollo de líderes.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
      SECCIÓN 10. CÓMO FUNCIONA (metodología)
      ============================================================ */}
      <section
        className="metodologia"
        id="metodologia"
        aria-labelledby="titulo-metodologia"
      >
        <div className="contenedor">
          <div className="centrado revelar">
            <span className="eyebrow">Metodología</span>
            <h2 id="titulo-metodologia">
              Aprender. Implementar. Medir. Mejorar.
            </h2>
          </div>
          <div className="grid-metodo revelar">
            <article className="metodo">
              <div className="icono" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <circle cx="8" cy="8" r="3" />
                  <circle cx="16.5" cy="9.5" r="2.5" />
                  <path d="M2.5 20c.7-3 3-4.7 5.5-4.7s4.8 1.7 5.5 4.7M14.5 15.6c2.3.2 4.3 1.7 5 4.4" />
                </svg>
              </div>
              <h3>Sesiones grupales</h3>
              <p>
                Encuentros ejecutivos —online o presenciales, según tu
                esquema— enfocados en conceptos, herramientas y
                aplicación.
              </p>
            </article>
            <article className="metodo">
              <div className="icono" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path d="M5 12.5 10 17.5 19 6.5M4 21h16" />
                </svg>
              </div>
              <h3>Implementación</h3>
              <p>
                Cada sesión termina con prioridades concretas para
                trabajar dentro de la empresa.
              </p>
            </article>
            <article className="metodo">
              <div className="icono" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <circle cx="12" cy="8" r="3.5" />
                  <path d="M6 21c.7-3.5 3.2-5.3 6-5.3s5.3 1.8 6 5.3" />
                </svg>
              </div>
              <h3>Seguimiento individual</h3>
              <p>
                Espacios de acompañamiento para revisar avances, retos y
                decisiones.
              </p>
            </article>
            <article className="metodo">
              <div className="icono" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path d="M4 4v16h16M8 14l3-3 3 2 5-6" />
                </svg>
              </div>
              <h3>Auditorías trimestrales</h3>
              <p>
                Revisiones estructuradas para medir el nivel de
                implementación y detectar oportunidades.
              </p>
            </article>
            <article className="metodo">
              <div className="icono" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <circle cx="7" cy="9" r="2.6" />
                  <circle cx="17" cy="9" r="2.6" />
                  <path d="M2 19c.5-2.8 2.5-4.3 5-4.3s4.5 1.5 5 4.3M12 19c.5-2.8 2.5-4.3 5-4.3s4.5 1.5 5 4.3" />
                </svg>
              </div>
              <h3>Comunidad empresarial</h3>
              <p>
                Interacción con empresarios que enfrentan retos similares
                y comparten aprendizajes y mejores prácticas.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* ============================================================
      SECCIÓN 10.5. ELIGE TU ESQUEMA (Online / Presencial)
      ============================================================ */}
      <section aria-labelledby="titulo-esquemas">
        <div className="contenedor">
          <div className="centrado revelar">
            <span className="eyebrow">Elige tu esquema</span>
            <h2 id="titulo-esquemas">
              Dos formas de vivir Business Growth. El mismo contenido,
              distinta cercanía.
            </h2>
          </div>
          <div className="perfil-grid revelar">
            <div className="panel panel-si">
              <h3>Academia Online</h3>
              <ul>
                <li>Nueve meses de programa · 15 sesiones grupales.</li>
                <li>Seguimiento personalizado semanal con tu trainer.</li>
                <li>Acceso a la plataforma digital Premium.</li>
                <li>Kit y materiales de apoyo digitales.</li>
                <li>Tres auditorías durante el programa.</li>
              </ul>
            </div>
            <div className="panel panel-si">
              <h3>Academia Presencial</h3>
              <ul>
                <li>Nueve meses de programa · 15 sesiones grupales.</li>
                <li>Seguimiento personalizado semanal con tu trainer.</li>
                <li>Acceso a la plataforma digital Premium.</li>
                <li>Kit y materiales de apoyo físicos.</li>
                <li>
                  Acceso incluido para una persona adicional de tu equipo.
                </li>
                <li>Tres auditorías durante el programa.</li>
              </ul>
            </div>
          </div>
          <p className="nota">
            Ambos esquemas incluyen la misma metodología y contenido.
            Cuéntanos tu preferencia durante el proceso de aplicación.
          </p>
        </div>
      </section>

      {/* ============================================================
      SECCIÓN 11. QUÉ INCLUYE
      ============================================================ */}
      <section aria-labelledby="titulo-incluye">
        <div className="contenedor">
          <div className="revelar">
            <span className="eyebrow">Qué incluye</span>
            <h2 id="titulo-incluye">
              Una experiencia ejecutiva completa.
            </h2>
          </div>
          <div className="grid-incluye revelar">
            <div className="incluye">
              1 sesión individual personalizada con tu ActionCOACH
            </div>
            <div className="incluye">
              Seguimientos personalizados con tu trainer
            </div>
            <div className="incluye">
              Mentoría grupal quincenal con empresarios a nivel nacional
            </div>
            <div className="incluye">
              Tres auditorías para dar seguimiento a tu implementación
            </div>
            <div className="incluye">
              Acceso a la plataforma digital con las grabaciones del
              programa
            </div>
            <div className="incluye">Nueve meses de programa</div>
            <div className="incluye">15 sesiones grupales</div>
            <div className="incluye">Diagnóstico empresarial</div>
            <div className="incluye">Comunidad de empresarios</div>
            <div className="incluye">Certificado de participación</div>
            <div className="incluye">Evento de graduación</div>
            <div className="incluye">
              Integración a la comunidad Alumni
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
      SECCIÓN 12. EXPERIENCIA BUSINESS GROWTH
      ============================================================ */}
      <section
        className="problema"
        id="experiencia"
        aria-labelledby="titulo-experiencia"
      >
        <div className="contenedor">
          <div className="experiencia-grid !flex !flex-col !items-start !gap-10">
            <figure className="experiencia-figura revelar">
              {/* [REEMPLAZAR] Fotografía oficial de una sesión grupal de Business Growth */}
              <img
                src={assets.clientesGrowith}
                alt="Grupo de empresarios trabajando en una sesión ejecutiva de Business Growth"
                loading="lazy"
                className="experiencia-img"
              />
            </figure>
            <div className="revelar">
              <span className="eyebrow">La experiencia</span>
              <h2 id="titulo-experiencia">
                Más que asistir a sesiones. Formar parte de una comunidad
                de empresarios en crecimiento.
              </h2>
              <p className="intro-seccion">
                Business Growth reúne a empresarios que comparten retos
                reales: crecer, profesionalizar, liderar equipos, mejorar
                resultados y construir empresas menos dependientes de sus
                fundadores.
              </p>
              <ul className="lista-comunidad">
                <li>Networking de calidad.</li>
                <li>Aprendizaje entre pares.</li>
                <li>Conversaciones empresariales.</li>
                <li>Accountability.</li>
                <li>Intercambio de buenas prácticas.</li>
                <li>Nuevas perspectivas.</li>
                <li>Relaciones de largo plazo.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
      SECCIÓN 13. RESULTADOS ESPERADOS
      ============================================================ */}
      <section className="resultados" aria-labelledby="titulo-resultados">
        <div className="contenedor">
          <div className="revelar">
            <span className="eyebrow">Resultados esperados</span>
            <h2 id="titulo-resultados">
              Lo que una empresa puede comenzar a construir durante el
              programa.
            </h2>
          </div>
          <ul className="grid-resultados revelar">
            <li>Mayor claridad estratégica.</li>
            <li>Mejor seguimiento de prioridades.</li>
            <li>Mayor comprensión financiera.</li>
            <li>Indicadores más claros.</li>
            <li>Procesos más ordenados.</li>
            <li>Mejor comunicación con el equipo.</li>
            <li>Mayor capacidad de delegación.</li>
            <li>Mejor ejecución.</li>
            <li>Una estructura más preparada para crecer.</li>
            <li>Menor dependencia de decisiones centralizadas.</li>
          </ul>
          <p className="legal">
            Los resultados dependen del nivel de participación,
            implementación y contexto de cada empresa.
          </p>
        </div>
      </section>

      {/* ============================================================
      SECCIÓN 14. TESTIMONIOS
      [REEMPLAZAR] Todos los testimonios son contenido de ejemplo.
      Sustituir por testimonios reales autorizados y fotografías oficiales.
      ============================================================ */}
      <section id="testimonios" aria-labelledby="titulo-testimonios">
        <div className="contenedor">
          <div className="centrado revelar">
            <span className="eyebrow">Testimonios</span>
            <h2 id="titulo-testimonios">
              Empresarios que decidieron dirigir diferente.
            </h2>
            {/* <span className="aviso-ejemplo"
                >Contenido de ejemplo — reemplazar por testimonios reales</span
              > */}
          </div>
          <div className="grid-testimonios revelar">
            <article className="testimonio">
              <blockquote>
                {testimoniales["testim-1-testimonio"]}
              </blockquote>
              <span className="resultado">
                {testimoniales["testim-1-resumen"]}
              </span>
              <div className="testimonio-pie">
                {/* [REEMPLAZAR] Fotografía real del participante */}
                <img
                  // src={assets.testimoniales["testim-1-foto"] ?? null}
                  alt="Fotografía de participante (contenido de ejemplo)"
                />
                <div>
                  <strong>{testimoniales["testim-1-nombre"]}</strong>
                  <span>{testimoniales["testim-1-puesto"]}</span>
                </div>
              </div>
            </article>
            <article className="testimonio">
              <blockquote>
                {testimoniales["testim-2-testimonio"]}
              </blockquote>
              <span className="resultado">
                {testimoniales["testim-2-resumen"]}
              </span>
              <div className="testimonio-pie">
                {/* [REEMPLAZAR] Fotografía real del participante */}
                <img
                  // src={assets.testimoniales["testim-2-foto"] ?? null}
                  alt="Fotografía de participante (contenido de ejemplo)"
                />
                <div>
                  <strong>{testimoniales["testim-2-nombre"]}</strong>
                  <span>{testimoniales["testim-2-puesto"]}</span>
                </div>
              </div>
            </article>
            <article className="testimonio">
              <blockquote>
                {testimoniales["testim-3-testimonio"]}
              </blockquote>
              <span className="resultado">
                {testimoniales["testim-3-resumen"]}
              </span>
              <div className="testimonio-pie">
                {/* [REEMPLAZAR] Fotografía real del participante */}
                <img
                  // src={assets.testimoniales["testim-3-foto"] ?? null}
                  alt="Fotografía de participante (contenido de ejemplo)"
                />
                <div>
                  <strong>{testimoniales["testim-3-nombre"]}</strong>
                  <span>{testimoniales["testim-3-puesto"]}</span>
                </div>
              </div>
            </article>
          </div>
          <div className="cta-inline revelar">
            <a href="#aplicar" className="btn btn-primario">
              Aplicar al programa
            </a>
          </div>
        </div>
      </section>

      {/* ============================================================
      SECCIÓN 15. BUSINESS GROWTH ALUMNI
      ============================================================ */}
      <section className="alumni" aria-labelledby="titulo-alumni">
        <div className="contenedor">
          <div className="revelar">
            <span className="eyebrow">Alumni</span>
            <h2 id="titulo-alumni">
              La graduación no es el final. Es el inicio de una nueva
              etapa empresarial.
            </h2>
            <p className="intro-seccion">
              Al concluir el programa, los graduados pueden integrarse a
              la comunidad Business Growth Alumni y continuar su
              desarrollo empresarial con:
            </p>
          </div>
          <ul className="grid-alumni revelar">
            <li>Eventos</li>
            <li>Networking</li>
            <li>Sesiones especiales</li>
            <li>Programas avanzados</li>
            <li>Aprendizaje continuo</li>
            <li>Vinculación empresarial</li>
          </ul>
          <p className="frase-alumni revelar">
            No formamos alumnos. <em>Desarrollamos empresarios.</em>
          </p>
        </div>
      </section>

      {/* ============================================================
      SECCIÓN 16. PRÓXIMA GENERACIÓN
      [REEMPLAZAR] Placeholders con la información final de la generación.
      ============================================================ */}
      <section aria-labelledby="titulo-generacion">
        <div className="contenedor">
          <div className="centrado revelar">
            <span className="eyebrow">Próxima generación</span>
            <h2 id="titulo-generacion">
              Reserva tu lugar en la siguiente generación de Business
              Growth.
            </h2>
          </div>
          <div className="generacion-card revelar">
            <h3>Próxima generación</h3>
            <p className="sub">
              Grupos reducidos para garantizar acompañamiento cercano y
              conversaciones de nivel ejecutivo.
            </p>
            <dl className="grid-datos">
              <div className="dato">
                <dt>Fecha de inicio</dt>
                <dd className="placeholder">
                  {proximaGeneracion["fecha-inicio"]}
                </dd>
              </div>
              <div className="dato">
                <dt>Duración</dt>
                <dd>{proximaGeneracion["duracion"]}</dd>
              </div>
              <div className="dato">
                <dt>Horario</dt>
                <dd className="placeholder">
                  {proximaGeneracion["horario"]}
                </dd>
              </div>
              <div className="dato">
                <dt>Modalidad</dt>
                <dd>{proximaGeneracion["modalidad"]}</dd>
              </div>
              <div className="dato">
                <dt>Ciudad</dt>
                <dd className="placeholder">
                  {proximaGeneracion["ciudad"]}
                </dd>
              </div>
              <div className="dato">
                <dt>Inversión</dt>
                <dd className="placeholder">
                  {proximaGeneracion["inversion"]}
                </dd>
              </div>
              <div className="dato">
                <dt>Opciones de pago</dt>
                <dd className="placeholder">
                  {proximaGeneracion["opciones-pago"]}
                </dd>
              </div>
              <div className="dato">
                <dt>Lugares disponibles</dt>
                <dd className="placeholder">
                  {proximaGeneracion["lugares-disponibles"]}
                </dd>
              </div>
            </dl>
            <div className="generacion-botones">
              <a href="#aplicar" className="btn btn-primario">
                Aplicar a Business Growth
              </a>
              <a href="#aplicar" className="btn btn-borde-claro">
                Solicitar información
              </a>
            </div>
            <p className="cupo">
              Cada generación abre un número limitado de lugares para
              cuidar la calidad de la experiencia.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================
      SECCIÓN 17. PROCESO DE APLICACIÓN + FORMULARIO
      ============================================================ */}
      <section
        className="aplicacion"
        id="aplicar"
        aria-labelledby="titulo-aplicar"
      >
        <div className="contenedor">
          <div className="centrado revelar">
            <span className="eyebrow">Proceso de aplicación</span>
            <h2 id="titulo-aplicar">
              Tu ingreso a Business Growth comienza con una conversación.
            </h2>
          </div>
          <div className="pasos revelar">
            <div className="paso">
              <span className="num-paso">1</span>
              <p>Completa tu solicitud.</p>
            </div>
            <div className="paso">
              <span className="num-paso">2</span>
              <p>Agenda una llamada de diagnóstico.</p>
            </div>
            <div className="paso">
              <span className="num-paso">3</span>
              <p>Confirma si el programa es adecuado para tu empresa.</p>
            </div>
            <div className="paso">
              <span className="num-paso">4</span>
              <p>Reserva tu lugar en la siguiente generación.</p>
            </div>
          </div>

          {/* Formulario de aplicación (envío simulado; conectar al CRM o backend oficial) */}
          <form
            className="formulario revelar"
            id="formAplicacion"
            noValidate
          >
            <h3>Solicitud de aplicación</h3>
            <p className="sub-form">
              Comparte los datos de tu empresa. Un miembro del equipo de
              Growith Business Academy te contactará para agendar tu
              llamada de diagnóstico.
            </p>
            <div className="form-grid">
              <div className="campo">
                <label htmlFor="f-nombre">Nombre</label>
                <input
                  type="text"
                  id="f-nombre"
                  name="nombre"
                  required
                  autoComplete="given-name"
                />
                <span className="error-msg">Ingresa tu nombre.</span>
              </div>
              <div className="campo">
                <label htmlFor="f-apellido">Apellido</label>
                <input
                  type="text"
                  id="f-apellido"
                  name="apellido"
                  required
                  autoComplete="family-name"
                />
                <span className="error-msg">Ingresa tu apellido.</span>
              </div>
              <div className="campo">
                <label htmlFor="f-empresa">Empresa</label>
                <input
                  type="text"
                  id="f-empresa"
                  name="empresa"
                  required
                  autoComplete="organization"
                />
                <span className="error-msg">
                  Ingresa el nombre de tu empresa.
                </span>
              </div>
              <div className="campo">
                <label htmlFor="f-cargo">Cargo</label>
                <input
                  type="text"
                  id="f-cargo"
                  name="cargo"
                  required
                  autoComplete="organization-title"
                />
                <span className="error-msg">Ingresa tu cargo.</span>
              </div>
              <div className="campo">
                <label htmlFor="f-correo">Correo electrónico</label>
                <input
                  type="email"
                  id="f-correo"
                  name="correo"
                  required
                  autoComplete="email"
                />
                <span className="error-msg">
                  Ingresa un correo válido.
                </span>
              </div>
              <div className="campo">
                <label htmlFor="f-telefono">Teléfono</label>
                <input
                  type="tel"
                  id="f-telefono"
                  name="telefono"
                  required
                  autoComplete="tel"
                  inputMode="tel"
                />
                <span className="error-msg">
                  Ingresa un teléfono de contacto.
                </span>
              </div>
              <div className="campo">
                <label htmlFor="f-ciudad">Ciudad</label>
                <input
                  type="text"
                  id="f-ciudad"
                  name="ciudad"
                  required
                  autoComplete="address-level2"
                />
                <span className="error-msg">Ingresa tu ciudad.</span>
              </div>
              <div className="campo">
                <label htmlFor="f-colaboradores">
                  Número de colaboradores
                </label>
                <select
                  id="f-colaboradores"
                  name="colaboradores"
                  required
                >
                  <option value="">Selecciona una opción</option>
                  <option>1 a 5</option>
                  <option>6 a 15</option>
                  <option>16 a 50</option>
                  <option>51 a 100</option>
                  <option>Más de 100</option>
                </select>
                <span className="error-msg">Selecciona una opción.</span>
              </div>
              <div className="campo">
                <label htmlFor="f-antiguedad">
                  Antigüedad de la empresa
                </label>
                <select id="f-antiguedad" name="antiguedad" required>
                  <option value="">Selecciona una opción</option>
                  <option>Menos de 2 años</option>
                  <option>2 a 5 años</option>
                  <option>6 a 10 años</option>
                  <option>Más de 10 años</option>
                </select>
                <span className="error-msg">Selecciona una opción.</span>
              </div>
              <div className="campo">
                <label htmlFor="f-facturacion">
                  Facturación anual aproximada
                  <span className="opcional">(opcional)</span>
                </label>
                <input
                  type="text"
                  id="f-facturacion"
                  name="facturacion"
                />
              </div>
              <div className="campo ancho">
                <label htmlFor="f-reto">
                  Principal reto actual de tu empresa
                </label>
                <textarea id="f-reto" name="reto" required></textarea>
                <span className="error-msg">
                  Cuéntanos brevemente tu principal reto.
                </span>
              </div>
            </div>
            <label className="consentimiento">
              <input type="checkbox" id="f-consentimiento" required />
              <span>
                He leído y acepto el
                <a href="#aviso-privacidad">aviso de privacidad</a> y
                autorizo a Growith Business Academy a contactarme con
                información sobre el programa Business Growth.
              </span>
            </label>
            <div className="form-envio">
              <button type="submit" className="btn btn-primario">
                Enviar solicitud
              </button>
              <span
                style={{
                  fontSize: "0.8rem",
                  color: "var(--texto-suave)",
                }}
              >
                Respuesta en un máximo de 2 días hábiles.
              </span>
            </div>
            <p className="form-exito" id="formExito" role="status">
              Gracias por tu solicitud. Un miembro del equipo de Growith
              Business Academy te contactará para agendar tu llamada de
              diagnóstico.
            </p>
          </form>
        </div>
      </section>

      {/* ============================================================
      SECCIÓN 18. PREGUNTAS FRECUENTES
      ============================================================ */}
      <section id="faq" aria-labelledby="titulo-faq">
        <div className="contenedor">
          <div className="centrado revelar">
            <span className="eyebrow">Preguntas frecuentes</span>
            <h2 id="titulo-faq">
              Lo que los empresarios preguntan antes de aplicar.
            </h2>
          </div>
          <div className="faq-lista revelar">
            <div className="faq">
              <button className="faq-btn" aria-expanded="false">
                <h3>
                  ¿Business Growth es un curso, diplomado o programa?
                </h3>
                <span className="signo" aria-hidden="true"></span>
              </button>
              <div className="faq-contenido">
                <p>
                  Es un programa ejecutivo de transformación empresarial.
                  Combina sesiones grupales, implementación dentro de tu
                  empresa, seguimiento individual y auditorías. A
                  diferencia de un curso, el objetivo no es solo aprender:
                  es construir capacidades reales en tu negocio.
                </p>
              </div>
            </div>
            <div className="faq">
              <button className="faq-btn" aria-expanded="false">
                <h3>¿Cuánto dura?</h3>
                <span className="signo" aria-hidden="true"></span>
              </button>
              <div className="faq-contenido">
                <p>
                  Nueve meses. La duración está diseñada para que exista
                  tiempo suficiente de implementación entre sesiones, no
                  solo de aprendizaje.
                </p>
              </div>
            </div>
            <div className="faq">
              <button className="faq-btn" aria-expanded="false">
                <h3>¿Cuántas sesiones incluye?</h3>
                <span className="signo" aria-hidden="true"></span>
              </button>
              <div className="faq-contenido">
                <p>
                  Quince sesiones grupales, complementadas con seguimiento
                  individual y tres auditorías trimestrales de
                  implementación.
                </p>
              </div>
            </div>
            <div className="faq">
              <button className="faq-btn" aria-expanded="false">
                <h3>¿El programa es presencial u online?</h3>
                <span className="signo" aria-hidden="true"></span>
              </button>
              <div className="faq-contenido">
                <p>
                  Puedes elegir el esquema que mejor se ajuste a ti:
                  Academia Online, con seguimiento semanal a distancia, o
                  Academia Presencial, con sesiones en sede y acceso
                  incluido para una persona adicional de tu equipo. El
                  contenido y la metodología son los mismos en ambos
                  casos.
                </p>
              </div>
            </div>
            <div className="faq">
              <button className="faq-btn" aria-expanded="false">
                <h3>¿Necesito tener una empresa en operación?</h3>
                <span className="signo" aria-hidden="true"></span>
              </button>
              <div className="faq-contenido">
                <p>
                  Sí. El programa está diseñado para trabajar sobre una
                  empresa real en funcionamiento, de modo que cada
                  herramienta se implemente directamente en tu negocio.
                </p>
              </div>
            </div>
            <div className="faq">
              <button className="faq-btn" aria-expanded="false">
                <h3>¿Puedo participar con un socio o director?</h3>
                <span className="signo" aria-hidden="true"></span>
              </button>
              <div className="faq-contenido">
                <p>
                  Sí, es posible participar acompañado de un socio o
                  director. Las condiciones específicas se confirman
                  durante el proceso de aplicación.
                  {/* [Placeholder: definir política oficial de
                    acompañantes.] */}
                </p>
              </div>
            </div>
            <div className="faq">
              <button className="faq-btn" aria-expanded="false">
                <h3>¿Qué ocurre si falto a una sesión?</h3>
                <span className="signo" aria-hidden="true"></span>
              </button>
              <div className="faq-contenido">
                <p>
                  Buscamos que ninguna sesión se pierda. Las alternativas
                  de reposición o recuperación se explican durante el
                  proceso de inscripción.
                  {/* [Placeholder: definir política oficial de
                    asistencia.] */}
                </p>
              </div>
            </div>
            <div className="faq">
              <button className="faq-btn" aria-expanded="false">
                <h3>¿Cuánto tiempo debo dedicar entre sesiones?</h3>
                <span className="signo" aria-hidden="true"></span>
              </button>
              <div className="faq-contenido">
                <p>
                  La implementación es parte central del programa.
                  Recomendamos reservar tiempo cada semana para trabajar
                  las prioridades definidas en cada sesión, integrándolas
                  a tu operación normal.
                </p>
              </div>
            </div>
            <div className="faq">
              <button className="faq-btn" aria-expanded="false">
                <h3>¿Recibiré un certificado?</h3>
                <span className="signo" aria-hidden="true"></span>
              </button>
              <div className="faq-contenido">
                <p>
                  Sí. Al concluir el programa recibirás un certificado de
                  participación de Growith Business Academy y formarás
                  parte de la comunidad Alumni.
                </p>
              </div>
            </div>
            <div className="faq">
              <button className="faq-btn" aria-expanded="false">
                <h3>
                  ¿Qué diferencia hay entre Business Growth y una
                  consultoría?
                </h3>
                <span className="signo" aria-hidden="true"></span>
              </button>
              <div className="faq-contenido">
                <p>
                  Una consultoría entrega diagnósticos y recomendaciones.
                  Business Growth desarrolla al empresario y a su empresa:
                  construyes las capacidades para dirigir, decidir e
                  implementar por ti mismo, con acompañamiento y
                  accountability.
                </p>
              </div>
            </div>
            <div className="faq">
              <button className="faq-btn" aria-expanded="false">
                <h3>
                  ¿Qué diferencia hay entre Business Growth y un MBA?
                </h3>
                <span className="signo" aria-hidden="true"></span>
              </button>
              <div className="faq-contenido">
                <p>
                  Un MBA es un programa académico amplio, basado en teoría
                  y casos de estudio. Business Growth es práctico y
                  aplicado: trabajas sobre tu propia empresa, con
                  herramientas diseñadas para negocios pequeños y
                  medianos, y con resultados de implementación medibles
                  durante el programa.
                </p>
              </div>
            </div>
            <div className="faq">
              <button className="faq-btn" aria-expanded="false">
                <h3>¿Qué tipo de empresas pueden participar?</h3>
                <span className="signo" aria-hidden="true"></span>
              </button>
              <div className="faq-contenido">
                <p>
                  Empresas pequeñas y medianas en operación, de cualquier
                  industria, cuyos dueños o directores buscan
                  profesionalizar, estructurar y hacer crecer su negocio.
                </p>
              </div>
            </div>
            <div className="faq">
              <button className="faq-btn" aria-expanded="false">
                <h3>¿El programa garantiza resultados?</h3>
                <span className="signo" aria-hidden="true"></span>
              </button>
              <div className="faq-contenido">
                <p>
                  No. Ningún programa serio puede garantizar resultados.
                  Lo que sí garantizamos es una metodología estructurada,
                  acompañamiento cercano y seguimiento de implementación.
                  Los resultados dependen del nivel de participación,
                  implementación y contexto de cada empresa.
                </p>
              </div>
            </div>
            <div className="faq">
              <button className="faq-btn" aria-expanded="false">
                <h3>¿Cómo funciona el proceso de aplicación?</h3>
                <span className="signo" aria-hidden="true"></span>
              </button>
              <div className="faq-contenido">
                <p>
                  Completa la solicitud en esta página, agenda una llamada
                  de diagnóstico y, si el programa es adecuado para tu
                  empresa, reserva tu lugar en la siguiente generación. La
                  llamada no genera ningún compromiso.
                </p>
              </div>
            </div>
            <div className="faq">
              <button className="faq-btn" aria-expanded="false">
                <h3>¿Existen facilidades de pago?</h3>
                <span className="signo" aria-hidden="true"></span>
              </button>
              <div className="faq-contenido">
                <p>
                  Existen distintas opciones de pago que se explican
                  durante el proceso de aplicación. [Placeholder: definir
                  esquemas de pago oficiales.]
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
      SECCIÓN 19. CTA FINAL
      ============================================================ */}
      <section className="cta-final" aria-labelledby="titulo-cta">
        <div className="contenedor">
          <span className="marca-sup">Growith Business Academy</span>
          <h2 id="titulo-cta">
            Tu negocio ya llegó hasta aquí gracias a tu esfuerzo.
          </h2>
          <p className="sub">
            El siguiente nivel requerirá una mejor estrategia, un mejor
            equipo y un mejor sistema.
          </p>
          <p className="nombre-programa">Business Growth</p>
          <p className="firma">Growith Business Academy</p>
          <div className="botones">
            <a href="#aplicar" className="btn btn-primario">
              Aplicar al programa
            </a>
            {/* <button className="btn btn-borde-claro" data-abrir-brochure>
                    Descargar brochure
                  </button> */}
            <a
              href={assets.brochure}
              target="_blank"
              className="btn btn-borde-claro"
              data-abrir-brochure
            >
              Descargar brochure
            </a>
          </div>
          <p className="cierre">
            Crece con estrategia. Lidera con claridad. Construye una
            empresa que no dependa de ti.
          </p>
        </div>
      </section>
    </main>
  );
}
