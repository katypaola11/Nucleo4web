// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyDFyqsO3TDxkUDx977K5RqTRI4hx1bva5U",
  authDomain: "mov3-f.firebaseapp.com",
  databaseURL: "https://mov3-f-default-rtdb.firebaseio.com",
  projectId: "mov3-f",
  storageBucket: "mov3-f.firebasestorage.app",
  messagingSenderId: "362008093276",
  appId: "1:362008093276:web:f1ece0acf65720b2effc99"
};



const app = initializeApp(firebaseConfig);
export const db = getDatabase(app)
export const auth = getAuth(app)
