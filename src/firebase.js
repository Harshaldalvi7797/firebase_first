import * as firebase from "firebase";

let firebaseConfig = {
  apiKey: "AIzaSyAPiPrltvKeI1oLNNyHsK2fDXo4elKW7Ws",
  authDomain: "reactnotes-c6b63.firebaseapp.com",
  databaseURL: "https://reactnotes-c6b63.firebaseio.com",
  projectId: "reactnotes-c6b63",
  storageBucket: "reactnotes-c6b63.appspot.com",
  messagingSenderId: "949916058207",
  appId: "1:949916058207:web:16b4a781d272f6059fd1ea"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const database = firebase.database().ref("/usernotes");

export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
