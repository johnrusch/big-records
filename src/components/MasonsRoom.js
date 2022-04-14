import React, { useEffect, useState } from "react";
import useWindowDimensions from "../hooks/useWindowDimensions";
import { ReactComponent as Volume } from "../assets/svgs/volume.svg";
import { ReactComponent as VolumeMute } from "../assets/svgs/volume-mute.svg";

const MasonsRoom = () => {
    const [audioMuted, setAudioMuted] = useState(true);

    const { height, width } = useWindowDimensions();
    
    const renderVolumeIcon = () => {
        if (audioMuted) {
            return <VolumeMute className="volumeMuted" fill="black" />;
        } else {
            return <Volume className="volume" fill="black" />;
        }
    };

    const toggleAudioMuted = () => {
        const audioElement = document.getElementById("audioElement");
        if (audioElement.paused) audioElement.play();
        setAudioMuted(!audioMuted);
    };


    useEffect(() => {
    
    }, []);

  return (
    <div className="masonsRoom">
      <audio id="audioElement" loop autoPlay muted={audioMuted}>
        <source
          src="http://35.165.227.26:8000/masons_room"
          type="audio/mpeg"
        />
      </audio>
      {/* <iframe src="http://35.165.227.26:8000/masons_room" allow="autoplay" style={{ display: 'none' }} title="mason's mix"/> */}
      <div style={{ height }} className="masonsRoomBackground">
        <video autoPlay loop muted>
          <source
            src="https://big-records.s3.us-west-2.amazonaws.com/assets/Calmmovie.mp4"
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

export default MasonsRoom;
