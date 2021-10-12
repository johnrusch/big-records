import React, { useState, useEffect } from "react";
import useWindowDimensions from "../hooks/useWindowDimensions";

const PictureGrid = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const [transformWidth, setTransformWidth] = useState(0);
  const { height, width } = useWindowDimensions();
  const [pic, setPic] = useState();




  const mapPic = (url) => {
    return (
      <img
        className="pic"
        style={{ width: width * 0.125, height: height * 0.166 }}
        src={() => {
            
        }}
      />
    );
  };

  return (
    <div className="picGridParent">
      <section
        className="picGrid"
        style={{
          width: width
        }}
      >
        {mapPic(`https://picsum.photos/200/?random=1`)}
        {mapPic(`https://picsum.photos/200/?random=2`)}
        {mapPic(`https://picsum.photos/200/?random=3`)}
        {mapPic(`https://picsum.photos/200/?random=4`)}
      </section>
      ;
    </div>
  );
};

export default PictureGrid;
