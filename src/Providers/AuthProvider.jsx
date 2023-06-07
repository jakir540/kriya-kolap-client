import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import { getAuth } from "firebase/auth";

export const AuthContext = createContext()


const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();


const AuthProvider = ({children }) => {
    const [user,setUser] = useState('')
    const [loading,setLoading] = useState(true)


const createUser = (email,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
}

const signIn =(email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
}

const googleSignIn =()=>{
    return signInWithPopup(auth,googleProvider)
}

const logOut =()=>{
    return signOut(auth)
}

useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth ,(currentUser) =>{
        setUser(currentUser)
        setLoading(false)
    })
    return ()=>{
        return unsubscribe()
    }
},[])

    const authInfo={
        user,
        createUser,
        loading,
        signIn,
        googleSignIn,
        logOut
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;