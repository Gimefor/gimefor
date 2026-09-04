const values = [
  {
    icon: '📐',
    variant: 'forest',
    title: 'Legado que se verifica',
    desc: 'Treinta años de registros científicos, datos de campo y publicaciones que respaldan cada recomendación técnica emitida.',
  },
  {
    icon: '🔗',
    variant: 'plum',
    title: 'Método que articula',
    desc: 'Conectamos comunidades organizadas, instituciones del estado y sector productivo en torno a soluciones reales.',
  },
  {
    icon: '⚗️',
    variant: 'copper',
    title: 'Ciencia que se ejecuta',
    desc: 'Cada intervención se ejecuta en campo con datos duros y métricas auditables, traduciendo investigación en resultados verificables.',
  },
];

export default function Nosotros() {
  return (
    <section id="nosotros" className="nosotros">
      <div className="container">
        <div className="nosotros__grid">
          <div className="nosotros__image-wrap">
            <img
              src="imgAbout.jpg"
              alt="Ecosistema de manglar — área de intervención GIMEFOR en el Delta del Orinoco"
              className="nosotros__image"
            />
            <div className="nosotros__badge">
              <span className="nosotros__badge-number">1995</span>
              <span className="nosotros__badge-label">Año de fundación</span>
            </div>
          </div>

          <div>
            <div className="section-header">
              <p className="eyebrow">Sobre GIMEFOR</p>
              <h2 className="section-title">
                Pioneros en gestión forestal participativa desde 1995
              </h2>
              {/* <p className="section-body">
                Tres décadas de trabajo en campo nos han permitido consolidar un modelo integral donde el rigor científico, la articulación con actores clave y la verificabilidad de resultados convergen en cada proyecto. Esta es la base de nuestra autoridad técnica y la razón por la que organismos internacionales, instituciones y empresas nos eligen como socio estratégico."
              </p> */}
              <p className="section-body">
                Tres décadas de trabajo en campo consolidan un modelo integral de rigor científico, articulación multisectorial y resultados verificables que posiciona a GIMEFOR como socio estratégico de instituciones nacionales e internacionales y del sector productivo.              </p>
            </div>

            <div className="nosotros__values">
              {values.map(v => (
                <div key={v.title} className="nosotros__value">
                  <div className={`nosotros__value-icon nosotros__value-icon--${v.variant}`}>
                    {v.icon}
                  </div>
                  <div>
                    <p className="nosotros__value-title">{v.title}</p>
                    <p className="nosotros__value-desc">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
