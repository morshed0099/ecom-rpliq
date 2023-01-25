import React, { createContext, useState} from 'react';
import app from '../firebase/firebase.config';
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword} from 'firebase/auth'


export const userAuth=createContext()
const Authprovider = ({children}) => {
    const auth=getAuth(app)
    const [user,setUser]=useState('')

    const createUserWithEmailPss=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const loginUserWithEmail=(email,password)=>{
      return  signInWithEmailAndPassword(auth,email,password)
    }

    const userInfo={
        setUser,
        user,
        loginUserWithEmail,
        createUserWithEmailPss

    }
    return (
        <div>
            <userAuth.Provider value={userInfo}>
                {children}
            </userAuth.Provider>            
        </div>
    );
};

export default Authprovider;