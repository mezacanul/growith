export default function Metodologia() {
  return (
    // ============================================================
    // SECCIÓN 10. CÓMO FUNCIONA (metodología)
    // ============================================================
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
  );
}
