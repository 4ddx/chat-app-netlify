// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDX313qERUH-RM224IWGcs9IW8etCecCQQ",
    authDomain: "chat-app-d494e.firebaseapp.com",
    projectId: "chat-app-d494e",
    storageBucket: "chat-app-d494e.appspot.com",
    messagingSenderId: "271395030243",
    appId: "1:271395030243:web:3b747e75faeb1801d271d6",
    measurementId: "G-LF1W4V34RN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
//eslint-disable-next-line
const analytics = getAnalytics(app);