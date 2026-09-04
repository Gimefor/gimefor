const nodes = [
  {
    step: '01',
    icon: '🔬',
    title: 'Ciencia',
    desc: 'Investigación primaria y datos de campo en ecosistemas húmedos, manglares y xerofíticos. Inventarios forestales, medición de carbono, estudios de biodiversidad',
    detail: '',
  },
  {
    step: '02',
    icon: '🌿',
    title: 'Campo',
    desc: 'Ejecución en diversos ecosistemas forestales. Presencia permanente, botas en el barro, datos verificables en sitio.',
    detail: '',
  },
  {
    step: '03',
    icon: '🤝',
    title: 'Comunidad',
    desc: 'Co-gestión basada en respeto mutuo, con comunidades organizadas como socias activas y voz decisoria, para garantizar sostenibilidad a largo plazo.',
    detail: '',
  },
  {
    step: '04',
    icon: '📋',
    title: 'Normativa',
    desc: 'Alineación con los Objetivos de Desarrollo Sostenible ODS, Mitigación y adaptación al cambio climático, Soluciones Basadas en la Naturaleza SBN y estándares de certificación internacional. Auditorías, trazabilidad, cadenas de custodia documentadas.',
    detail: '',
  },
];

export default function Ecosystem() {
  return (
    <section id="metodo" className="ecosystem">
      <div className="container">
        <div className="ecosystem__header">
          <div>
            <p className="eyebrow" style={{ color: 'var(--sage)' }}>El método GIMEFOR</p>
            <h2 className="section-title section-title--light">
              El ecosistema que articula ciencia y campo
            </h2>
          </div>
          <p className="section-body section-body--light">
            Nuestra metodología integra cuatro dimensiones que la consultoría convencional aborda de forma aislada. El resultado son intervenciones verificables con evidencia documentada en cada etapa.
          </p>
        </div>

        <div className="ecosystem__flow">
          {nodes.map(n => (
            <div key={n.step} className="ecosystem__node">
              <div className="ecosystem__node-arrow">›</div>
              <span className="ecosystem__node-step">{n.step}</span>
              <span className="ecosystem__node-icon">{n.icon}</span>
              <p className="ecosystem__node-title">{n.title}</p>
              <p className="ecosystem__node-desc">{n.desc}</p>
              <p className="ecosystem__node-detail">{n.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
