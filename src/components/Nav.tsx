import { useState, useEffect } from 'react';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <nav className={`nav${scrolled ? ' nav--scrolled' : ''}`}>
      <div className="nav__inner">
        <a href="#inicio" className="nav__logo" onClick={close}>
          <span className="nav__logo-mark">G</span>
          <span className="nav__logo-text">GIMEFOR</span>
        </a>

        <button
          className="nav__hamburger"
          onClick={() => setOpen(o => !o)}
          aria-label="Menú"
        >
          <span />
          <span />
          <span />
        </button>

        <ul className={`nav__links${open ? ' nav__links--open' : ''}`}>
          <li><a href="#inicio" onClick={close}>Inicio</a></li>
          <li><a href="#nosotros" onClick={close}>GIMEFOR</a></li>
          <li><a href="#portafolio" onClick={close}>Ciencia en el Territorio</a></li>
          <li><a href="#soluciones" onClick={close}>Soluciones</a></li>
          <li><a href="#biblioteca" onClick={close}>Biblioteca</a></li>
          <li><a href="#contacto" onClick={close} className="nav__cta">Contacto</a></li>
        </ul>
      </div>
    </nav>
  );
}
