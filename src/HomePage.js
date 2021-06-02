import React from "react";
import { useAuth } from "./contexts/AuthContext";
import TrippySamples from "./XD/TrippySamples.png";

const HomePage = () => {
  const { currentUser } = useAuth();
  return <div>{currentUser ? <p>Hello! {currentUser.email}</p> : null}</div>;
};

export default HomePage;
