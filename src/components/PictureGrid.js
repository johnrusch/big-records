import React, { useState, useEffect } from "react";
import useWindowDimensions from "../hooks/useWindowDimensions";
import testPics from "../pics/testpics";

const PictureGrid = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const [transformWidth, setTransformWidth] = useState(0);
  const { height, width } = useWindowDimensions();
  const [pic, setPic] = useState();
  const [shifting, setShifting] = useState(true);

  const switchPics = (e) => {
    const randomPic = Math.floor(Math.random() * (testPics.length - 1 - 0) + 0);
    const randomTime1 = Math.floor(Math.random() * (6000 - 4000) + 4000);
    return setTimeout(() => {
      return console.log(e)
    }, randomTime1);
  };

  const mapPics = (pics) => {
    return pics.map((pic) => {
      return (
        <img
          className="pic"
          style={{ width: width * 0.125, height: height * 0.166 }}
          src={pic}
          onLoad={() => {console.log(this);switchPics()}}
        />
      );
    });
  };

  return (
    <div className="picGridParent">
      <section
        className="picGrid"
        style={{
          width: width,
        }}
      >
        {mapPics(testPics)}
      </section>
      ;
    </div>
  );
};

export default PictureGrid;
