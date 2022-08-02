// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPOum3ONKIE71kAsULRvtFbrbqy1AqZhQ",
  authDomain: "crypto-86919.firebaseapp.com",
  projectId: "crypto-86919",
  storageBucket: "crypto-86919.appspot.com",
  messagingSenderId: "84884395711",
  appId: "1:84884395711:web:0acd1c876cfdc0733b580a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;