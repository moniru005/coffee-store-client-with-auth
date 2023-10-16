// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxlmDxP_YBovBbLOKSyTgXcrMIJaeYxsY",
  authDomain: "coffee-store-6e849.firebaseapp.com",
  projectId: "coffee-store-6e849",
  storageBucket: "coffee-store-6e849.appspot.com",
  messagingSenderId: "622117809231",
  appId: "1:622117809231:web:7dfe85088d4dffedae4e3a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;