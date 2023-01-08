import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDtzss3Eo5GbAXXdYNrujw92D0jmRJamhY",
  authDomain: "greydive-challenge-d586c.firebaseapp.com",
  projectId: "greydive-challenge-d586c",
  storageBucket: "greydive-challenge-d586c.appspot.com",
  messagingSenderId: "320808573946",
  appId: "1:320808573946:web:f009ec8ff853e8935f2243",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
