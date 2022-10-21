// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getDatabase} from 'firebase/database'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC1li_VZp0mBaKy03RB-AuNNnEJXSN89qI",
  authDomain: "fapesjr2022.firebaseapp.com",
  projectId: "fapesjr2022",
  storageBucket: "fapesjr2022.appspot.com",
  messagingSenderId: "172722050915",
  appId: "1:172722050915:web:2cf8b94be12ff6b9352556",
  measurementId: "G-G29VPN6T11"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
export {db}