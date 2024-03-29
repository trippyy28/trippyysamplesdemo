import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const config = {
  apiKey: "AIzaSyD7fjE2toONwUbnZ5UP9Mtv4op7Ci_RQlY",
  authDomain: "trippyysamples.firebaseapp.com",
  projectId: "trippyysamples",
  storageBucket: "trippyysamples.appspot.com",
  messagingSenderId: "212952911971",
  appId: "1:212952911971:web:b393b72ac34790fe702856",
  measurementId: "G-30YNMPN9QS",
};

const firebaseApp = initializeApp(config);
const auth = getAuth(firebaseApp);
const firestore = getFirestore(firebaseApp); // Firestore initialization

export { firebaseApp as firebase, auth, firestore }; // Updated the name for clarity
