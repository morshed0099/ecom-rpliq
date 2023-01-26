import React, { createContext, useEffect, useState} from 'react';
import app from '../firebase/firebase.config';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth'



export const userAuth=createContext()
const Authprovider = ({children}) => {
    const auth=getAuth(app)
    
    const [loader,setLoader]=useState(true)
    const [user,setUser]=useState('')


//    usercreate with email and password firebase 
    const createUserWithEmailPss=(email,password)=>{
        setLoader(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
// user login funtion     
    const loginUserWithEmail=(email,password)=>{
        setLoader(true)
      return  signInWithEmailAndPassword(auth,email,password)
    }
// user logout funtion 
    const logOut=()=>{
        return signOut(auth)
    }

    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,(currentUser)=>{
            setLoader(false)
            setUser(currentUser)
        }) 
        return ()=>unsubscribe()
    },[])

    // share user all info 
    const userInfo={
        setUser,
        setLoader,
        loader,
        user,
        loginUserWithEmail,
        createUserWithEmailPss,
        logOut,
       

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