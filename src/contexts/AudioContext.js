import React, { useState, useContext, useRef, useEffect } from "react";

const AudioContext = React.createContext();

export function useAudio() {
  return useContext(AudioContext);
}
export function AudioProvider({ children }) {
  let [audioUrl, setAudioUrl] = useState(null);
  const [duration, setDuration] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const audioPlayer = useRef();
  const progressBar = useRef();

  useEffect(() => {
    const seconds = Math.floor(audioPlayer.current.duration);
    setDuration(seconds);
    progressBar.current.max = seconds;
  }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState]);

  const togglePlayPauseAndAddAudio = (e) => {
    setAudioUrl(e);
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);
    if (!prevValue) {
      audioPlayer.current.play();
    } else {
      audioPlayer.current.pause();
    }
  };
  const changeRange = () => {
    audioPlayer.current.currentTime = progressBar.current.value;
    progressBar.current.style.setProperty(
      "--seek-before-width",
      `${(progressBar.current.value / duration) * 100}%`
    );
    setCurrentTime(progressBar.current.value);
  };

  const value = {
    audioUrl,
    togglePlayPauseAndAddAudio,
    isPlaying,
    audioPlayer,
    setIsPlaying,
    duration,
    currentTime,
    progressBar,
    changeRange,
  };
  return (
    <AudioContext.Provider value={value}>{children}</AudioContext.Provider>
  );
}
