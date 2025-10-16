import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import ModalPlano from './ModalPlano';

const Modelos = ({ modelo }) => {
  const [plano, setPlano] = useState(false);

  return (
    <>
      {modelo && (
        <div className="container-modelo">
          <div
            className={`modelo-ilustracion ${modelo.reverse ? 'reversa' : ''}`}
          >
            <div className={`modelo-galeria`}>
              <Swiper
                pagination={{ type: 'fraction' }}
                navigation={true}
                modules={[Pagination, Navigation]}
                loop={true}
                speed={800}
                className="mySwiper"
              >
                {modelo.galeria.map((img, i) => (
                  <SwiperSlide
                    key={i}
                    style={{
                      backgroundImage: `url(${img})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat',
                      width: '100%',
                      height: '100%',
                    }}
                  />
                ))}
              </Swiper>
            </div>

            <div className="caracteristicas">
              <p className="tipomodelo">{modelo.modelo}</p>

              <ul>
                {modelo.caracteristicas.map((mod, i) => (
                  <li key={i}>
                    <img src={mod.imagne} alt={mod.sector} />
                    <span>
                      <strong>{mod.sector} </strong>
                      {mod.descripcion}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div
            className={`modelo-detalles ${
              modelo.reverse ? 'modeloreversa' : ''
            }`}
          >
            <article>{modelo.detalles}</article>

            <div className="modelo-btn">
              <button onClick={() => setPlano(true)} className="btn-plano">
                Ver plano
              </button>
            </div>
          </div>
        </div>
      )}

      {plano && (
        <ModalPlano src={modelo.plano} alt="plano" handleClose={setPlano} />
      )}
    </>
  );
};

export default Modelos;
