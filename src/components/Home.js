import React, { useEffect } from "react";
import Carousel from "./Carousel";
import defaultSlides from "./defaultSlides";
import SocialLinks from "./SocialLinks";
import useWindowDimensions from "../hooks/useWindowDimensions";
import { ReactComponent as InstagramIcon } from "../assets/svgs/instagram-icon.svg";

const Home = () => {
  const strings = [
    "Welcome to the Big Room",
    "The Big Room is a place to relax and enjoy the outdoors",
    "Dobbs Room",
    "Control is key",
    "Feet are for walking",
    "Turf is for playing",
    "Smells are for smelling",
    "Hello friends",
    "I am a big room",
    "It's a big room",
    "Let's go big",
    "Nice to meet you",
    "Incredible",
    "Sweet",
    "You are a big room",
    "We are a big room",
    "C'mon...",
    "Please take a seat",
    "Enjoy your stay",
    "How are you",
    "Haha, yeah...",
  ];

  const { height, width } = useWindowDimensions();

  const getRandomString = () => {
    const randomIndex = Math.floor(Math.random() * strings.length);
    return strings[randomIndex];
  };

  // gets image from the image api
  const getImage = async () => {
    const response = await fetch("https://picsum.photos/v2/list");
    const data = await response.json();
    console.log(data);
    return data;
  };

  useEffect(() => {
    setInterval(() => {
      document.title = getRandomString();
    }, 3000);
  }, []);

  return (
    <div className="homeScreen">
      <SocialLinks />
      <div className="homeBackground1">
        <img style={{ width }} src="https://big-records.s3.us-west-2.amazonaws.com/assets/ezgif.com-gif-maker.gif" alt="big records background" />
      </div>
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
