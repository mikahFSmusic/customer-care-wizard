import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDsDk2c6gnegcse_NF2a6a6GZiOonc5EgE",
  authDomain: "maisonette-dev-d9027.firebaseapp.com",
  projectId: "maisonette-dev-d9027",
  storageBucket: "maisonette-dev-d9027.appspot.com",
  messagingSenderId: "490163261516",
  appId: "1:490163261516:web:3bb05b509110085505e4e9",
  measurementId: "G-TRZV56F4HP",
};

// const app = firebase.initializeApp({
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID,
//   measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
// });

const app = firebase.initializeApp(firebaseConfig);

export const auth = app.auth();
export default app;
