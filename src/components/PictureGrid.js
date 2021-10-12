import React, { useState, useEffect } from "react";
import useWindowDimensions from "../hooks/useWindowDimensions";

const PictureGrid = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const [transformWidth, setTransformWidth] = useState(0);
  const { length } = slides;
  const { height, width } = useWindowDimensions();
  const fullWidth = width * length;

  useEffect(() => {
    setTimeout(goToNext, 3000);
    return function () {
      clearTimeout(goToNext);
    };
  });
  // console.log(transformWidth )

  const mapPic = (url) => {
    return (
      <img
        className="pic"
        style={{ width: width * 0.125, height: height * 0.166 }}
        alt={`Image for ${slide.title}`}
        src={url}
      />
    );
  };

  const goToNext = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
    let tempWidth = -Math.abs(width * current).toString();
    // let tempWidthString = tempWidth;
    setTransformWidth(tempWidth + "px");
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div className="carouselParent">
      <section
        className="carousel"
        style={{
          width: fullWidth
        }}
      >
        {mapSlides(slides)}
      </section>
      ;
    </div>
  );
};

export default PictureGrid;
