import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { firestore, firebase, auth } from "./lib/firebase";
import FirebaseContext from "./contexts/firebase";
ReactDOM.render(
  <FirebaseContext.Provider value={{ firebase, firestore, auth }}>
    <App />
  </FirebaseContext.Provider>,
  document.getElementById("root")
);
