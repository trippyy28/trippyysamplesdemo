import React, { useState, useRef, useEffect } from "react";
import { useAudio } from "../contexts/AudioContext";
import { BsArrowLeftShort } from "react-icons/bs";
import { BsArrowRightShort } from "react-icons/bs";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";
import "./audio.css";
const AudioPlayer = () => {
  // const [isPlaying, setIsPlaying] = useState("");
  const [duration, setDuration] = useState(0);
  /*use ref */
  const { audioPlayer } = useAudio();
  const { isPlaying } = useAudio();
  const { setIsPlaying } = useAudio();
  const { audioUrl } = useAudio();

  useEffect(() => {
    const seconds = Math.floor(audioPlayer.current.duration);
    setDuration(seconds);
  }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState]);

  const calculateTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnedMinutes}:${returnedSeconds}`;
  };

  const togglePlayPause = () => {
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);
    if (!prevValue) {
      audioPlayer.current.play();
    } else {
      audioPlayer.current.pause();
    }
  };
  return (
    <div
      // id="audio-player-container"
      className="audioPlayer"
    >
      <audio
        ref={audioPlayer}
        src={audioUrl}
        // controls="play"
        preload="metadata"
      ></audio>
      <button className="fowardBackward">
        30
        <BsArrowLeftShort />
      </button>
      <button onClick={togglePlayPause} className="playPause">
        {isPlaying ? <FaPause /> : <FaPlay className="play" />}
      </button>
      {/*current time*/}
      <button className="fowardBackward">
        30
        <BsArrowRightShort />
      </button>
      <div className="currentTime">0:00</div>
      {/*progress bar*/}
      <div>
        <input type="range" className="progressBar" />
      </div>
      {/* duration */}
      <div className="duration">
        {duration && !isNaN(duration) && calculateTime(duration)}
      </div>
    </div>
  );
};

export default AudioPlayer;
