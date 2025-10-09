/* import './App.css';
 */
import FeaturedModels from './components/FeatureModel';
import Header from './components/Header';
import VideoPlayer from './components/VideoPlayer';
import { Nav } from './components/Nav';
import Proceso from './components/Proceso';
import Contacto from './components/Contacto';
import Modelos from './components/Modelos';
import ContainerModels from './components/ContainerModels';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Nav />
      <Header />
      <FeaturedModels />
      <Proceso />
      <VideoPlayer />
      <ContainerModels />
      <Contacto />
      <Footer />
    </>
  );
}

export default App;
