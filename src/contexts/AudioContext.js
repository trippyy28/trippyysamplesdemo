import React, { useState, useContext, useRef } from "react";

const AudioContext = React.createContext();

export function useAudio() {
  return useContext(AudioContext);
}
export function AudioProvider({ children }) {
  let [audioUrl, setAudioUrl] = useState("");
  const [isPlaying, setIsPlaying] = useState("");
  const audioPlayer = useRef();
  // function playAudio(e) {
  //   setAudioUrl(e);
  // }
  const togglePlayPause = (e) => {
    setAudioUrl(e);
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);
    if (!prevValue) {
      audioPlayer.current.play();
    } else {
      audioPlayer.current.pause();
    }
  };

  const value = {
    audioUrl,
    // playAudio,
    togglePlayPause,
    isPlaying,
    audioPlayer,
  };
  return (
    <AudioContext.Provider value={value}>{children}</AudioContext.Provider>
  );
}
