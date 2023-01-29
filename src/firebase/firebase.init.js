// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: proccess.env.REACT_APP_apiKey,
  authDomain: proccess.env.REACT_APP_authDomain,
  projectId: proccess.env.REACT_APP_projectId,
  storageBucket: proccess.env.REACT_APP_storageBucket,
  messagingSenderId: proccess.env.REACT_APP_messagingSenderId,
  appId: proccess.env.REACT_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
