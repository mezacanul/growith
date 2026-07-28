import type { LandingPageAssets } from "@/types/landing-page-data";

export default function Hero({ assets }: { assets: LandingPageAssets }) {
  return (
    // ============================================================
    // SECCIÓN 2. HERO
    // ============================================================
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
              Construye una empresa rentable, organizada y preparada para crecer
              sin depender completamente de ti.
            </p>
            <p className="hero-texto">
              Business Growth es un programa ejecutivo de nueve meses diseñado
              para empresarios que quieren dejar de operar cada detalle y
              comenzar a dirigir su empresa con estrategia, estructura,
              liderazgo e indicadores.
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
          </div>

          <figure className="hero-figura revelar visible">
            {/* [REEMPLAZAR] Fotografía oficial: empresario/a dirigiendo una reunión con su equipo */}
            <img
              src={assets.clientaGrowith}
              alt="Empresaria dirigiendo una reunión estratégica con su equipo directivo"
              loading="eager"
              referrerPolicy="no-referrer"
            />
            {/* <figcaption className="hero-tarjeta">
                  <strong>Deja de administrar un negocio.</strong>
                  <span>Comienza a dirigir una empresa.</span>
                </figcaption> */}
          </figure>
        </div>

        <ul className="hero-datos items-center justify-center" aria-label="Datos clave del programa">
          <li>9 meses</li>
          <li>15 sesiones grupales</li>
          <li>Seguimiento individual</li>
          <li>Modalidad online o presencial</li>
          <li>Comunidad empresarial</li>
        </ul>
      </div>
    </section>
  );
}
