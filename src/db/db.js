import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {

};

initializeApp(firebaseConfig);

const db = getFirestore()

export default db