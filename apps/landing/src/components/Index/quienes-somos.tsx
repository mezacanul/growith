export default function QuienesSomos() {
  return (
    // ============================================================
    // SECCIÓN 2.5. QUIÉNES SOMOS (Propósito / Visión / Misión)
    // ============================================================
    <section
      className="secondary-bg"
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
        <div className="revelar">
          <article className="pilar w-[30rem] mx-auto text-center mt-10">
            <h3>Nuestro propósito</h3>
            <p>
              Ayudamos a los empresarios a crecer sin caos,
              implementando metodologías comprobadas para tener negocios
              rentables y estructurados.
            </p>
          </article>
          
          {/* <article className="pilar">
            <h3>Nuestra visión</h3>
            <p>
              Abundancia mundial a través de la re-educación en los
              negocios.
            </p>
          </article>
          <article className="pilar">
            <h3>Nuestra misión</h3>
            <p>Dar valor en cada conversación.</p>
          </article> */}
        </div>
      </div>
    </section>
  );
}
