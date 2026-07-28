import type { LandingPageAssets } from "@/types/landing-page-data";

export default function Coach({ assets }: { assets: LandingPageAssets }) {
  return (
    // ============================================================
    // SECCIÓN 9.5. TU COACH DE NEGOCIOS
    // ============================================================
    <section
      className="problema"
      id="coach"
      aria-labelledby="titulo-coach"
    >
      <div className="contenedor">
        <div className="experiencia-grid">
          <figure className="experiencia-figura revelar">
            {/* [REEMPLAZAR] Fotografía oficial del coach */}
            <img
              src={assets.luisCoach}
              alt="Luis Arredondo, coach de negocios"
              loading="lazy"
              referrerPolicy="no-referrer"
              //className="coach-img"
              className="h-auto w-full"
            />
          </figure>
          <div className="revelar">
            <span className="eyebrow">Tu coach de negocios</span>
            <h2 id="titulo-coach">
              Luis Arredondo — Director Sede Península, ActionCOACH
            </h2>
            <p className="intro-seccion">
              Coach #1 de Latinoamérica y TOP 3 Partners de Iberoamérica
              en ActionCOACH. Más de 10 años de experiencia acompañando
              a dueños de negocio, con más de 500 empresas trabajadas a
              lo largo de su carrera.
            </p>
            <ul className="lista-comunidad">
              <li>
                Lic. en Negocios Internacionales, Tecnológico de
                Monterrey.
              </li>
              <li>PMBA, London Imperial College Business School.</li>
              <li>
                Especialista en Finance &amp; Supply Chain Management,
                University of British Columbia.
              </li>
              <li>
                Certificado en Dialogue and Deliberation, Harvard
                University.
              </li>
              <li>
                Certificado en Leadership &amp; Entrepreneurship,
                University of Malaya.
              </li>
              <li>
                Premiado por el Tecnológico de Monterrey y University of
                Malaya por sus contribuciones al desarrollo de líderes.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
