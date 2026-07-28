export default function Perfil() {
  return (
    // ============================================================
    // SECCIÓN 5. PARA QUIÉN ES
    // ============================================================
    <section
      className="secondary-bg pt-5"
      aria-labelledby="titulo-perfil"
      // style={{ paddingTop: 0}}
    >
      <div className="contenedor">
        <div className="revelar">
          <span className="eyebrow">El perfil</span>
          <h2 id="titulo-perfil">
            Diseñado para empresarios que están listos para dirigir el
            siguiente nivel de su empresa.
          </h2>
        </div>
        <div className="perfil-grid revelar">
          <div className="panel panel-si">
            <h3>Business Growth está dirigido a:</h3>
            <ul>
              <li>Dueños de negocio.</li>
              <li>Socios directores.</li>
              <li>Directores generales.</li>
              <li>Empresarios con un negocio en operación.</li>
              <li>Líderes con equipos de trabajo.</li>
              <li>Empresas que buscan profesionalización.</li>
              <li>Negocios que desean crecer sin perder el control.</li>
              <li>
                Empresarios dispuestos a implementar cambios reales.
              </li>
            </ul>
          </div>
          <div className="panel panel-no">
            <h3>Este programa no es para ti si:</h3>
            <ul>
              <li>Buscas únicamente teoría.</li>
              <li>No tienes disposición para implementar.</li>
              <li>No puedes dedicar tiempo entre sesiones.</li>
              <li>
                Esperas resultados sin cambiar la forma de dirigir.
              </li>
              <li>Solo buscas inspiración momentánea.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
