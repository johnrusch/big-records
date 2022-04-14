import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Carousel from "./Carousel";
import defaultSlides from "./defaultSlides";
import SocialLinks from "./SocialLinks";
import useWindowDimensions from "../hooks/useWindowDimensions";
import { ReactComponent as InstagramIcon } from "../assets/svgs/instagram-icon.svg";

const Home = () => {
  const { height, width } = useWindowDimensions();

  // gets image from the image api
  const getImage = async () => {
    const response = await fetch("https://picsum.photos/v2/list");
    const data = await response.json();
    console.log(data);
    return data;
  };

  useEffect(() => {}, []);

  return (
    <div className="homeScreen">
      <SocialLinks />
      <div className="homeBackground1">
        <img
          style={{ width }}
          src="https://big-records.s3.us-west-2.amazonaws.com/assets/ezgif.com-gif-maker.gif"
          alt="big records background"
        />
      </div>
      <Link to="/masons-room">
        <div className="masonsRoomButton">
          <h1>Masons Room</h1>
        </div>
      </Link>
      <div style={{ height }} className="homeBackground2">
        <video autoPlay muted loop className="homeBackgroundVideo">
          <source
            src="https://big-records.s3.us-west-2.amazonaws.com/assets/m4aod+art+dark+video-HD+1080p.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </div>
  );
};

export default Home;
