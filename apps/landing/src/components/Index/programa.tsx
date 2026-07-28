export default function Programa() {
  return (
    // ============================================================
    // SECCIÓN 4. QUÉ ES BUSINESS GROWTH
    // ============================================================
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
  );
}
