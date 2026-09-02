export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div>
            <a href="#inicio" className="footer__logo">
              <span className="nav__logo-mark">G</span>
              <span className="nav__logo-text">GIMEFOR</span>
            </a>
            <p className="footer__desc">
              Gestión Integrada de Recursos Forestales. Construyendo estándares de manejo forestal verificables desde 1995.
            </p>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              <span className="footer__seal">ISO 17024</span>
              <span className="footer__seal">CBD</span>
              <span className="footer__seal">EUDR ready</span>
            </div>
          </div>

          <div>
            <p className="footer__col-title">Navegación</p>
            <ul className="footer__links">
              <li><a href="#inicio">Inicio</a></li>
              <li><a href="#nosotros">GIMEFOR</a></li>
              <li><a href="#portafolio">Ciencia en el Campo</a></li>
              <li><a href="#soluciones">Nuestras Soluciones</a></li>
              <li><a href="#biblioteca">Biblioteca</a></li>
              <li><a href="#metodo">Método Gimefor</a></li>
            </ul>
          </div>

          <div>
            <p className="footer__col-title">SOLUCIONES o PROYECTOS</p>
            <ul className="footer__links">
              <li><a href="#portafolio">Cooperación Internacional</a></li>
              <li><a href="#portafolio">Sector Productivo</a></li>
              <li><a href="#portafolio">Instituciones del Estado</a></li>
              <li><a href="#biblioteca">Proyectos</a></li>
              <li><a href="#soluciones">Casos de Éxito</a></li>
            </ul>
          </div>

          <div>
            <p className="footer__col-title">Contacto directo</p>
            <div className="footer__contact-item">
              <span className="footer__contact-label">Sede</span>
              <span className="footer__contact-value">Mérida, Venezuela</span>
            </div>
            <div className="footer__contact-item">
              <span className="footer__contact-label">Email</span>
              <span className="footer__contact-value">gimefor.org@gmail.com</span>
            </div>
            <div className="footer__contact-item">
              <span className="footer__contact-label">Teléfono</span>
              <span className="footer__contact-value"> +58 426 173 34 67</span>
            </div>
            <div className="footer__contact-item">
              <span className="footer__contact-label">Territorio</span>
              <span className="footer__contact-value">Imataca · Caroní · Caparo</span>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copy">
            © 2026 GIMEFOR. Todos los derechos reservados.
          </p>
          <p className="footer__copy">
            Gestión Integrada de Recursos Forestales · Venezuela
          </p>
        </div>
      </div>
    </footer>
  );
}
