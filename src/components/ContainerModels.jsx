import React from 'react';

import img1 from '../assets/imagen1.jpeg';
import img2 from '../assets/imagen2.jpeg';
import img3 from '../assets/imagen3.jpeg';
import img4 from '../assets/imagen4.jpeg';
import img5 from '../assets/imagen5.jpeg';
import living from '../assets/living.png';
import cocina from '../assets/cocina.png';
import baño from '../assets//baño.png';
import dormitorio from '../assets/dormitorio.png';
import cochera from '../assets/cochera.png';
import galeria from '../assets/galeria.png';
import medidas from '../assets/medidas.png';
import planoelite40 from '../assets/Planoelite40.png';
import Modelos from './Modelos';

const grantElite60 = {
  modelo: 'Grant Elite 60',
  detalles:
    'Es un modelo que combina elegancia atemporal con la funcionalidad moderna. Con espacios amplios y acabados de alta calidad, esta vivienda te ofrece un hogar acogedor y versátil para toda la familia con un diseño minimalista garantizándote seguridad y eficiencia.',
  galeria: [img1, img2, img3, img4, img5],
  caracteristicas: [
    { imagne: dormitorio, sector: 'Dormitorios:', descripcion: '2' },
    { imagne: cocina, sector: 'Cocina:', descripcion: 'Cocina integral' },
    { imagne: baño, sector: 'Baños:', descripcion: '1' },
    {
      imagne: living,
      sector: 'Estar:',
      descripcion: 'Comedor funcional',
    },
    { imagne: cochera, sector: 'Cochera:', descripcion: '1' },
    {
      imagne: galeria,
      sector: 'Galería:',
      descripcion: 'Funcional',
    },
    { imagne: medidas, sector: 'm² finales:', descripcion: '60' },
  ],
  plano: planoelite40,
  reverse: false,
};

const berlin51 = {
  modelo: 'Berlin 51',
  detalles:
    'Es un modelo que combina elegancia atemporal con la funcionalidad moderna. Con espacios amplios y acabados de alta calidad, esta vivienda te ofrece un hogar acogedor y versátil para toda la familia con un diseño minimalista garantizándote seguridad y eficiencia',
  galeria: [img1, img2, img3, img4, img5],
  caracteristicas: [
    { imagne: dormitorio, sector: 'Dormitorios:', descripcion: '2' },
    { imagne: cocina, sector: 'Cocina:', descripcion: 'Cocina amplia' },
    { imagne: baño, sector: 'Baños:', descripcion: '1' },
    {
      imagne: living,
      sector: 'Estar:',
      descripcion: 'Comedor y living',
    },

    { imagne: medidas, sector: 'm² finales:', descripcion: '40' },
  ],
  plano: planoelite40,
  reverse: true,
};

const elite40 = {
  modelo: 'Elite 40',
  detalles:
    'Es un modelo que combina elegancia atemporal con la funcionalidad moderna. Con espacios amplios y acabados de alta calidad, esta vivienda te ofrece un hogar acogedor y versátil para toda la familia con un diseño minimalista garantizándote seguridad y eficiencia.',
  galeria: [img1, img2, img3, img4, img5],
  caracteristicas: [
    { imagne: dormitorio, sector: 'Dormitorios:', descripcion: '2' },
    { imagne: cocina, sector: 'Cocina:', descripcion: 'Cocina integral' },
    { imagne: baño, sector: 'Baños:', descripcion: '1' },
    {
      imagne: living,
      sector: 'Estar:',
      descripcion: 'Comedor funcional',
    },

    { imagne: medidas, sector: 'm² finales:', descripcion: '40' },
  ],
  plano: planoelite40,
  reverse: false,
};

const ContainerModels = () => {
  return (
    <div id="modelos">
      <div className="div-titulo-Modelo">
        <h2 className="modelo-titulo">Modelos listos para vivir</h2>
        <h3 className="modelo-subtitulo">
          Elegí el modelo que mejor se adapta. Todos admiten personalizaciones.
        </h3>
      </div>
      <Modelos modelo={grantElite60} />
      <Modelos modelo={berlin51} />
      <Modelos modelo={elite40} />
    </div>
  );
};

export default ContainerModels;
