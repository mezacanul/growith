export default function Capacidades() {
  return (
    // ============================================================
    // SECCIÓN 7. LO QUE CONSTRUIRÁS
    // ============================================================
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
  );
}
