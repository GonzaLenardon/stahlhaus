import React from 'react';
import video from '../assets/vid3.mp4';

const QuienesSomos = () => {
  return (
    <div id="quienessomos" className="container my-5">
      <div className="row d-flex justify-content-around ">
        <div className="col-12 col-md-6">
          <h2 className="fs-2 fw-bold py-2 ">
            Construimos confianza, no solo casas
          </h2>
          <p className="fs-5 text-body-secondary">
            En{' '}
            <strong style={{ color: ' rgb(232, 217, 10)' }}>Stahl Haus </strong>{' '}
            diseñamos y construimos{' '}
            <strong>viviendas seguras de alta calidad, </strong> confiables y
            duraderas. Trabajamos con métodos constructivos tradicionales que
            garantizan precisión, rapidez de obra y terminaciones prolijas.
          </p>
          <p className="fs-5 text-body-secondary">
            Nuestro enfoque combina{' '}
            <strong>
              {' '}
              innovación, eficiencia y satisfacción del cliente.{' '}
            </strong>{' '}
            Acompañamos cada etapa: anteproyecto, planos, permisos, obra y
            postventa.
          </p>
        </div>

        <div className="col-12 col-md-4 p-1 d-flex align-items-center ">
          <video
            src={video}
            className="w-100 object-fit-contain "
            autoPlay
            muted
            loop
            playsInline
          ></video>
        </div>
      </div>
    </div>
  );
};

export default QuienesSomos;
