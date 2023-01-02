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
  const isPlayingRef = useRef(false);
  const volumeBarRef = useRef(0.1);

  console.log(isPlaying, "current");
  console.log(audioUrl);

  // console.log(audioPlayer.current);

  useEffect(() => {
    const seconds = Math.floor(audioPlayer.current.duration);
    setDuration(seconds);
    progressBar.current.max = seconds;
  }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState]);

  useEffect(() => {
    audioPlayer.current.addEventListener("canplay", () => {
      console.log("canplay");
    });
    audioPlayer.current.addEventListener("canplaythrough", () => {
      if (isPlaying) {
        audioPlayer.current.play();
        animationRef.current = requestAnimationFrame(whilePlaying);
      }
      console.log("canplaythrough");
    });
    audioPlayer.current.addEventListener("playing", () => {
      console.log("playing");
      setIsPlaying(true);
    });

    audioPlayer.current.addEventListener("ended", () => {
      // when the song ends
      progressBar.current.value = 0;
      setIsPlaying(false);
    });

    if (!isPlaying) {
      audioPlayer.current.pause();
      cancelAnimationFrame(animationRef.current);
    } else {
      audioPlayer.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying);
    }
  }, [isPlaying]);

  // useEffect(() => {
  //   if (isPlaying) {
  //     audioPlayer.current.play();
  //     animationRef.current = requestAnimationFrame(whilePlaying);
  //   } else if (!isPlaying) {
  //     audioPlayer.current.pause();
  //     cancelAnimationFrame(animationRef.current);
  //   }
  // }, [isPlaying]);

  const togglePlayPauseAndAddAudio = (e) => {
    setAudioUrl(e);
    setIsPlaying((lastIsPlaying) => !lastIsPlaying);
  };

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
  };
  return (
    <AudioContext.Provider value={value}>{children}</AudioContext.Provider>
  );
}
