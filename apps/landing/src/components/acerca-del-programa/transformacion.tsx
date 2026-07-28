export default function Transformacion() {
  return (
    // ============================================================
    // SECCIÓN 6. LA TRANSFORMACIÓN (Antes / Después)
    // ============================================================
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
  );
}
