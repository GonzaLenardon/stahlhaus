/* import './App.css';
 */

import FeaturedModels from './components/FeatureModel';
import Header from './components/Header';
import VideoPlayer from './components/VideoPlayer';
import Nav from './components/Nav';
import Proceso from './components/Proceso';
import Contacto from './components/Contacto';
import Modelos from './components/Modelos';
import ContainerModels from './components/ContainerModels';
import Footer from './components/Footer';
import CantidadProyectos from './components/CantidadProyectos';
import QuienesSomos from './components/QuienesSomos';
import Faqs from './components/Faqs';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Btnwsp from './components/Btnwsp';

function App() {
  return (
    <>
      <Nav />
      <Header />
      <QuienesSomos />
      <FeaturedModels />
      <CantidadProyectos />
      <Proceso />
      <ContainerModels />
      <VideoPlayer />
      <Contacto />
      <Faqs />
      <Footer />
      <Btnwsp />
    </>
  );
}

export default App;
