import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as InstagramIcon } from "../assets/svgs/instagram-icon.svg";
import { ReactComponent as TwitterIcon } from "../assets/svgs/twitter-icon.svg";
import useWindowDimensions from "../hooks/useWindowDimensions";

const SocialLinks = ({ children }) => {
  const renderChildren = () => {
    return React.Children.map(children, (component, index) => {
      const { link } = component.props;
      return (
        <div key={index} className="navlink">
          <a href={link}>{component}</a>
        </div>
      );
    });
  };

  console.log(React.Children);

  const { height, width } = useWindowDimensions();
  return (
    <header style={{ width }} className="socialLinks">
      {renderChildren()}
    </header>
  );
};

export default SocialLinks;
