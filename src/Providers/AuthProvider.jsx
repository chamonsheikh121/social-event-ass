import { createContext } from "react";
import PropTypes from "prop-types"
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword,GoogleAuthProvider, signInWithPopup   } from "firebase/auth";
import app from "../Services/Firebase.config";


export const AuthContext = createContext(null)
    const auth = getAuth(app)
    const provider = new GoogleAuthProvider();


const AuthProvider = ({children}) => {


    const createUserWEP =(email, password)=>{
        createUserWithEmailAndPassword(auth, email, password)
    }
    const loginWEP =(email, password)=>{
        signInWithEmailAndPassword (auth, email, password)
    }

    const signInGoogle=()=>{
        signInWithPopup(auth, provider)
    }

   

   const info =
    {
        createUserWEP,
        loginWEP,
        signInGoogle
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
