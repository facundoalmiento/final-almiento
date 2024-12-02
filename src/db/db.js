import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCeY5aDsGcU4B4q8xDC4ZKbE944CO3vuq4",
    authDomain: "react-almiento.firebaseapp.com",
    projectId: "react-almiento",
    storageBucket: "react-almiento.firebasestorage.app",
    messagingSenderId: "219832658395",
    appId: "1:219832658395:web:b6826d1db9aad7e2ed9ffe",
    measurementId: "G-DC5KLK11RL"
  };
// Initialize Firebase
initializeApp(firebaseConfig);
const db = getFirestore()
export default db