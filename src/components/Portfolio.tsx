import { useState } from 'react';

const projects = [
  {
    id: 1,
    ecosystem: 'Húmedo',
    partner: 'FAO · GEF',
    title: 'Proyecto FAO-GEF Reserva Forestal Imataca',
    desc: 'Gestión participativa de 3.6 millones de hectáreas en la reserva más importante de Venezuela. Desarrollo de planes de manejo forestal con comunidades afrodescendientes e indígenas.',
    img: 'humedo.jpg',
    years: '2016 – 2023',
    metrics: [
      { val: '3.6M', label: 'Hectáreas' },
      { val: '100%', label: 'Cumplimiento' },
      { val: '12', label: 'Comunidades' },
    ],
  },
  {
    id: 2,
    ecosystem: 'Manglar',
    partner: 'PNUD · Estado',
    title: 'Restauración de Manglares — Delta del Orinoco',
    desc: 'Evaluación del estado fitosanitario y plan de restauración activa de manglares degradados por actividad petrolera. Metodología replicable publicada en Interciencia.',
    img: 'manglar.jpg',
    years: '2019 – 2022',
    metrics: [
      { val: '14K', label: 'Has restauradas' },
      { val: '20+', label: 'Indicadores' },
      { val: '4', label: 'Publicaciones' },
    ],
  },
  {
    id: 3,
    ecosystem: 'Xerofítico',
    partner: 'Sector Privado',
    title: 'Inventario Forestal Xerofítico — Estado Falcón',
    desc: 'Inventario forestal para empresa minera en zona xerofítica. Generación de línea base ambiental, cálculo de biomasa y diseño de plan de compensación forestal.',
    img: 'xerofitico.jpg',
    years: '2021 – 2023',
    metrics: [
      { val: '8.2K', label: 'Hectáreas' },
      { val: '180+', label: 'Parcelas' },
      { val: '3', label: 'Informes' },
    ],
  },
];

const filters = ['Todos', 'Húmedo', 'Manglar', 'Xerofítico'];

export default function Portfolio() {
  const [active, setActive] = useState('Todos');

  const visible = active === 'Todos'
    ? projects
    : projects.filter(p => p.ecosystem === active);

  return (
    <section id="portafolio" className="portfolio">
      <div className="container">
        <div className="section-header">
          <p className="eyebrow">Ciencia en el campo</p>
          <h2 className="section-title">Donde la teoría se convierte en Realidad</h2>
          <p className="section-body">
            Hablamos de hectáreas medidas, comunidades articuladas y normativas cumplidas. Cada intervención se documenta con datos duros y métricas auditables que resisten cualquier escrutinio técnico o institucional.
          </p>
        </div>

        <div className="portfolio__controls">
          <div className="portfolio__filters">
            {filters.map(f => (
              <button
                key={f}
                className={`portfolio__filter${active === f ? ' portfolio__filter--active' : ''}`}
                onClick={() => setActive(f)}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="portfolio__grid">
          {visible.map(p => (
            <article key={p.id} className="project-card">
              <div className="project-card__media">
                <img src={p.img} alt={p.title} />
                <div className="project-card__media-overlay" />
                <span className="project-card__eco-tag">{p.ecosystem}</span>
                <span className="project-card__year">{p.years}</span>
              </div>
              <div className="project-card__body">
                <p className="project-card__partner">{p.partner}</p>
                <h3 className="project-card__title">{p.title}</h3>
                <p className="project-card__desc">{p.desc}</p>
                <div className="project-card__metrics">
                  {p.metrics.map(m => (
                    <div key={m.label}>
                      <span className="project-card__metric-val">{m.val}</span>
                      <span className="project-card__metric-label">{m.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
