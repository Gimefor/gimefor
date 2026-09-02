export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="hero__bg" />
      <div className="hero__overlay" />
      <div className="hero__content">
        <p className="hero__eyebrow">Venezuela · Desde 1995</p>
        <h1 className="hero__title">
          Ciencia forestal aplicada con<br />
          <em>estándar verificable.</em>
        </h1>
        <p className="hero__subtitle">
          Gestión forestal sostenible, restauración de ecosistemas y cumplimiento normativo ambiental con respaldo científico verificable en campo, para organismos internacionales, instituciones y sector productivo que exigen certeza técnica.
        </p>
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
