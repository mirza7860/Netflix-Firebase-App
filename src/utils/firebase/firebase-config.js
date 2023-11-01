import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAfq_406cLKG16t1H1XgFD4ikTqC-aMxkg",
  authDomain: "netflix-auth-7c8b6.firebaseapp.com",
  projectId: "netflix-auth-7c8b6",
  storageBucket: "netflix-auth-7c8b6.appspot.com",
  messagingSenderId: "890187146623",
  appId: "1:890187146623:web:a7b0fd45d1e12502c8664a",
  measurementId: "G-JCK1REHYD3",
};

const app = initializeApp(firebaseConfig);
export const FireAuth = getAuth(app);
