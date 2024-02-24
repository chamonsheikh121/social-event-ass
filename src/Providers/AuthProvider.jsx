import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types"
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import app from "../Services/Firebase.config";


export const AuthContext = createContext(null)
const auth = getAuth(app)
const provider = new GoogleAuthProvider();



const AuthProvider = ({ children }) => {


    const [user, setUser] = useState(null)
    const [loading, setLoading] =useState(true)


    const createUserWEP = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const loginWEP = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signInGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }


    useEffect(() => {
        onAuthStateChanged(auth, currentUser => {
            console.log(currentUser);
            setUser(currentUser)
            setLoading(false)
        })
    }, [])

    console.log(user);



    const info =
    {
        createUserWEP,
        loginWEP,
        signInGoogle,
        user,
        logOut,
        loading
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
