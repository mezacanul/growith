export default function Aplicacion() {
  return (
    // ============================================================
    // SECCIÓN 17. PROCESO DE APLICACIÓN + FORMULARIO
    // ============================================================
    <section
      className="aplicacion"
      id="aplicar"
      aria-labelledby="titulo-aplicar"
    >
      <div className="contenedor">
        <div className="centrado revelar">
          <span className="eyebrow">Proceso de aplicación</span>
          <h2 id="titulo-aplicar">
            Tu ingreso a Business Growth comienza con una conversación.
          </h2>
        </div>
        <div className="pasos revelar">
          <div className="paso">
            <span className="num-paso">1</span>
            <p>Completa tu solicitud.</p>
          </div>
          <div className="paso">
            <span className="num-paso">2</span>
            <p>Agenda una llamada de diagnóstico.</p>
          </div>
          <div className="paso">
            <span className="num-paso">3</span>
            <p>Confirma si el programa es adecuado para tu empresa.</p>
          </div>
          <div className="paso">
            <span className="num-paso">4</span>
            <p>Reserva tu lugar en la siguiente generación.</p>
          </div>
        </div>

        {/* Formulario de aplicación (envío simulado; conectar al CRM o backend oficial) */}
        <form
          className="formulario revelar"
          id="formAplicacion"
          noValidate
        >
          <h3>Solicitud de aplicación</h3>
          <p className="sub-form">
            Comparte los datos de tu empresa. Un miembro del equipo de
            Growith Business Academy te contactará para agendar tu
            llamada de diagnóstico.
          </p>
          <div className="form-grid">
            <div className="campo">
              <label htmlFor="f-nombre">Nombre</label>
              <input
                type="text"
                id="f-nombre"
                name="nombre"
                required
                autoComplete="given-name"
              />
              <span className="error-msg">Ingresa tu nombre.</span>
            </div>
            <div className="campo">
              <label htmlFor="f-apellido">Apellido</label>
              <input
                type="text"
                id="f-apellido"
                name="apellido"
                required
                autoComplete="family-name"
              />
              <span className="error-msg">Ingresa tu apellido.</span>
            </div>
            <div className="campo">
              <label htmlFor="f-empresa">Empresa</label>
              <input
                type="text"
                id="f-empresa"
                name="empresa"
                required
                autoComplete="organization"
              />
              <span className="error-msg">
                Ingresa el nombre de tu empresa.
              </span>
            </div>
            <div className="campo">
              <label htmlFor="f-cargo">Cargo</label>
              <input
                type="text"
                id="f-cargo"
                name="cargo"
                required
                autoComplete="organization-title"
              />
              <span className="error-msg">Ingresa tu cargo.</span>
            </div>
            <div className="campo">
              <label htmlFor="f-correo">Correo electrónico</label>
              <input
                type="email"
                id="f-correo"
                name="correo"
                required
                autoComplete="email"
              />
              <span className="error-msg">
                Ingresa un correo válido.
              </span>
            </div>
            <div className="campo">
              <label htmlFor="f-telefono">Teléfono</label>
              <input
                type="tel"
                id="f-telefono"
                name="telefono"
                required
                autoComplete="tel"
                inputMode="tel"
              />
              <span className="error-msg">
                Ingresa un teléfono de contacto.
              </span>
            </div>
            <div className="campo">
              <label htmlFor="f-ciudad">Ciudad</label>
              <input
                type="text"
                id="f-ciudad"
                name="ciudad"
                required
                autoComplete="address-level2"
              />
              <span className="error-msg">Ingresa tu ciudad.</span>
            </div>
            <div className="campo">
              <label htmlFor="f-colaboradores">
                Número de colaboradores
              </label>
              <select
                id="f-colaboradores"
                name="colaboradores"
                required
              >
                <option value="">Selecciona una opción</option>
                <option>1 a 5</option>
                <option>6 a 15</option>
                <option>16 a 50</option>
                <option>51 a 100</option>
                <option>Más de 100</option>
              </select>
              <span className="error-msg">Selecciona una opción.</span>
            </div>
            <div className="campo">
              <label htmlFor="f-antiguedad">
                Antigüedad de la empresa
              </label>
              <select id="f-antiguedad" name="antiguedad" required>
                <option value="">Selecciona una opción</option>
                <option>Menos de 2 años</option>
                <option>2 a 5 años</option>
                <option>6 a 10 años</option>
                <option>Más de 10 años</option>
              </select>
              <span className="error-msg">Selecciona una opción.</span>
            </div>
            <div className="campo">
              <label htmlFor="f-facturacion">
                Facturación anual aproximada
                <span className="opcional">(opcional)</span>
              </label>
              <input
                type="text"
                id="f-facturacion"
                name="facturacion"
              />
            </div>
            <div className="campo ancho">
              <label htmlFor="f-reto">
                Principal reto actual de tu empresa
              </label>
              <textarea id="f-reto" name="reto" required></textarea>
              <span className="error-msg">
                Cuéntanos brevemente tu principal reto.
              </span>
            </div>
          </div>
          <label className="consentimiento">
            <input type="checkbox" id="f-consentimiento" required />
            <span>
              He leído y acepto el
              <a href="#aviso-privacidad">aviso de privacidad</a> y
              autorizo a Growith Business Academy a contactarme con
              información sobre el programa Business Growth.
            </span>
          </label>
          <div className="form-envio">
            <button type="submit" className="btn btn-primario">
              Enviar solicitud
            </button>
            <span
              style={{
                fontSize: "0.8rem",
                color: "var(--texto-suave)",
              }}
            >
              Respuesta en un máximo de 2 días hábiles.
            </span>
          </div>
          <p className="form-exito" id="formExito" role="status">
            Gracias por tu solicitud. Un miembro del equipo de Growith
            Business Academy te contactará para agendar tu llamada de
            diagnóstico.
          </p>
        </form>
      </div>
    </section>
  );
}
