import type { LandingPageAssets } from "@/types/landing-page-data";

export default function Experiencia({ assets }: { assets: LandingPageAssets }) {
  return (
    // ============================================================
    // SECCIÓN 12. EXPERIENCIA BUSINESS GROWTH
    // ============================================================
    <section
      className="secondary-bg"
      id="experiencia"
      aria-labelledby="titulo-experiencia"
    >
      <div className="contenedor">
        <div className="experiencia-grid !flex !flex-col !items-start !gap-10">
          <figure className="experiencia-figura revelar">
            {/* [REEMPLAZAR] Fotografía oficial de una sesión grupal de Business Growth */}
            <img
              src={assets.clientesGrowith}
              alt="Grupo de empresarios trabajando en una sesión ejecutiva de Business Growth"
              loading="lazy"
              referrerPolicy="no-referrer"
              className="experiencia-img"
            />
          </figure>
          <div className="revelar">
            <span className="eyebrow">La experiencia</span>
            <h2 id="titulo-experiencia">
              Más que asistir a sesiones. Formar parte de una comunidad
              de empresarios en crecimiento.
            </h2>
            <p className="intro-seccion">
              Business Growth reúne a empresarios que comparten retos
              reales: crecer, profesionalizar, liderar equipos, mejorar
              resultados y construir empresas menos dependientes de sus
              fundadores.
            </p>
            <ul className="lista-comunidad">
              <li>Networking de calidad.</li>
              <li>Aprendizaje entre pares.</li>
              <li>Conversaciones empresariales.</li>
              <li>Accountability.</li>
              <li>Intercambio de buenas prácticas.</li>
              <li>Nuevas perspectivas.</li>
              <li>Relaciones de largo plazo.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
