import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  RecaptchaVerifier,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signInWithPhoneNumber,
  signOut,
  updateProfile,
} from "firebase/auth";
import firebaseApp from "../Firebase/Firebase.init";

export const AuthContext = createContext();

const auth = getAuth(firebaseApp);

const UserContext = ({ children }) => {
  const [show, setShow] = useState(false);
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(true);

  const SignUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const updateUserNameAndImage = async (name, photo) => {
    try {
      await updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photo,
      });
      console.log("Profile is Updated");
    } catch (Error) {
      console.error(Error);
    }
  };

  const emailVerification = async () => {
    try {
      await sendEmailVerification(auth.currentUser);
      setShow(true);
    } catch (error) {
      return console.error(error);
    }
  };

  const logOut = () => {
    return signOut(auth)
      .then(() => {
        console.log("Sign Out successfull");
      })
      .catch((error) => console.error(error));
  };

  //setUp Recapthar 
  const setUpRecaptcha =(number)=>{
    const recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {}, auth);
    recaptchaVerifier.render();
    return signInWithPhoneNumber(auth,number,recaptchaVerifier)
  }



  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if ( currentUser === null ||currentUser.emailVerified) {
          setUser(currentUser);
          console.log("OnAuthState change is:-", currentUser);
      }
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    SignUp,
    login,
    updateUserNameAndImage,
    emailVerification,
    setShow,
    show,
    user,
    logOut,
    loading,
    setUpRecaptcha
  };

  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default UserContext;
