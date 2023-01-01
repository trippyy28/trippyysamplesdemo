import { useState } from "react";
import { useAudio } from "../contexts/AudioContext";
function VolumeControl() {
  const [volume, setVolume] = useState(1);
  const { audioPlayer } = useAudio();

  function handleVolumeChange(event) {
    setVolume(event.target.value);
    audioPlayer.current.volume = event.target.value;
  }
  return (
    <div>
      <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={volume}
        onChange={handleVolumeChange}
      />
    </div>
  );
}

export default VolumeControl;
