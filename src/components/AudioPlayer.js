import React, { useState } from "react";
import { useAudio } from "../contexts/AudioContext";

import "./audio.css";
const AudioPlayer = () => {
  const { audioUrl } = useAudio();

  return (
    <div id="audio-player-container">
      <audio src={audioUrl} controls="play"></audio>
    </div>
  );
};

export default AudioPlayer;
