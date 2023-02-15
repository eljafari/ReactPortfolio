import './App.css';
import Header from './components/header/Header'
import Navbar from './components/navbar/Navbar'
import Contact from './components/contact/Contact';
import Timeline from './components/timeline/Timeline';
import About from './components/about/About';
import Services from './components/services/Services';
import Portfolio from './components/portfolio/Portfolio';
import Footer from './components/footer/Footer';
import Experience from './components/Experience/Experience';
import Gallery from './components/gallery/Gallery';

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <About />
      <Services />
      <Experience />
      <Timeline />
      <Portfolio />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
