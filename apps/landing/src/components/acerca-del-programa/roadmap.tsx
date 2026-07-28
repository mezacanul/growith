export default function Roadmap() {
  return (
    // ============================================================
    // SECCIÓN 8. BUSINESS GROWTH ROADMAP (elemento firma: escalera)
    // ============================================================
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
  );
}
