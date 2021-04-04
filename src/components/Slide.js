import React from "react";

const Slide = ({ slide, idx }) => {


  return (
    <div key={idx} className="slide">
      <h1>{slide.title}</h1>
      <h2>{slide.subtitle}</h2>
      <img src={slide.image} className="slideImage" />
    </div>
  );


};

export default Slide;