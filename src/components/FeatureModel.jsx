import React, { useEffect, useRef } from 'react';

const FeaturedModels = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target); // solo se activa una vez
          }
        });
      },
      { threshold: 0.3 } // cuando el 30% del bloque está visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="models" className="container-info">
      <div className="info-titulo">
        <h3 className="text-center text-4xl font-bold text-white">
          Líderes en la Región
        </h3>
        <h3 className="text-white text-2xl text-center">
          Tenemos el sistema de construcción más seguro y eficiente del país,
          con entrega inmediata.
        </h3>

        <h2 className="text-center text-4xl font-bold text-white mb-20">
          Nos encargamos de TODO
        </h2>
      </div>

      <div className="flex justify-center gap-8">
        <div className="card">
          <h3 className="card_titulo">PLATEA CON ENCADENADO</h3>
          <p className="card_detalles">
            Contrapiso con hormigón H21, encadenados y pilotes para garantizar
            la seguridad y firmeza de la construcción.
          </p>
        </div>
        <div className="card">
          <h3 className="card_titulo">PERFILES DE ACERO</h3>
          <p className="card_detalles">
            Perfiles de acero en el interior con paredes de yeso y cielo raso de
            PVC, totalmente libre de mantenimiento.
          </p>
        </div>
        <div className="card">
          <h3 className="card_titulo">DISEÑOS PERSONALIZADOS</h3>
          <p className="card_detalles">
            Aberturas de aluminio premium, planos personalizados y distribución
            a medida según tus necesidades.
          </p>
        </div>
        <div className="card">
          <h3 className="card_titulo">LADRILLOS CON COLUMNAS</h3>
          <p className="card_detalles">
            Revestimiento exterior en ladrillo rasado o texturado minimalista,
            con columnas fijadas a las bases.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeaturedModels;
