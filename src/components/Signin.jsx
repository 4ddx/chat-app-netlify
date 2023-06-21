import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import React from 'react'
import GoogleButton from 'react-google-button'
import { auth } from "../firebase";

const style = {
    wrapper: `flex justify-center`
};

const googleSignIn = async () => {
    const provider = new GoogleAuthProvider();
   await signInWithPopup(auth, provider);

};

const Signin = () => {
  return (
    <div className={style.wrapper}>
        <GoogleButton onClick={googleSignIn}/>
    </div>
  )
};

export default Signin;