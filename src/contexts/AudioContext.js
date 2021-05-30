import React, { useState, useContext } from "react";

const AudioContext = React.createContext();

export function useAudio() {
  return useContext(AudioContext);
}
export function AudioProvider({ children }) {
  let [audioUrl, setAudioUrl] = useState("");
  function playAudio(e) {
    setAudioUrl(e);
  }

  const value = {
    audioUrl,
    playAudio,
  };
  return (
    <AudioContext.Provider value={value}>{children}</AudioContext.Provider>
  );
}
