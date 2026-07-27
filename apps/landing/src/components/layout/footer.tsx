import type { LandingPageFooter } from "@/types/landing-page-data";

export function Footer({ data }: { data: LandingPageFooter }) {
  return (
    <footer className="footer">
      <div className="contenedor">
        <div className="footer-grid">
          <div>
            <a
              href="#inicio"
              className="logo"
              aria-label="Growith Business Academy - Inicio"
            >
              <strong>GROWITH</strong>
              <span>Business Academy</span>
            </a>
            <p>
              Una nueva forma de ver los negocios: acompañamos a los
              empresarios a implementar metodologías comprobadas para
              tener negocios rentables y estructurados.
            </p>

            <div className="redes">
              <a href="#" aria-label="Instagram">
                <span
                  className="material-symbols-outlined"
                  style={{ fontSize: "20px", color: "white" }}
                >
                  instagram_icon
                </span>
              </a>

              <a href="#" aria-label="LinkedIn">
                <span
                  className="material-symbols-outlined"
                  style={{ fontSize: "20px", color: "white" }}
                >
                  linkedin_icon
                </span>
              </a>
              <a href="#" aria-label="Facebook">
                <span
                  className="material-symbols-outlined"
                  style={{ fontSize: "20px", color: "white" }}
                >
                  facebook_icon
                </span>
              </a>
            </div>
          </div>

          <div>
            <h4>Programa</h4>
            <ul>
              <li>
                <a href="#programa">Qué es Business Growth</a>
              </li>
              <li>
                <a href="#metodologia">Metodología</a>
              </li>
              <li>
                <a href="#contenido">Contenido</a>
              </li>
              <li>
                <a href="#experiencia">Experiencia</a>
              </li>
              <li>
                <a href="#faq">Preguntas frecuentes</a>
              </li>
            </ul>
          </div>
          <div>
            <h4>Legal</h4>
            <ul>
              {/* [REEMPLAZAR] Enlaces a documentos legales oficiales */}
              <li>
                <a href="#" id="aviso-privacidad">
                  Aviso de privacidad
                </a>
              </li>
              <li>
                <a href="#">Términos y condiciones</a>
              </li>
            </ul>
          </div>
          <div>
            <h4>Contacto</h4>
            <ul className="contacto">
              {/* [REEMPLAZAR] Datos de contacto oficiales */}
              <li>{data.correo}</li>
              <li>{data.telefono}</li>
              <li>{data.ubicacion}</li>
            </ul>
            <a href="#aplicar" className="btn btn-primario">
              Solicitar información
            </a>
          </div>
        </div>
        <div className="footer-legal">
          <span>
            © {new Date().getFullYear()} Growith Business Academy. Todos
            los derechos reservados.
          </span>
          <span>
            Business Growth — Programa de crecimiento y profesionalización
            empresarial.
          </span>
        </div>
      </div>
    </footer>
  );
}
