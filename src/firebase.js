// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGVub11l4ow3NCVWmNlf0PJ-TfMoDcRds",
  authDomain: "marve-forte.firebaseapp.com",
  databaseURL: "https://marve-forte-default-rtdb.firebaseio.com",
  projectId: "marve-forte",
  storageBucket: "marve-forte.appspot.com",
  messagingSenderId: "776770718954",
  appId: "1:776770718954:web:10fd8bd71a9f3e2182db93",
  measurementId: "G-RS75DBSW05"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
 export default app