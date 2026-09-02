import Nav from './components/Nav';
import Hero from './components/Hero';
import ValidationBar from './components/ValidationBar';
import Nosotros from './components/Nosotros';
import Ecosystem from './components/Ecosystem';
import Segments from './components/Segments';
import Portfolio from './components/Portfolio';
import Manifesto from './components/Manifesto';
import Biblioteca from './components/Biblioteca';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <ValidationBar />
        <Nosotros />
        <Ecosystem />
        <Segments />
        <Portfolio />
        <Manifesto />
        <Biblioteca />
        <Contact />
      </main>
      <Footer />
    </>
  );
}