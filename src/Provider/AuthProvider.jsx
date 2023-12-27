import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const AuthContext=createContext(null)

const auth = getAuth(app);
const AuthProvider = ({children}) => {
       
    const [user,setUser]=useState(null);
    const [loader,setLoader]=useState(true)
    const createUser=(email,password)=>{
        setLoader(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signIn=(email,password)=>{
        setLoader(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logOut=()=>{
        setLoader(true)
       return signOut(auth)
        .then()
        .catch()

    }

  useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth,currentUser=>{
        console.log('authchanged',currentUser);
        setUser(currentUser)
        setLoader(false)
    })
    return()=>{
        unsubscribe()
    }

  },[])

    const AuthInfo={user,createUser,logOut,signIn,loader}
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;