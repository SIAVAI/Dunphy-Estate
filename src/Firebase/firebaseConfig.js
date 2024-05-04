// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLxEJSHii6ZM5i7CoWDQYjV9RoNH09DMQ",
  authDomain: "dunphyestate-8c67f.firebaseapp.com",
  projectId: "dunphyestate-8c67f",
  storageBucket: "dunphyestate-8c67f.appspot.com",
  messagingSenderId: "368166710718",
  appId: "1:368166710718:web:d4f37afae0d347b8cd1def"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;