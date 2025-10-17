import { React, useEffect, useRef } from 'react';
import flechaD from '../assets/flechaDer.png';
import flechaI from '../assets/flechaIzq.png';

const Proceso = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // ✅ Cuando el componente está al menos un 30% visible → agregar clase
          if (entry.isIntersecting && entry.intersectionRatio >= 0.3) {
            entry.target.classList.add('active');
          }

          // 🚫 Cuando deja de ser visible en absoluto → eliminar clase
          if (entry.intersectionRatio === 0) {
            entry.target.classList.remove('active');
          }
        });
      },
      {
        threshold: [0, 0.3, 1], // detecta cambios en 0%, 30% y 100%
      }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div id="comenzar" className="container-proceso" ref={sectionRef}>
      <div className="comoempezar">
        Te cuento como EMPEZAR a construir TU SUEÑO
      </div>

      <div className="procesos paso-1">
        <article className="card-proceso">
          <h3 className="proceso-titulo">1. Elegir el Modelo</h3>
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
          <h3 className="proceso-titulo">2. Congelar el Precio</h3>
          <p className="proceso-info">
            Una vez elegido el modelo, podrás señarlo para congelar el precio y
            seleccionar el plan de pago que consideres más conveniente para tu
            proyecto.
          </p>
        </article>
      </div>

      <div className="procesos paso-3">
        <article className="card-proceso">
          <h3 className="proceso-titulo">3. Firmar el Contrato</h3>
          <p className="proceso-info">
            {' '}
            Tras la firma del contrato y la aprobación del plano final, tu obra
            comienza en un máximo de 90 días. ¡Así empieza a hacerse realidad tu
            proyecto!
          </p>
        </article>

        <div className="proceso-img">
          <img src={flechaI} alt="flechaDerecha" />
        </div>
      </div>

      <div className="procesosD paso-4">
        <div className="proceso-img">
          <img src={flechaD} alt="flechaDerecha" />
        </div>

        <article className="card-proceso">
          <h3 className="proceso-titulo"> Entrega de llave</h3>
          <p className="proceso-info">
            {' '}
            Concluido el proyecto y superada la inspección final, hacemos
            entrega de las llaves para que comiences a disfrutar de una obra que
            refleja <strong> calidad, excelencia y compromiso. </strong> Nuestra
            garantía y servicio postventa aseguran tu tranquilidad.
          </p>
        </article>
      </div>

      <div className="procesos paso-3">
        <article className="card-proceso">
          <h3 className="proceso-titulo">Sigamos</h3>
          <p className="proceso-info">
            Mira todos los modelos que tenemos para <strong>Vos </strong>
          </p>
        </article>

        <div className="proceso-img">
          <img src={flechaI} alt="flechaDerecha" />
        </div>
      </div>
    </div>
  );
};

export default Proceso;
