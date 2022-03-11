import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as InstagramIcon } from "../assets/svgs/instagram-icon.svg";
import { ReactComponent as TwitterIcon } from "../assets/svgs/twitter-icon.svg";
import useWindowDimensions from "../hooks/useWindowDimensions";

const SocialLinks = () => {

  const { height, width } = useWindowDimensions();
  return (
    <header style={{ width }} className="socialLinks">
      <div className="navlink">
        <a href="https://www.instagram.com/bigrecordsusa/">
          <InstagramIcon className="navIcon" fill="white"/>
        </a>
      </div>
      <div className="navlink">
        <a href="https://twitter.com/bigrecordsusa">
          <TwitterIcon className="navIcon" fill="white" />
        </a>
      </div>
    </header>
  );
};

export default SocialLinks;
