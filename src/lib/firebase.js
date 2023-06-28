// const config = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_DATABASE_URL,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID,
//   measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
// };
const config = {
  apiKey: "AIzaSyD7fjE2toONwUbnZ5UP9Mtv4op7Ci_RQlY",
  authDomain: "trippyysamples.firebaseapp.com",
  projectId: "trippyysamples",
  storageBucket: "trippyysamples.appspot.com",
  messagingSenderId: "212952911971",
  appId: "1:212952911971:web:b393b72ac34790fe702856",
  measurementId: "G-30YNMPN9QS",
};

const firebase = window.firebase.initializeApp(config);
const { FieldValue } = window.firebase.firestore;

export { firebase, FieldValue };
