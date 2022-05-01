import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Carousel from "./Carousel";
import defaultSlides from "./defaultSlides";
import SocialLinks from "./SocialLinks";
import useWindowDimensions from "../hooks/useWindowDimensions";
import { ReactComponent as InstagramIcon } from "../assets/svgs/instagram-icon.svg";
import { ReactComponent as TwitterIcon } from "../assets/svgs/twitter-icon.svg";

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
      <SocialLinks>
        <InstagramIcon
          fill="white"
          className="navIcon"
          link="https://www.instagram.com/bigrecordsusa/"
        />
        <TwitterIcon
          fill="white"
          className="navIcon"
          link="https://twitter.com/bigrecordsusa"
        />
      </SocialLinks>
      <div className="homeBackground1">
        <img
          style={{ width, height: height / 2, objectFit: 'fill' }}
          src="https://big-records.s3.us-west-2.amazonaws.com/assets/ezgif.com-gif-maker.gif"
          alt="big records background"
        />
        <Link
          to="/masons-ordinary-world"
          style={{ bottom: height / 7 }}
          className="masonsRoomButton"
        >
          🐰Mason's🍎Ordinary🍎World🐰
        </Link>
      </div>
    </div>
  );
};

export default Home;
