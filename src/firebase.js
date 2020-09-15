import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCHjtfPOZ51O_2UTY-q8XROqB8nYPZ7FJA",
  authDomain: "clone-faeaf.firebaseapp.com",
  databaseURL: "https://clone-faeaf.firebaseio.com",
  projectId: "clone-faeaf",
  storageBucket: "clone-faeaf.appspot.com",
  messagingSenderId: "337419470412",
  appId: "1:337419470412:web:6adc5512fd963de9c916e9",
  measurementId: "G-ZXJVKQVHX6",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
