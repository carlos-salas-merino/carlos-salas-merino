import Header from './components/Header';
import AyudaTerapiaOnline from './components/AyudaTerapiaOnline';
import SobreMi from './components/SobreMi';
import Servicios from './components/Servicios';
import Posts from './components/Posts';
import Ventajas from './components/Ventajas';
import Testimonios from './components/Testimonios';
import FAQ from './components/FAQ';
import Contacto from './components/Contacto';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <AyudaTerapiaOnline />
        <SobreMi />
        <Servicios />
        <Posts />
        <Ventajas />
        <Testimonios />
        <FAQ />
        <Contacto />
      </main>
      <Footer />
    </div>
  );
}

export default App;
