const stats = [
  { number: '30+', label: 'Años de trayectoria' },
  { number: '20+', label: 'Publicaciones indexadas' },
  { number: '100%', label: 'Cumplimiento normativo' },
  { number: '3', label: 'Reservas forestales' },
];

const partners = ['FAO', 'GEF', 'ONU'];

export default function ValidationBar() {
  return (
    <div className="validation">
      <div className="validation__inner">
        <div className="validation__stats">
          {stats.map(s => (
            <div key={s.label}>
              <span className="validation__stat-number">{s.number}</span>
              <span className="validation__stat-label">{s.label}</span>
            </div>
          ))}
        </div>
        <div className="validation__divider" />
        <div className="validation__partners">
          <p className="validation__partner-label">Aliados Estratégicos</p>
          <div className="validation__logos">
            {partners.map(p => (
              <span key={p} className="validation__logo">{p}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
