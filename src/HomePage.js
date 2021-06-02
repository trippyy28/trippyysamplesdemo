import React from "react";
import { useAuth } from "./contexts/AuthContext";
import TrippySamples from "./XD/TrippySamples.png";

const HomePage = () => {
  const { currentUser } = useAuth();
  var src = `https://youtube.com/embed/WTuC8vg3m_w?start=0&autoplay=0&modestbranding=1&autohide=1&showinfo=0&controls=0&mute-1`;
  return (
    <div>
      {currentUser ? <p>Hello! {currentUser.email}</p> : null}
      <iframe src={src} frameBorder="0" height="500%" width="50%"></iframe>
    </div>
  );
};

export default HomePage;
