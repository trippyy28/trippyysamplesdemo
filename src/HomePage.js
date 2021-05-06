import React from "react";
import { useAuth } from "./contexts/AuthContext";

const HomePage = () => {
  const { currentUser } = useAuth();
  return (
    <div>
      <h1>Trippy Samples!</h1>
      {currentUser ? <p>Hello! {currentUser.email}</p> : null}
      <h3>
        We Make Sample Packs and Ableton Templets inspired by Video Games!
      </h3>
    </div>
  );
};

export default HomePage;
