// import { seedDatabase } from "./seed";

const config = {
  apiKey: "AIzaSyD7fjE2toONwUbnZ5UP9Mtv4op7Ci_RQlY",
  authDomain: "trippyysamples.firebaseapp.com",
  projectId: "trippyysamples",
  storageBucket: "trippyysamples.appspot.com",
  messagingSenderId: "212952911971",
  appId: "1:212952911971:web:b393b72ac34790fe702856",
  measurementId: "G-30YNMPN9QS",
};
// seedDatabase(firebase);
const firebase = window.firebase.initializeApp(config);
const { FieldValue } = window.firebase.firestore;

export { firebase, FieldValue };
