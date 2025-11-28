import React, { useEffect, useState } from 'react';
import { AuthContext } from '../AuthContext/AuthContext';
import {createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
import {auth} from '../../firebase/firebase.config'

const googleProvider= new GoogleAuthProvider();

const AuthProvider = ({children}) => {

    const [user,setUser]=useState([]);
    const [loading,setLoading]=useState(true);

    const signInWithGoogle=()=>{
        return signInWithPopup(auth,googleProvider);
    }

    const createUserWithEmail=(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const signInWithEmail=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }

    const signOutUser=()=>{
        setLoading(true);
        return signOut(auth);
    }
    // console.log(user);
    

    useEffect(()=>{
        const unsubscribe= onAuthStateChanged(auth,(currenUser)=>{
            setUser(currenUser);
            setLoading(false);
        })
        return (()=>
            unsubscribe());
    },[])


    const userInfo={
        signInWithGoogle,
        createUserWithEmail,
        signInWithEmail,
        signOutUser,
        user,
        setUser,
        loading,
        setLoading
    }
    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;