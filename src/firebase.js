// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA749a89COcxwplZwVrVtO5CHpulWLFnZI",
  authDomain: "chat-app-87024.firebaseapp.com",
  projectId: "chat-app-87024",
  storageBucket: "chat-app-87024.appspot.com",
  messagingSenderId: "233012251891",
  appId: "1:233012251891:web:b0259a1b75d94394b37b86"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)