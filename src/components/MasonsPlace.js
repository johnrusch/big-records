import React, { useEffect, useState } from "react";
import useWindowDimensions from "../hooks/useWindowDimensions";
import { ReactComponent as Volume } from "../assets/svgs/volume.svg";
import { ReactComponent as VolumeMute } from "../assets/svgs/volume-mute.svg";
import { ReactComponent as LinkTree } from "../assets/svgs/linktree-white.svg";
import SocialLinks from "./SocialLinks";

const MasonsPlace = () => {
  const [audioMuted, setAudioMuted] = useState(true);
  const [audioElement, setAudioElement] = useState(
    document.getElementById("audioElement")
  );
  const [loading, setLoading] = useState(true);

  const { height, width } = useWindowDimensions();

  const renderVolumeIcon = () => {
    if (loading)
      return (
        <img
          src="https://big-records.s3.us-west-2.amazonaws.com/assets/loading.gif"
          alt="loading"
        />
      );

    if (audioMuted) {
      return <VolumeMute className="volumeMuted" fill="white" />;
    } else {
      return <Volume className="volume" fill="white" />;
    }
  };

  const toggleAudioMuted = () => {
    if (audioElement.paused) audioElement.play();
    setAudioMuted(!audioMuted);
  };

  useEffect(() => {
    const audioElement = document.getElementById("audioElement");
    setAudioElement(audioElement);
    audioElement.addEventListener("canplay", () => setLoading(false));
  }, [audioElement]);

  return (
    <div style={{ height, width }} className="masonsRoom">
      <SocialLinks>
        <LinkTree
          fill="white"
          className="navIcon"
          link="https://linktr.ee/clashplaids"
        />
      </SocialLinks>
      <audio id="audioElement" loop autoPlay muted={audioMuted}>
        <source src="https://icecast.pistachiovillage.link/masons_room" type="audio/mpeg" />
      </audio>
      <div className="masonsRoomBackground" style={{ height, width }}>
        <video autoPlay loop muted poster>
          <source
            src="https://big-records.s3.us-west-2.amazonaws.com/assets/editedMasonMovie.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <div className="volumeIcon" onClick={toggleAudioMuted}>
        {renderVolumeIcon()}
      </div>
    </div>
  );
};

export default MasonsPlace;
