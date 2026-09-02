const manuals = [
  {
    icon: '🌊',
    title: 'Manual de Restauración en Manglares',
    meta: 'Ecosistemas de manglar · 2ª edición, 2022 · 180 págs.',
  },
  {
    icon: '🌵',
    title: 'Manual de Restauración en Ecosistemas Xerofíticos',
    meta: 'Zonas áridas y semiáridas · 2021 · 142 págs.',
  },
  {
    icon: '🌳',
    title: 'Manual de Restauración en Bosques Húmedos Tropicales',
    meta: 'Bosques húmedos y reservas · 2020 · 210 págs.',
  },
];

const publications = [
  {
    year: '2023',
    title: 'Evaluación de carbono almacenado en bosques de la Reserva Forestal Imataca',
    journal: 'Interciencia, Vol. 48 (3)',
  },
  {
    year: '2021',
    title: 'Participación comunitaria como factor de éxito en planes de manejo forestal venezolano',
    journal: 'Bosque — Revista de Ciencias Forestales, Vol. 42 (1)',
  },
  {
    year: '2019',
    title: 'Indicadores de restauración activa en manglares del Delta del Orinoco',
    journal: 'Interciencia, Vol. 44 (8)',
  },
  {
    year: '2018',
    title: 'Metodología para inventarios forestales en zonas xerofíticas venezolanas',
    journal: 'Revista Forestal Venezolana, Vol. 62 (2)',
  },
  {
    year: '2016',
    title: 'Cumplimiento normativo en reservas forestales bajo gestión participativa',
    journal: 'Acta Científica Venezolana, Vol. 67 (1)',
  },
];

export default function Biblioteca() {
  return (
    <section id="biblioteca" className="biblioteca">
      <div className="container">
        <div className="section-header section-header--center">
          <p className="eyebrow">Biblioteca científica</p>
          <h2 className="section-title">Conocimiento abierto</h2>
          <p className="section-body">
Manuales técnicos descargables y publicaciones indexadas que documentan 30 años de ciencia forestal aplicada.
          </p>
        </div>

        <div className="biblioteca__grid">
          <div>
            <p className="biblioteca__col-header">
              <span className="biblioteca__col-header-icon">📥</span>
              Manuales técnicos
            </p>
            {manuals.map(m => (
              <div key={m.title} className="manual-card">
                <div className="manual-card__icon">{m.icon}</div>
                <div className="manual-card__info">
                  <p className="manual-card__title">{m.title}</p>
                  <p className="manual-card__meta">{m.meta}</p>
                </div>
                <span className="manual-card__dl">↓ PDF</span>
              </div>
            ))}
          </div>

          <div>
            <p className="biblioteca__col-header">
              <span className="biblioteca__col-header-icon">📄</span>
              Publicaciones indexadas (2007–2023)
            </p>
            {publications.map(p => (
              <div key={p.title} className="pub-item">
                <span className="pub-item__year">{p.year}</span>
                <div>
                  <p className="pub-item__title">{p.title}</p>
                  <p className="pub-item__journal">{p.journal}</p>
                </div>
              </div>
            ))}
            <div style={{ marginTop: '1.25rem' }}>
              <a href="#contacto" className="btn btn--forest" style={{ fontSize: '0.875rem', padding: '0.625rem 1.25rem' }}>
                Ver biblioteca completa →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
