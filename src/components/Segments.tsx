const segments = [
  {
    variant: 'int',
    icon: '🌐',
    tag: 'Cooperación Internacional',
    title: 'Para Organismos Internacionales',
    pain: 'FAO, PNUD y agencias de cooperación necesitan contrapartes técnicas que garanticen trazabilidad científica y mitigación de riesgo reputacional en la ejecución de fondos climáticos.',
    features: [
      'Trazabilidad científica de cada intervención',
      'Ejecución comprobada de fondos GEF/FMAM',
      'Informes auditables con datos primarios',
      'Articulación comunitaria garantizada con coprotagonismo de actores locales',
      'Co-publicación y validación científica con investigadores y academia',
    ],
    cta: 'Explorar capacidades →',
  },
  {
    variant: 'prod',
    icon: '🏭',
    tag: 'Sector Productivo',
    title: 'Para Empresas y PYMEs',
    pain: 'Empresas forestales, agroindustriales y petroleras sujetas a normativas y certificaciones exigentes, que requieren respaldo técnico para demostrar cumplimiento ambiental y manejo sostenible.',
    features: [
      'Inventarios forestales certificables',
      'Cadenas de custodia documentadas',
      'Planes de manejo forestal y plan forestal operativo',
      'Estudios de impacto ambiental y sociocultural',
      'Acompañamiento en auditorías externas',
      'Integración de saberes comunitarios para sostenibilidad a largo plazo',
      'Validación técnica con respaldo de publicaciones y proyectos',
    ],
    cta: 'Ver soluciones →',
  },
  {
    variant: 'inst',
    icon: '🏛️',
    tag: 'Instituciones del Estado',
    title: 'Para el Sector Público',
    pain: 'Ministerios y organismos del Estado requieren respaldo técnico riguroso para compromisos con los Objetivos de Desarrollo Sostenible ODS, Mitigación y adaptación al cambio climático',
    features: [
      'Planes de manejo de áreas protegidas',
      'Consultoría para políticas forestales',
      'Datos de campo para informes nacionales',
      'Fortalecimiento de capacidades técnicas con comunidades y academia',
    ],
    cta: 'Hablar con el equipo →',
  },
];

export default function Segments() {
  return (
    <section id="soluciones" className="segments">
      <div className="container">
        <div className="section-header section-header--center">
          <p className="eyebrow">Nuestras Soluciones</p>
          <h2 className="section-title">
            Una Solución para cada problema planteado
          </h2>
          <p className="section-body">
            Cada aliado enfrenta desafíos únicos que requieren respuestas técnicas precisas. Cada segmento tiene su propio lenguaje de riesgo y su propio estándar de evidencia.
          </p>
        </div>

        <div className="segments__grid">
          {segments.map(s => (
            <div key={s.variant} className={`segment-card segment-card--${s.variant}`}>
              <div className={`segment-card__icon segment-card__icon--${s.variant}`}>
                {s.icon}
              </div>
              <span className={`segment-card__tag segment-card__tag--${s.variant}`}>
                {s.tag}
              </span>
              <h3 className="segment-card__title">{s.title}</h3>
              <p className="segment-card__pain">{s.pain}</p>
              <div className="segment-card__features">
                {s.features.map(f => (
                  <div key={f} className="segment-card__feature">{f}</div>
                ))}
              </div>
              <a href="#contacto" className="segment-card__cta">{s.cta}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
