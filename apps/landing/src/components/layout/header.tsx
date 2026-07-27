export function Header() {
  return (
    <header className="nav" id="nav">
      <div className="nav-inner">
        <a
          href="#inicio"
          className="logo"
          aria-label="Growith Business Academy - Inicio"
        >
          <strong>GROWITH</strong>
          <span>Business Academy</span>
        </a>
        <nav
          className="nav-links"
          id="navLinks"
          aria-label="Navegación principal"
        >
          <a href="#programa">Programa</a>
          <a href="#contenido">Contenido</a>
          <a href="#coach">Tu coach</a>
          <a href="#experiencia">Experiencia</a>
          <a href="#testimonios">Testimonios</a>
          <a href="#faq">Preguntas frecuentes</a>
          <a href="#aplicar" className="btn btn-primario">
            Aplicar ahora
          </a>
        </nav>
        <button
          className="hamburguesa"
          id="hamburguesa"
          aria-expanded="false"
          aria-controls="navLinks"
          aria-label="Abrir menú"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}
