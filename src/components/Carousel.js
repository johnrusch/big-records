import React, { useState, useEffect } from "react";
import useWindowDimensions from '../hooks/useWindowDimensions';

const Carousel = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const [transformWidth, setTransformWidth] = useState(0);
  const { length } = slides;
  const { height, width } = useWindowDimensions();
  const fullWidth = width * length

  useEffect(() => {
    setTimeout(goToNext, 7000);
    return function () {
      clearTimeout(goToNext);
    };
  });
  console.log(transformWidth )

  const mapSlides = (slides) => {
    return slides.map((slide, idx) => {
      return (
        <div
          key={idx}
          className={idx === current ? "slide active" : "slide"}
          aria-hidden={idx !== current}
          style={{width: width}}
        >
          <div>
            <h1>{slide.title}</h1>
            <h2>{slide.subtitle}</h2>
          </div>
          {idx === current && <img className="slideImage" src={slide.image} alt={`Image for ${slide.title}`} />}
        </div>
      );
    });
  };

  const goToNext = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
    setTransformWidth(transformWidth - width);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return <section className="carousel" style={{width: fullWidth, transform: `translate3d(${transformWidth}, 0, 0)`}}>{mapSlides(slides)}</section>;
};

export default Carousel;
