import type { LandingPageTestimoniales } from "@/types/landing-page-data";

export default function Testimonios({ testimoniales }: { testimoniales: LandingPageTestimoniales }) {
  return (
    // ============================================================
    // SECCIÓN 14. TESTIMONIOS
    // ============================================================
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
  );
}
