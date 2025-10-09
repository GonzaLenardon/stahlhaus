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

const Header = () => {
  const swiperRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const toggleAutoplay = () => {
    if (!swiperRef.current) return;

    if (isPlaying) {
      swiperRef.current.swiper.autoplay.stop();
    } else {
      swiperRef.current.swiper.autoplay.start();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="head">
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
          delay: 2500, // ⏱ tiempo entre transiciones
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
          {' '}
          <div className="modelo">Grant Elite 60</div>
        </SwiperSlide>

        <SwiperSlide
          className="slide"
          style={{ backgroundImage: `url(${header2})` }}
        >
          <div className="modelo">Berlín 51</div>
        </SwiperSlide>

        <SwiperSlide
          className="slide"
          style={{ backgroundImage: `url(${header3})` }}
        >
          <div className="modelo">Elite 40</div>
        </SwiperSlide>

        <SwiperSlide
          className="slide"
          style={{ backgroundImage: `url(${header4})` }}
        >
          <div className="modelo">Modelo 4</div>
        </SwiperSlide>

        <SwiperSlide
          className="slide"
          style={{ backgroundImage: `url(${header5})` }}
        >
          <div className="modelo">Modelo 5</div>
        </SwiperSlide>
        <SwiperSlide
          className="slide"
          style={{ backgroundImage: `url(${header6})` }}
        >
          <div className="modelo">Modelo 6</div>
        </SwiperSlide>
      </Swiper>

      <button className="autoplay-btn" onClick={toggleAutoplay}>
        {isPlaying ? '⏸ Pausar' : '▶ Reanudar'}
      </button>

      {/*   <div className="info">Ahora el sueño de tu casa propia es posible </div> */}

      {/* 
      <div class="text-container">
        <p class="textMotion">JUNTOS CONSTRUIMOS TU SUEÑO !!!</p>
      </div> */}

      <div className="head-titulo">
        <p className="headH1">Viviendas Seguras para toda la vida</p>
        <p className="headH2">
          construcción tradicional con calidad, eficiencia y confort superior.
        </p>
      </div>
    </div>
  );
};

export default Header;
