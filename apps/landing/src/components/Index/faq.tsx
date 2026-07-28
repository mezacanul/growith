export default function Faq() {
  return (
    // ============================================================
    // SECCIÓN 18. PREGUNTAS FRECUENTES
    // ============================================================
    <section id="faq" aria-labelledby="titulo-faq">
      <div className="contenedor">
        <div className="centrado revelar">
          <span className="eyebrow">Preguntas frecuentes</span>
          <h2 id="titulo-faq">
            Lo que los empresarios preguntan antes de aplicar.
          </h2>
        </div>
        <div className="faq-lista revelar">
          <div className="faq">
            <button className="faq-btn" aria-expanded="false">
              <h3>
                ¿Business Growth es un curso, diplomado o programa?
              </h3>
              <span className="signo" aria-hidden="true"></span>
            </button>
            <div className="faq-contenido">
              <p>
                Es un programa ejecutivo de transformación empresarial.
                Combina sesiones grupales, implementación dentro de tu
                empresa, seguimiento individual y auditorías. A
                diferencia de un curso, el objetivo no es solo aprender:
                es construir capacidades reales en tu negocio.
              </p>
            </div>
          </div>
          <div className="faq">
            <button className="faq-btn" aria-expanded="false">
              <h3>¿Cuánto dura?</h3>
              <span className="signo" aria-hidden="true"></span>
            </button>
            <div className="faq-contenido">
              <p>
                Nueve meses. La duración está diseñada para que exista
                tiempo suficiente de implementación entre sesiones, no
                solo de aprendizaje.
              </p>
            </div>
          </div>
          <div className="faq">
            <button className="faq-btn" aria-expanded="false">
              <h3>¿Cuántas sesiones incluye?</h3>
              <span className="signo" aria-hidden="true"></span>
            </button>
            <div className="faq-contenido">
              <p>
                Quince sesiones grupales, complementadas con seguimiento
                individual y tres auditorías trimestrales de
                implementación.
              </p>
            </div>
          </div>
          <div className="faq">
            <button className="faq-btn" aria-expanded="false">
              <h3>¿El programa es presencial u online?</h3>
              <span className="signo" aria-hidden="true"></span>
            </button>
            <div className="faq-contenido">
              <p>
                Puedes elegir el esquema que mejor se ajuste a ti:
                Academia Online, con seguimiento semanal a distancia, o
                Academia Presencial, con sesiones en sede y acceso
                incluido para una persona adicional de tu equipo. El
                contenido y la metodología son los mismos en ambos
                casos.
              </p>
            </div>
          </div>
          <div className="faq">
            <button className="faq-btn" aria-expanded="false">
              <h3>¿Necesito tener una empresa en operación?</h3>
              <span className="signo" aria-hidden="true"></span>
            </button>
            <div className="faq-contenido">
              <p>
                Sí. El programa está diseñado para trabajar sobre una
                empresa real en funcionamiento, de modo que cada
                herramienta se implemente directamente en tu negocio.
              </p>
            </div>
          </div>
          <div className="faq">
            <button className="faq-btn" aria-expanded="false">
              <h3>¿Puedo participar con un socio o director?</h3>
              <span className="signo" aria-hidden="true"></span>
            </button>
            <div className="faq-contenido">
              <p>
                Sí, es posible participar acompañado de un socio o
                director. Las condiciones específicas se confirman
                durante el proceso de aplicación.
                {/* [Placeholder: definir política oficial de
                  acompañantes.] */}
              </p>
            </div>
          </div>
          <div className="faq">
            <button className="faq-btn" aria-expanded="false">
              <h3>¿Qué ocurre si falto a una sesión?</h3>
              <span className="signo" aria-hidden="true"></span>
            </button>
            <div className="faq-contenido">
              <p>
                Buscamos que ninguna sesión se pierda. Las alternativas
                de reposición o recuperación se explican durante el
                proceso de inscripción.
                {/* [Placeholder: definir política oficial de
                  asistencia.] */}
              </p>
            </div>
          </div>
          <div className="faq">
            <button className="faq-btn" aria-expanded="false">
              <h3>¿Cuánto tiempo debo dedicar entre sesiones?</h3>
              <span className="signo" aria-hidden="true"></span>
            </button>
            <div className="faq-contenido">
              <p>
                La implementación es parte central del programa.
                Recomendamos reservar tiempo cada semana para trabajar
                las prioridades definidas en cada sesión, integrándolas
                a tu operación normal.
              </p>
            </div>
          </div>
          <div className="faq">
            <button className="faq-btn" aria-expanded="false">
              <h3>¿Recibiré un certificado?</h3>
              <span className="signo" aria-hidden="true"></span>
            </button>
            <div className="faq-contenido">
              <p>
                Sí. Al concluir el programa recibirás un certificado de
                participación de Growith Business Academy y formarás
                parte de la comunidad Alumni.
              </p>
            </div>
          </div>
          <div className="faq">
            <button className="faq-btn" aria-expanded="false">
              <h3>
                ¿Qué diferencia hay entre Business Growth y una
                consultoría?
              </h3>
              <span className="signo" aria-hidden="true"></span>
            </button>
            <div className="faq-contenido">
              <p>
                Una consultoría entrega diagnósticos y recomendaciones.
                Business Growth desarrolla al empresario y a su empresa:
                construyes las capacidades para dirigir, decidir e
                implementar por ti mismo, con acompañamiento y
                accountability.
              </p>
            </div>
          </div>
          <div className="faq">
            <button className="faq-btn" aria-expanded="false">
              <h3>
                ¿Qué diferencia hay entre Business Growth y un MBA?
              </h3>
              <span className="signo" aria-hidden="true"></span>
            </button>
            <div className="faq-contenido">
              <p>
                Un MBA es un programa académico amplio, basado en teoría
                y casos de estudio. Business Growth es práctico y
                aplicado: trabajas sobre tu propia empresa, con
                herramientas diseñadas para negocios pequeños y
                medianos, y con resultados de implementación medibles
                durante el programa.
              </p>
            </div>
          </div>
          <div className="faq">
            <button className="faq-btn" aria-expanded="false">
              <h3>¿Qué tipo de empresas pueden participar?</h3>
              <span className="signo" aria-hidden="true"></span>
            </button>
            <div className="faq-contenido">
              <p>
                Empresas pequeñas y medianas en operación, de cualquier
                industria, cuyos dueños o directores buscan
                profesionalizar, estructurar y hacer crecer su negocio.
              </p>
            </div>
          </div>
          <div className="faq">
            <button className="faq-btn" aria-expanded="false">
              <h3>¿El programa garantiza resultados?</h3>
              <span className="signo" aria-hidden="true"></span>
            </button>
            <div className="faq-contenido">
              <p>
                No. Ningún programa serio puede garantizar resultados.
                Lo que sí garantizamos es una metodología estructurada,
                acompañamiento cercano y seguimiento de implementación.
                Los resultados dependen del nivel de participación,
                implementación y contexto de cada empresa.
              </p>
            </div>
          </div>
          <div className="faq">
            <button className="faq-btn" aria-expanded="false">
              <h3>¿Cómo funciona el proceso de aplicación?</h3>
              <span className="signo" aria-hidden="true"></span>
            </button>
            <div className="faq-contenido">
              <p>
                Completa la solicitud en esta página, agenda una llamada
                de diagnóstico y, si el programa es adecuado para tu
                empresa, reserva tu lugar en la siguiente generación. La
                llamada no genera ningún compromiso.
              </p>
            </div>
          </div>
          <div className="faq">
            <button className="faq-btn" aria-expanded="false">
              <h3>¿Existen facilidades de pago?</h3>
              <span className="signo" aria-hidden="true"></span>
            </button>
            <div className="faq-contenido">
              <p>
                Existen distintas opciones de pago que se explican
                durante el proceso de aplicación. 
                {/* [Placeholder: definir esquemas de pago oficiales.] */}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
