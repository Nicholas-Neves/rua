import React, { useRef, useState, useEffect } from "react";
import "./MusicPlayer.css";

const playlist = [
  {
    src: "/music/Police Truck.mp3",
    title: "Police Truck",
  },
];

const MusicPlayer = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="music-player">
      <div className="music-icon" onClick={togglePlay}>
        {isPlaying ? "❚❚" : "▶"}
      </div>
      <audio ref={audioRef} loop>
        <source src={playlist[0].src} type="audio/mpeg" />
      </audio>
    </div>
  );
};

export default MusicPlayer;
