export default function Alumni() {
  return (
    // ============================================================
    // SECCIÓN 15. BUSINESS GROWTH ALUMNI
    // ============================================================
    <section className="alumni" aria-labelledby="titulo-alumni">
      <div className="contenedor">
        <div className="revelar">
          <span className="eyebrow">Alumni</span>
          <h2 id="titulo-alumni">
            La graduación no es el final. Es el inicio de una nueva etapa
            empresarial.
          </h2>
          <p className="intro-seccion">
            Al concluir el programa, los graduados pueden integrarse a la
            comunidad Business Growth Alumni y continuar su desarrollo
            empresarial con:
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
      </div>

      <div className="contenedor flex flex-col gap-4 md:!mt-60 md:!mb-30 revelar">
        <p className="frase-alumni md:!text-[4rem] md:!my-0">No formamos alumnos</p>
        <p className="frase-alumni md:!text-[4rem] md:!my-0">
          <em>Desarrollamos empresarios.</em>
        </p>
      </div>
    </section>
  );
}
