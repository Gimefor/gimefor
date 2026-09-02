import { useState } from 'react';

const roleFields: Record<string, { label: string; placeholder: string }> = {
  organismo: {
    label: '¿Qué fondos climáticos busca ejecutar?',
    placeholder: 'Ej. GEF, FMAM, Fondo Verde para el Clima...',
  },
  empresa: {
    label: '¿Qué normativa busca cumplir?',
    placeholder: 'Ej. EUDR, FSC, ISO 14001, Sello Verde...',
  },
  estado: {
    label: '¿Qué convenio necesita respaldo técnico?',
    placeholder: 'Ej. CDB, Acuerdo de París, NDC...',
  },
  comunidad: {
    label: '¿En qué región o reserva forestal se ubica?',
    placeholder: 'Ej. Imataca, Caroní, Delta del Orinoco...',
  },
  academia: {
    label: '¿Qué datos de campo o ecosistemas le interesan?',
    placeholder: 'Ej. carbono en manglares, inventarios xerofíticos...',
  },
};

export default function Contact() {
  const [role, setRole] = useState('');
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ nombre: '', org: '', email: '', rol_detail: '', mensaje: '' });

  const field = role ? roleFields[role] : null;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section id="contacto" className="contact">
      <div className="container">
        <div className="contact__grid">
          <div className="contact__info">
            <div>
              <p className="eyebrow">Contacto</p>
              <h2 className="section-title">Agende una reunión técnica</h2>
              <p className="section-body">
                Cada organización tiene un problema distinto. Cuéntenos el suyo y le explicamos cómo GIMEFOR lo ha resuelto antes.
              </p>
            </div>

            <div className="contact__info-items">
              <div className="contact__info-item">
                <div className="contact__info-icon">📍</div>
                <div>
                  <span className="contact__info-label">Sede principal</span>
                  <span className="contact__info-value">Mérida, Venezuela</span>
                </div>
              </div>
              <div className="contact__info-item">
                <div className="contact__info-icon">🌿</div>
                <div>
                  <span className="contact__info-label">Territorio de operación</span>
                  <span className="contact__info-value">Imataca · Caroní · Caparo · Delta del Orinoco</span>
                </div>
              </div>
              <div className="contact__info-item">
                <div className="contact__info-icon">✉️</div>
                <div>
                  <span className="contact__info-label">Correo</span>
                  <span className="contact__info-value">gimefor.org@gmail.com</span>
                </div>
              </div>
              <div className="contact__info-item">
                <div className="contact__info-icon">📞</div>
                <div>
                  <span className="contact__info-label">Teléfono</span>
                  <span className="contact__info-value"> +58 426 173 34 67</span>
                </div>
              </div>
            </div>
          </div>

          <div className="form">
            {sent ? (
              <div className="form__success">
                <span className="form__success-icon">✅</span>
                <p className="form__success-title">Mensaje recibido</p>
                <p className="form__success-body">
                  El equipo técnico de GIMEFOR revisará su solicitud y le contactará en menos de 48 horas hábiles con una propuesta de reunión.
                </p>
              </div>
            ) : (
              <>
                <div className="form__header">
                  <p className="form__title">Formulario de contacto</p>
                  <p className="form__subtitle">Cuéntenos su rol para personalizar la conversación</p>
                </div>

                <form onSubmit={handleSubmit} style={{ display: 'contents' }}>
                  <div className="form__group">
                    <label className="form__label" htmlFor="rol">¿Cuál es su organización?</label>
                    <select
                      id="rol"
                      className="form__select"
                      value={role}
                      onChange={e => setRole(e.target.value)}
                      required
                    >
                      <option value="">Seleccione su perfil...</option>
                      <option value="organismo">Organismo Internacional (FAO, PNUD, etc.)</option>
                      <option value="empresa">Empresa o PYME (sector productivo)</option>
                      <option value="estado">Institución del Estado</option>
                      <option value="comunidad">Comunidad Organizada</option>
                      <option value="academia">Academia / Investigación</option>
                      <option value="academia">Otro</option>
                    </select>
                  </div>

                  <div className="form__row">
                    <div className="form__group">
                      <label className="form__label" htmlFor="nombre">Nombre completo</label>
                      <input
                        id="nombre"
                        type="text"
                        className="form__input"
                        placeholder="Ej. María García"
                        value={form.nombre}
                        onChange={e => setForm(f => ({ ...f, nombre: e.target.value }))}
                        required
                      />
                    </div>
                    <div className="form__group">
                      <label className="form__label" htmlFor="org">Rol</label>
                      <input
                        id="org"
                        type="text"
                        className="form__input"
                        placeholder="Ej. Director/Ifla"
                        value={form.org}
                        onChange={e => setForm(f => ({ ...f, org: e.target.value }))}
                        required
                      />
                    </div>
                  </div>

                  <div className="form__group">
                    <label className="form__label" htmlFor="email">Correo institucional</label>
                    <input
                      id="email"
                      type="email"
                      className="form__input"
                      placeholder="nombre@organizacion.org"
                      value={form.email}
                      onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                      required
                    />
                  </div>

                  {field && (
                    <div className="form__group">
                      <label className="form__label" htmlFor="rol_detail">{field.label}</label>
                      <input
                        id="rol_detail"
                        type="text"
                        className="form__input"
                        placeholder={field.placeholder}
                        value={form.rol_detail}
                        onChange={e => setForm(f => ({ ...f, rol_detail: e.target.value }))}
                      />
                    </div>
                  )}

                  <div className="form__group">
                    <label className="form__label" htmlFor="mensaje">¿Qué necesita resolver?</label>
                    <textarea
                      id="mensaje"
                      className="form__textarea"
                      placeholder="Describa su situación o el reto técnico que enfrenta..."
                      value={form.mensaje}
                      onChange={e => setForm(f => ({ ...f, mensaje: e.target.value }))}
                      required
                    />
                  </div>

                  <button type="submit" className="form__submit">
                    Solicitar reunión técnica
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
