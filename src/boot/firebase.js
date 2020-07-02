// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/database";


 // Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyD9X-JU49XelKW4JTji6X4ADUfIe7wGEMw",
  authDomain: "holachat-c5a65.firebaseapp.com",
  databaseURL: "https://holachat-c5a65.firebaseio.com",
  projectId: "holachat-c5a65",
  storageBucket: "holachat-c5a65.appspot.com",
  messagingSenderId: "36617047635",
  appId: "1:36617047635:web:5b29d308f17ad3f94e40a6"
};
// Initialize Firebase
let firebaseApp = firebase.initializeApp(firebaseConfig);
let firebaseAuth = firebaseApp.auth()
let firebaseDb = firebaseApp.database()

export { firebaseAuth, firebaseDb }