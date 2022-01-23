import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import MasonsRoom from "./components/MasonsRoom";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import defaultSlides from "./components/defaultSlides";
import PictureGrid from "./components/PictureGrid";

function App() {
  return (
    <div className="app">
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/masons-room" element={<MasonsRoom />} />
        </Routes>
        {/* <Carousel slides={defaultSlides}/> */}
        {/* <PictureGrid /> */}
      </div>
    </div>
  );
}

export default App;
