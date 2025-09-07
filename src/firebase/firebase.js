// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; // import Firestore

const firebaseConfig = {
  apiKey: "AIzaSyD__K6z8hKpDTrDWupfZ_c5R3QSVDv02m0",
  authDomain: "ndcdentalcare-fdf24.firebaseapp.com",
  projectId: "ndcdentalcare-fdf24",
  storageBucket: "ndcdentalcare-fdf24.firebasestorage.app",
  messagingSenderId: "+916374926377",
  appId: "1:852944890076:web:fecd65d0fa4486753d2c19",
  measurementId: "G-KK9KFESXV3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app); // export Firestore
