/* eslint-disable react/prop-types */
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../../Firebase/firebaseConfig";
import { GoogleAuthProvider } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";

export const AuthContext = createContext(null);

const FirebaseProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  //Register with Email & Password
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Sign In with Email & Password
  const userSignIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //Google
  const googleProvider = new GoogleAuthProvider();
  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  };

  //Github
  const githubProvider = new GithubAuthProvider();
  const githubSignIn = () => {
    return signInWithPopup(auth, githubProvider);
  };

  //signOut
  const userSignOut = () => {
    setUser(null);
    signOut(auth);
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        console.log(user);
      }
    });
  }, []);

  const allValue = {
    createUser,
    userSignIn,
    googleSignIn,
    githubSignIn,
    userSignOut,
    user,
  };

  return (
    <AuthContext.Provider value={allValue}>{children}</AuthContext.Provider>
  );
};

export default FirebaseProvider;
