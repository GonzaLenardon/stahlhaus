import React from 'react';
import logo from '../assets/stahl-haus.svg';

export const Nav = () => {
  return (
    <div className="nav">
      <div className="container-logo">
        <img src={logo} />
      </div>

      <ul>
        <li>Inicio</li>
        <li>Modelos</li>
        <li>Contacto</li>
        <li>Inicio</li>
      </ul>
    </div>
  );
};
