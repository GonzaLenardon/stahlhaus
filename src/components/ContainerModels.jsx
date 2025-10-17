import React from 'react';

/* import img1 from '../assets/imagen1.jpeg';
import img2 from '../assets/imagen2.jpeg';
import img3 from '../assets/imagen3.jpeg';
import img4 from '../assets/imagen4.jpeg';
import img5 from '../assets/imagen5.jpeg';
 */ import living from '../assets/living.png';
import cocina from '../assets/cocina.png';
import baño from '../assets/baño.png';
import dormitorio from '../assets/dormitorio.png';
import cochera from '../assets/cochera.png';
import galeria from '../assets/galeria.png';
import medidas from '../assets/medidas.png';
import planoelite40 from '../assets/Planoelite40.png';
import Modelos from './Modelos';
import as from '../assets/parrilla.png';

import natu1 from '../assets/natu/1.jpg';
import natu2 from '../assets/natu/2.jpg';
import natu3 from '../assets/natu/3.jpg';
import natu4 from '../assets/natu/4.jpg';
import natu5 from '../assets/natu/5.jpg';
import planoNatu33 from '../assets/natu/planoNatu33.jpeg';

import berlin51_1 from '../assets/berlin51/1.jpg';
import berlin51_2 from '../assets/berlin51/2.jpg';
import berlin51_3 from '../assets/berlin51/3.jpg';
import berlin51_4 from '../assets/berlin51/4.jpg';
import berlin51_5 from '../assets/berlin51/5.jpg';
import berlin51_6 from '../assets/berlin51/6.jpg';
import berlin51_7 from '../assets/berlin51/7.jpg';
import berlin51_8 from '../assets/berlin51/8.jpg';
import berlin51_9 from '../assets/berlin51/9.jpg';
import berlin51_10 from '../assets/berlin51/10.jpg';
import planoBerlin51 from '../assets/berlin51/planoBerlin51.jpeg';

import berlinPlus1 from '../assets/berlinPlus/1.jpeg';
import berlinPlus2 from '../assets/berlinPlus/1.jpeg';
import planoBerlinPlus from '../assets/berlinPlus/planoBerlinPlus.jpeg';
import berlinPlus3 from '../assets/berlinPlus/3.jpeg';
import berlinPlus4 from '../assets/berlinPlus/4.jpeg';
import berlinPlus5 from '../assets/berlinPlus/5.jpeg';

import planoquincho from '../assets/quincho/quincho.png';
import quincho1 from '../assets/quincho/1.jpeg';
import quincho2 from '../assets/quincho/2.jpeg';
import quincho3 from '../assets/quincho/3.jpeg';
import quincho4 from '../assets/quincho/4.jpeg';
import quincho5 from '../assets/quincho/5.jpeg';
import quincho6 from '../assets/quincho/6.jpeg';
import quincho7 from '../assets/quincho/7.jpeg';
import quincho8 from '../assets/quincho/8.jpeg';

const natu33 = {
  modelo: 'Natu 33',
  detalles: 'Compacta y funcional. Tu primer paso a la casa propia',
  galeria: [natu1, natu2, natu3, natu4, natu5],
  caracteristicas: [
    { imagne: dormitorio, sector: 'Dormitorios:', descripcion: '2' },
    { imagne: cocina, sector: 'Cocina:', descripcion: 'Cocina integral' },
    { imagne: baño, sector: 'Baños:', descripcion: '1' },
    {
      imagne: living,
      sector: 'Estar:',
      descripcion: 'Comedor funcional',
    },

    { imagne: medidas, sector: 'm² finales:', descripcion: '33' },
  ],
  plano: planoNatu33,
  reverse: false,
};

const berlin51 = {
  modelo: 'Berlin 51',
  detalles: 'Confort esencial. Comodidad equilibrada',
  galeria: [
    berlin51_1,
    berlin51_2,
    berlin51_3,
    berlin51_4,
    berlin51_5,
    berlin51_6,
    berlin51_7,
    berlin51_8,
    berlin51_9,
    berlin51_10,
  ],

  caracteristicas: [
    { imagne: dormitorio, sector: 'Dormitorios:', descripcion: '2' },
    { imagne: cocina, sector: 'Cocina:', descripcion: 'Cocina amplia' },
    { imagne: baño, sector: 'Baños:', descripcion: '1' },
    {
      imagne: living,
      sector: 'Estar:',
      descripcion: 'Comedor y living',
    },

    { imagne: medidas, sector: 'm² finales:', descripcion: '51' },
  ],
  plano: planoBerlin51,
  reverse: true,
};

const berlinPlus = {
  modelo: 'Berlin Plus',
  detalles: 'Espacio y estilo. Diseño y amplitud en perfecta armonía',
  galeria: [berlinPlus1, berlinPlus2, berlinPlus3, berlinPlus4, berlinPlus5],
  caracteristicas: [
    { imagne: dormitorio, sector: 'Dormitorios:', descripcion: '2' },
    { imagne: cocina, sector: 'Cocina:', descripcion: 'Cocina integral' },
    { imagne: baño, sector: 'Baños:', descripcion: '1' },
    {
      imagne: living,
      sector: 'Estar:',
      descripcion: 'Comedor funcional',
    },

    { imagne: galeria, sector: 'Galeria:', descripcion: 'Funcional' },

    { imagne: medidas, sector: 'm² finales:', descripcion: '70' },
  ],
  plano: planoBerlinPlus,
  reverse: false,
};

const quincho = {
  modelo: 'Quincho 50',
  detalles: 'El placer de tener un afuera propio',
  galeria: [
    quincho1,
    quincho2,
    quincho3,
    quincho4,
    quincho5,
    quincho6,
    quincho7,
    quincho8,
  ],

  caracteristicas: [
    /*   { imagne: dormitorio, sector: 'Dormitorios:', descripcion: '2' }, */
    { imagne: cocina, sector: 'Cocina:', descripcion: 'Cocina amplia' },
    { imagne: baño, sector: 'Baños:', descripcion: '1' },
    {
      imagne: as,
      sector: 'Asador:',
      descripcion: 'Asador y Comedor',
    },

    { imagne: medidas, sector: 'm² finales:', descripcion: '50' },
  ],
  plano: planoquincho,
  reverse: true,
};

const ContainerModels = () => {
  return (
    <div id="modelos">
      <div className="div-titulo-Modelo">
        <h2 className="modelo-titulo">Nuestros Diseños</h2>
        <h3 className="modelo-subtitulo">
          Elegí el modelo que mejor se adapta a vos. TODOS 100% personalizables.
        </h3>
      </div>
      <Modelos modelo={natu33} />
      <Modelos modelo={berlin51} />
      <Modelos modelo={berlinPlus} />
      <Modelos modelo={quincho} />
    </div>
  );
};

export default ContainerModels;
