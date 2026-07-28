import type { ProximaGeneracion as ProximaGeneracionData } from "@/types/landing-page-data";

export default function ProximaGeneracion({
  proximaGeneracion,
}: {
  proximaGeneracion: ProximaGeneracionData;
}) {
  return (
    // ============================================================
    // SECCIÓN 16. PRÓXIMA GENERACIÓN
    // ============================================================
    <section
      className="secondary-bg"
      style={{ paddingBottom: "10px" }}
      aria-labelledby="titulo-generacion"
    >
      <div className="contenedor">
        <div className="centrado revelar">
          <span className="eyebrow">Próxima generación</span>
          <h2 id="titulo-generacion">
            Reserva tu lugar en la siguiente generación de Business Growth.
          </h2>
        </div>
        <div className="generacion-card revelar">
          <h3>Próxima generación</h3>
          <p className="sub">
            Grupos reducidos para garantizar acompañamiento cercano y
            conversaciones de nivel ejecutivo.
          </p>
          <dl className="grid-datos">
            <div className="dato">
              <dt>Fecha de inicio</dt>
              <dd className="placeholder">
                {proximaGeneracion["fecha-inicio"]}
              </dd>
            </div>
            <div className="dato">
              <dt>Duración</dt>
              <dd>{proximaGeneracion["duracion"]}</dd>
            </div>
            <div className="dato">
              <dt>Horario</dt>
              <dd className="placeholder">{proximaGeneracion["horario"]}</dd>
            </div>
            <div className="dato">
              <dt>Modalidad</dt>
              <dd>{proximaGeneracion["modalidad"]}</dd>
            </div>
            <div className="dato">
              <dt>Ciudad</dt>
              <dd className="placeholder">{proximaGeneracion["ciudad"]}</dd>
            </div>
            <div className="dato">
              <dt>Inversión</dt>
              <dd className="placeholder">{proximaGeneracion["inversion"]}</dd>
            </div>
            <div className="dato">
              <dt>Opciones de pago</dt>
              <dd className="placeholder">
                {proximaGeneracion["opciones-pago"]}
              </dd>
            </div>
            <div className="dato">
              <dt>Lugares disponibles</dt>
              <dd className="placeholder">
                {proximaGeneracion["lugares-disponibles"]}
              </dd>
            </div>
          </dl>
          <div className="generacion-botones">
            <a href="#aplicar" className="btn btn-primario">
              Aplicar a Business Growth
            </a>
            <a href="#aplicar" className="btn btn-borde-claro">
              Solicitar información
            </a>
          </div>
          <p className="cupo">
            Cada generación abre un número limitado de lugares para cuidar la
            calidad de la experiencia.
          </p>
        </div>
      </div>
    </section>
  );
}
