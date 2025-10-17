import { React, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCube, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
import header1 from '../assets/header1.jpeg';
import header2 from '../assets/header2.jpeg';
import header3 from '../assets/header4.jpeg';
import header4 from '../assets/header4.jpeg';
import header5 from '../assets/header5.jpeg';
import header6 from '../assets/header6.jpeg';
import planoElite40 from '../assets/Planoelite40.png';

import ModalPlano from './ModalPlano';

const Header = () => {
  const swiperRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [plano, setPlano] = useState(false);

  const toggleAutoplay = () => {
    if (!swiperRef.current) return;

    if (isPlaying) {
      swiperRef.current.swiper.autoplay.stop();
    } else {
      swiperRef.current.swiper.autoplay.start();
    }
    setIsPlaying(!isPlaying);
  };

  const handleClick = () => {
    const section = document.getElementById('inicio');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div id="inicio" className="head">
        <Swiper
          ref={swiperRef}
          effect="cube"
          grabCursor={true}
          cubeEffect={{
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
          }}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 10000, // ⏱ tiempo entre transiciones
            disableOnInteraction: false, // el autoplay continúa después de interactuar
            /*  pauseOnMouseEnter: true, */ // 🛑 pausa cuando el usuario pasa el mouse
          }}
          loop={true} // 🔁 para que siga en bucle infinito
          modules={[EffectCube, Pagination, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide
            className="slide"
            style={{ backgroundImage: `url(${header1})` }}
          >
            <div className="modelo">
              <h2>Grant Elite 60</h2>
              <div
                className="modelo-plano"
                style={{ backgroundImage: `url(${planoElite40})` }}
                onClick={() => setPlano(true)}
              ></div>
            </div>
          </SwiperSlide>

          <SwiperSlide
            className="slide"
            style={{ backgroundImage: `url(${header2})` }}
          >
            <div className="modelo">
              <h2>Berlín 51</h2>
              <div
                className="modelo-plano"
                style={{ backgroundImage: `url(${planoElite40})` }}
                onClick={() => setPlano(true)}
              ></div>
            </div>
          </SwiperSlide>

          <SwiperSlide
            className="slide"
            style={{ backgroundImage: `url(${header3})` }}
          >
            <div className="modelo">
              <h2>Elite 40</h2>
              <div
                className="modelo-plano"
                style={{ backgroundImage: `url(${planoElite40})` }}
                onClick={() => setPlano(true)}
              ></div>
            </div>
          </SwiperSlide>

          <SwiperSlide
            className="slide"
            style={{ backgroundImage: `url(${header4})` }}
          >
            <div className="modelo">
              <h2>Modelo 4</h2>
              <div
                className="modelo-plano"
                style={{ backgroundImage: `url(${planoElite40})` }}
                onClick={() => setPlano(true)}
              ></div>
            </div>
          </SwiperSlide>

          <SwiperSlide
            className="slide"
            style={{ backgroundImage: `url(${header5})` }}
          >
            <div className="modelo">
              <h2>Modelo 5</h2>
              <div
                className="modelo-plano"
                style={{ backgroundImage: `url(${planoElite40})` }}
                onClick={() => setPlano(true)}
              ></div>
            </div>
          </SwiperSlide>

          <SwiperSlide
            className="slide"
            style={{ backgroundImage: `url(${header6})` }}
          >
            <div className="modelo">
              <h2>Modelo 6</h2>
              <div
                className="modelo-plano"
                style={{ backgroundImage: `url(${planoElite40})` }}
                onClick={() => setPlano(true)}
              ></div>
            </div>
          </SwiperSlide>
        </Swiper>

        <button className="autoplay-btn" onClick={toggleAutoplay}>
          {isPlaying ? '⏸ Pausar' : '▶ Reanudar'}
        </button>

        <div className="head-titulo">
          <p className="headH1">Construyendo Excelencia, Calidad y Seguridad</p>
          <p className="headH2">
            construcción tradicional con ladrillos y columnas + perfiles de
            acero y paredes de yeso.
          </p>
        </div>

        <div className="container-logo" onClick={handleClick}>
          {/*  <img src={logo} alt="Logo" /> */}
        </div>
      </div>

      {plano && (
        <ModalPlano src={planoElite40} alt="plano" handleClose={setPlano} />
      )}
    </>
  );
};

export default Header;
