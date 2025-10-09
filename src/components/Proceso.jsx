import { React, useEffect, useRef } from 'react';
import flechaD from '../assets/flechaDer.png';
import flechaI from '../assets/flechaIzq.png';

const Proceso = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // 👇 Cuando entra al viewport (30% visible)
            entry.target.classList.add('active');
          } else {
            // 👇 Cuando sale del viewport
            entry.target.classList.remove('active');
          }
        });
      },
      { threshold: 0.3 } // activa al 30% visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // limpieza al desmontar
    return () => observer.disconnect();
  }, []);

  return (
    <div className="container-proceso" ref={sectionRef}>
      <div className="comoempezar">
        Te cuento como EMPEZAR a construir TU SUEÑO
      </div>

      <div className="procesos paso-1">
        <article className="card-proceso">
          <h3 className="proceso-titulo">Elegir el Modelo</h3>
          <p className="proceso-info">
            Junto a nuestros asesores podrás elegir el modelo que mejor se
            ajuste a tus necesidades, evaluando distribución, estilo y
            materiales.{' '}
          </p>
        </article>

        <div className="proceso-img">
          <img src={flechaI} alt="flechaDerecha" />
        </div>
      </div>

      <div className="procesosD paso-2">
        <div className="proceso-img">
          <img src={flechaD} alt="flechaDerecha" />
        </div>

        <article className="card-proceso">
          <h3 className="proceso-titulo"> Señar y Congelar el Precio</h3>
          <p className="proceso-info">
            Una vez elegido el modelo, podrás señarlo para congelar el precio y
            seleccionar el plan de pago más conveniente para vos.
          </p>
        </article>
      </div>

      <div className="procesos paso-3">
        <article className="card-proceso">
          <h3 className="proceso-titulo">3. Firmar el Contrato</h3>
          <p className="proceso-info">
            {' '}
            Con la documentación lista, firmamos el contrato y en menos de 90
            días iniciamos la construcción de tu vivienda.
          </p>
        </article>

        <div className="proceso-img">
          <img src={flechaI} alt="flechaDerecha" />
        </div>
      </div>

      <div className="procesosD paso-4">
        <div className="proceso-img">
          {/* <img src={flechaD} alt="flechaDerecha" /> */}
        </div>
        <article className="card-proceso">
          <h3 className="proceso-titulo"> ¡Disfrutar tu Nuevo Hogar!</h3>
          <p className="proceso-info">
            {' '}
            Te entregamos la casa completamente terminada, lista para habitar,
            con garantía y asistencia postventa.
          </p>
        </article>
      </div>
    </div>
  );
};

export default Proceso;
