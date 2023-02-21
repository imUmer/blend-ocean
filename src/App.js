import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Carousel from './components/Carousel/Carousel';
import Card  from './components/Card/Card';
import Archviz  from './components/Archviz/Archviz';
import Support from './components/Support/Support';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Model from './Pages/Models/Model';
import ModelGrid from './Pages/Models/ModelGrid';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ModelGrid>
      { Array(9).fill().map((_, i) => (
          <Model key={i}>
            <h2>Card {i + 1}</h2>
          </Model>
        ))
      }
    </ModelGrid>
      <Hero />
      <Card />
      <Carousel />
      <Archviz />
      <Support />
      <About />
      <Footer />
    </div>
  );
}

export default App;
