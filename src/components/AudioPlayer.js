import React, { useState, useRef, useEffect } from "react";
import { useAudio } from "../contexts/AudioContext";
import { BsArrowLeftShort } from "react-icons/bs";
import { BsArrowRightShort } from "react-icons/bs";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";
import styles from "./styles.module.css";
const AudioPlayer = () => {
  // const [isPlaying, setIsPlaying] = useState("");
  // const [duration, setDuration] = useState(0);
  /*use ref */
  const { audioPlayer } = useAudio();
  const { audioUrl } = useAudio();
  const { isPlaying } = useAudio();
  const { setIsPlaying } = useAudio();
  const { duration } = useAudio();
  const { currentTime } = useAudio();
  const { progressBar } = useAudio();
  const { changeRange } = useAudio();

  function togglePlayPause() {
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);
    if (!prevValue) {
      audioPlayer.current.play();
    } else {
      audioPlayer.current.pause();
    }
  }

  const calculateTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnedMinutes}:${returnedSeconds}`;
  };

  return (
    <div className={styles.audioPlayer}>
      <audio ref={audioPlayer} src={audioUrl} preload="metadata"></audio>

      <button onClick={togglePlayPause} className={styles.playPause}>
        {isPlaying ? <FaPause /> : <FaPlay className={styles.play} />}
      </button>
      {/*current time*/}

      <div className={styles.divProgressBar}>{calculateTime(currentTime)}</div>
      {/*progress bar*/}
      <div>
        <input
          type="range"
          className={styles.progressBar}
          defaultValue="0"
          ref={progressBar}
          onChange={changeRange}
        />
      </div>
      {/* duration */}
      <div className={styles.duration}>
        {!isPlaying && audioUrl
          ? "00:00"
          : !isNaN(duration) && calculateTime(duration)}
      </div>
    </div>
  );
};

export default AudioPlayer;
