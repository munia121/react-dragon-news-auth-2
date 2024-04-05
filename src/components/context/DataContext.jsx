/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../Firebase/firebase.config";

export const AuthContext = createContext(null)






const DataContext = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)


    const  createRegister = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    
    
    const loginForm = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    
    
    // onAuthStateChange
    useEffect(()=>{
        
        const unSubscribe = onAuthStateChanged(auth, currentUser=>{
            console.log('user in tha state changed', currentUser);
            setUser(currentUser);
            setLoading(false)
        })
        return () =>{
            unSubscribe();
        }
    },[])

    // logOut
    const LogOut = () =>{
        setLoading(true)
        return signOut(auth)
    }
    

    const authInfo = { user,createRegister, loginForm, LogOut,loading }



    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default DataContext;