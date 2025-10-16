import React, { useState, useEffect } from 'react';

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const [scrollY, setScrollY] = useState(0);

  /*
     manejar el scroll
 
 useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // Escuchar el evento scroll
    window.addEventListener('scroll', handleScroll);

    // Limpieza cuando el componente se desmonta
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); */

  return (
    <>
      {/* Botón hamburguesa (siempre visible) */}
      <button
        className={`hamburger ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Abrir menú"
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>

      {/* Menú lateral */}
      <nav className={`nav ${menuOpen ? 'open' : ''}`}>
        <ul>
          <li>
            <a href="#quienessomos"> Quienes Somos</a>
          </li>
          <li>
            <a href="#comenzar">Comenzar</a>
          </li>
          <li>
            {' '}
            <a href="#modelos">Modelos</a>
          </li>
          <li>
            <a href="#preguntas">Preguntas</a>
          </li>

          <li>
            <a href="#contacto">Contacto</a>
          </li>
          {/*   <li>Scroll actual: {scrollY}px</li> */}
        </ul>
      </nav>

      {/* Fondo oscuro al abrir menú */}
      {menuOpen && (
        <div className="overlay" onClick={() => setMenuOpen(false)}></div>
      )}
    </>
  );
};

export default Nav;
