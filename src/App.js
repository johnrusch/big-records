import './App.css';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import defaultSlides from './components/defaultSlides';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Carousel slides={defaultSlides}/>
    </div>
  );
}

export default App;
