import React, { useEffect, useRef } from 'react';

const FeaturedModels = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const cards = [
    {
      title: 'PLATEA CON ENCADENADO',
      text: 'Contrapiso con hormigón H21, encadenados y pilotes para garantizar la seguridad y firmeza de la construcción.',
    },
    {
      title: 'PERFILES DE ACERO',
      text: 'Perfiles de acero en el interior con paredes de yeso y cielo raso de PVC, totalmente libre de mantenimiento.',
    },
    {
      title: 'LADRILLOS CON COLUMNAS',
      text: 'Revestimiento exterior en ladrillo rasado o texturado minimalista, con columnas fijadas a las bases.',
    },
    {
      title: 'DISEÑOS PERSONALIZADOS',
      text: 'Aberturas de aluminio premium, planos personalizados y distribución a medida según tus necesidades.',
    },
  ];

  return (
    <section ref={sectionRef} id="models" className="container-info">
      <div className="info-titulo">
        <h1 className="titulo">Líderes en la Región</h1>
        <h3 className="subtitulo">
          Tenemos el sistema de construcción más seguro y eficiente del país,
          con entrega inmediata.
        </h3>
        <h3 className="subtitulo fw-bold">Nos encargamos de TODO</h3>
      </div>

      <div className="cards-container">
        {cards.map((item, index) => (
          <div key={index} className="card-info">
            <h3 className="card_titulo">{item.title}</h3>
            <p className="card_detalles">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedModels;
