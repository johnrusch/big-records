import './App.css';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import defaultSlides from './components/defaultSlides';
import PictureGrid from './components/PictureGrid';

function App() {
  return (
    <div className="app">
      <Navbar />
      {/* <Carousel slides={defaultSlides}/> */}
      <PictureGrid />
    </div>
  );
}

export default App;
