import React from 'react';
import slogan from '../assets/vid3.mp4';

const Contacto = () => {
  return (
    <div id="contacto" className="container-contacto">
      <div className="video-contacto ">
        <video
          width="90%"
          height="100%"
          autoPlay
          loop
          muted
          style={{
            borderRadius: '12px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
          }}
        >
          <source src={slogan} type="video/mp4" />
        </video>
      </div>

      <div className="contacto">
        <p className="contacto-titulo">¿Empezamos a construir tu proyecto?</p>

        <div className="text-container">
          <p className="contacto-subtitulo">
            Contanos tu idea y te asesoramos sin cargo.
          </p>
        </div>

        <form id="contactForm" className="formulario">
          <div className="input-form">
            <label htmlFor="nombre">Nombre</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              placeholder="Tú nombre"
              required
            />
          </div>

          <div className="input-form">
            <label htmlFor="localidad">Localidad</label>
            <input
              type="text"
              id="localidad"
              name="localidad"
              placeholder="Ciudad / Barrio"
              required
            />
          </div>

          <div className="input-form">
            <label htmlFor="telefono">Telefono/Whatsapp</label>
            <input
              type="text"
              id="telefono"
              name="telefono"
              placeholder="3434556677"
              required
            />
          </div>

          <div className="input-form">
            <label htmlFor="email">Correo electrónico</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="tu@email.com"
              required
            />
          </div>

          <div className="input-form full-width">
            <label htmlFor="mensaje">Mensaje</label>
            <textarea
              id="mensaje"
              name="mensaje"
              placeholder="Superficie, idea, ubicacion del lote ... "
              required
            ></textarea>
          </div>

          <button type="submit" className="btn-enviar">
            Enviar Consulta
          </button>

          {/* 📌 Aquí se mostrará el estado */}
          <p id="formStatus" className="status-msg"></p>
        </form>
      </div>
    </div>
  );
};

export default Contacto;
