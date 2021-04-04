import React, { useState, useEffect } from "react";
import Slide from "./Slide";

const Carousel = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const { length } = slides;

  useEffect(() => {
    setTimeout(goToNext, 1000);
  });

  const mapSlides = (slides) => {
    return slides.map((slide, idx) => {
      return <Slide slide={slide} idx={idx} />;
    });
  };

  const goToNext = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className="carousel">
        {mapSlides(slides)}
    </section>
   );


};

export default Carousel;
