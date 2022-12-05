// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC0AfhtAxfHaznQNfgXU4FDYjqdoHnBNqU",
  authDomain: "flyer-central.firebaseapp.com",
  projectId: "flyer-central",
  storageBucket: "flyer-central.appspot.com",
  messagingSenderId: "859490140440",
  appId: "1:859490140440:web:90c84c5e7be077a80c5e6d",
  measurementId: "G-2M0C509BQE"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };