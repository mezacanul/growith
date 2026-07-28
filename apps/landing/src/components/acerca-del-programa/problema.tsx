export default function Problema() {
  return (
    // ============================================================
    // SECCIÓN 3. IDENTIFICACIÓN DEL PROBLEMA
    // ============================================================
    <section className="problema" aria-labelledby="titulo-problema">
      <div className="contenedor">
        <div className="revelar">
          <span className="eyebrow">El punto de partida</span>
          <h2 id="titulo-problema">
            Tu empresa puede estar creciendo. Pero también el caos.
          </h2>
          <p className="intro-seccion">
            Muchos empresarios construyen negocios exitosos a partir de
            esfuerzo, experiencia y determinación. Sin embargo, llega un
            momento en el que trabajar más deja de ser suficiente.
          </p>
        </div>
        <div className="grid-retos revelar">
          <div className="reto">Todo depende del dueño.</div>
          <div className="reto">
            El equipo espera instrucciones constantemente.
          </div>
          <div className="reto">
            Se vende, pero la utilidad no crece.
          </div>
          <div className="reto">No existen indicadores claros.</div>
          <div className="reto">
            Los procesos viven en la cabeza de las personas.
          </div>
          <div className="reto">Las urgencias dominan la agenda.</div>
          <div className="reto">
            La empresa crece sin suficiente estructura.
          </div>
          <div className="reto">
            El empresario tiene poco tiempo para pensar
            estratégicamente.
          </div>
        </div>
        <p className="frase-destacada revelar">
          El problema no siempre es la falta de crecimiento. Muchas
          veces es crecer sin sistema.
        </p>
      </div>
    </section>
  );
}
