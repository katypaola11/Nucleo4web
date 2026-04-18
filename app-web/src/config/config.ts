// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";


const firebaseConfig = {
  apiKey: "AIzaSyDFyqs03TDxkUDx977K5RqTRI4hx1bva5U",
  authDomain: "mov3-f.firebaseapp.com",
  databaseURL: "https://mov3-f-default-rtdb.firebaseio.com",
  projectId: "mov3-f",
  storageBucket: "mov3.firebasestorage.app",
  messagingSenderId: "362008093276",
  appId: "1:36200809327:web:f1ece0acf65720beffc99",
  measurementId: "G-YESPFLRSVK"
};


const app = initializeApp(firebaseConfig);
export const db = getDatabase(app)
export const auth = getAuth(app)
