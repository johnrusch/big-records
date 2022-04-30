import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import MasonsPlace from "./components/MasonsPlace";
import Navbar from "./components/SocialLinks";
import Carousel from "./components/Carousel";
import defaultSlides from "./components/defaultSlides";
import PictureGrid from "./components/PictureGrid";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/masons-ordinary-world" element={<MasonsPlace />} />
      </Routes>
    </div>
  );
}

export default App;
