import React from 'react';

const Faqs = () => {
  return (
    <div id="preguntas" className="container-md pt-3 px-md-5 my-5 pb-5">
      <h2 className="modelo-titulo">FAQs</h2>
      <div className="accordion px-md-5" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              style={{
                background: ' rgba(232, 217, 10,0.8)',
                fontWeight: '700',
              }}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              ¿Qué es el construcción tradicional y por qué es eficiente?
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>
                {' '}
                Sistema en seco con perfiles de acero galvanizado y aislaciones
                de alta performance{' '}
              </strong>{' '}
              : reduce tiempos, mejora el confort y ofrece gran durabilidad.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              style={{
                background: ' rgba(232, 217, 10,0.8)',
                fontWeight: '700',
              }}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              ¿Cuánto tarda una obra típica?
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Depende de m² y terminaciones. Referencia: 60 m² puede completarse
              en 8–12 semanas desde el inicio.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              style={{
                background: ' rgba(232, 217, 10,0.8)',
                fontWeight: '700',
              }}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              ¿Puedo personalizar un modelo?
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Sí. Ajustamos distribución, terminaciones y posibles ampliaciones
              futuras.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
