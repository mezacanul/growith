export default function Esquemas() {
  return (
    // ============================================================
    // SECCIÓN 10.5. ELIGE TU ESQUEMA (Online / Presencial)
    // ============================================================
    <section aria-labelledby="titulo-esquemas">
      <div className="contenedor">
        <div className="centrado revelar">
          <span className="eyebrow">Elige tu esquema</span>
          <h2 id="titulo-esquemas">
            Dos formas de vivir Business Growth. El mismo contenido,
            distinta cercanía.
          </h2>
        </div>
        <div className="perfil-grid revelar">
          <div className="panel panel-si">
            <h3>Academia Online</h3>
            <ul>
              <li>Nueve meses de programa · 15 sesiones grupales.</li>
              <li>Seguimiento personalizado semanal con tu trainer.</li>
              <li>Acceso a la plataforma digital Premium.</li>
              <li>Kit y materiales de apoyo digitales.</li>
              <li>Tres auditorías durante el programa.</li>
            </ul>
          </div>
          <div className="panel panel-si">
            <h3>Academia Presencial</h3>
            <ul>
              <li>Nueve meses de programa · 15 sesiones grupales.</li>
              <li>Seguimiento personalizado semanal con tu trainer.</li>
              <li>Acceso a la plataforma digital Premium.</li>
              <li>Kit y materiales de apoyo físicos.</li>
              <li>
                Acceso incluido para una persona adicional de tu equipo.
              </li>
              <li>Tres auditorías durante el programa.</li>
            </ul>
          </div>
        </div>
        <p className="nota">
          Ambos esquemas incluyen la misma metodología y contenido.
          Cuéntanos tu preferencia durante el proceso de aplicación.
        </p>
      </div>
    </section>
  );
}
