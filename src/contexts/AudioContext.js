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
  const animationRef = useRef();

  useEffect(() => {
    const seconds = Math.floor(audioPlayer.current.duration);
    setDuration(seconds);
    progressBar.current.max = seconds;
  }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState]);

  async function togglePlayPauseAndAddAudio(e) {
    await setAudioUrl(e);
    const prevValue = isPlaying;
    await setIsPlaying(!prevValue);
    if (!prevValue) {
      audioPlayer.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying);
    } else {
      audioPlayer.current.pause();
      cancelAnimationFrame(animationRef.current);
    }
  }

  const whilePlaying = () => {
    progressBar.current.value = audioPlayer.current.currentTime;
    changePlayerCurrentTime();
    animationRef.current = requestAnimationFrame(whilePlaying);
  };

  const changeRange = () => {
    audioPlayer.current.currentTime = progressBar.current.value;
    changePlayerCurrentTime();
  };

  const changePlayerCurrentTime = () => {
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
    whilePlaying,
  };
  return (
    <AudioContext.Provider value={value}>{children}</AudioContext.Provider>
  );
}
