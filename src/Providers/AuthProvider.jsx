import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types"
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword,GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut   } from "firebase/auth";
import app from "../Services/Firebase.config";


export const AuthContext = createContext(null)
    const auth = getAuth(app)
    const provider = new GoogleAuthProvider();


const AuthProvider = ({children}) => {


    const [user, setUser] =useState(null)


    const createUserWEP =(email, password)=>{
        createUserWithEmailAndPassword(auth, email, password)
    }
    const loginWEP =(email, password)=>{
        signInWithEmailAndPassword (auth, email, password)
    }

    const signInGoogle=()=>{
        signInWithPopup(auth, provider)
    }

    const logOut=()=>{
        signOut(auth)
    }


    useEffect(()=>{
        onAuthStateChanged(auth, currentUser=>{
            console.log("observing current user", currentUser);
            setUser(currentUser)
        })
    },[])

    console.log(user);

   

   const info =
    {
        createUserWEP,
        loginWEP,
        signInGoogle,
        user,
        logOut
    }

    return (

        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
        
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
    children: PropTypes.node
}
