import type { LandingPageAssets } from "@/types/landing-page-data";

export default function CtaFinal({ assets }: { assets: LandingPageAssets }) {
  return (
    // ============================================================
    // SECCIÓN 19. CTA FINAL
    // ============================================================
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
  );
}
