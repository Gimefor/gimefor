export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="hero__bg" />
      <div className="hero__overlay" />
      <div className="hero__content">
        <p className="hero__eyebrow">Venezuela · Desde 1995</p>
        <h1 className="hero__title">
          Tres décadas en campo formando estándares <br />
          <em>verificables.</em>
        </h1>
        <p className="hero__subtitle">
          Gestión forestal, restauración de ecosistemas y cumplimiento normativo ambiental con respaldo científico en campo.
          <br /> El socio técnico de organismos internacionales, instituciones estadales y empresas que exigen certeza.        </p>
        <div className="hero__actions">
          <a href="#contacto" className="btn btn--primary">
            Solicitar Dossier de Evidencia
          </a>
          <a href="#portafolio" className="btn btn--outline">
            Ver proyectos →
          </a>
        </div>
      </div>
    </section>
  );
}
