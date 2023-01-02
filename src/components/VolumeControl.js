import { useState } from "react";
import { useAudio } from "../contexts/AudioContext";
import styles from "../css/volumeControl.module.css";
function VolumeControl() {
  const [volume, setVolume] = useState(1);
  const { audioPlayer } = useAudio();

  function handleVolumeChange(event) {
    setVolume(event.target.value);
    audioPlayer.current.volume = event.target.value;
  }
  return (
    <div className={styles.vol}>
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
