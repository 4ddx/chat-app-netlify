import React from 'react'
import {auth} from "../firebase";
import { useAuthState } from 'react-firebase-hooks/auth';
import Signin from './Signin.jsx';
import LogOut from './LogOut';

const style = {
    nav: `bg-gray-800 h-19 flex justify-between items-center p-4`,
    heading: `text-white text-2xl`
}

function Navbar() {
   const [user] = useAuthState(auth);

  return (
    <div className={style.nav}>
        <h1 className={style.heading}>Chat App</h1>
   {user ? <LogOut/>: <Signin/>}

    </div>
  )
}

export default Navbar