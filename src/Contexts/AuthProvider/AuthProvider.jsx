import React from 'react';
import { AuthContext } from '../AuthContext/AuthContext';
import {GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
import {auth} from '../../firebase/firebase.config'

const googleProvider= new GoogleAuthProvider();

const AuthProvider = ({children}) => {

    const signInWithGoogle=()=>{
        return signInWithPopup(auth,googleProvider);
    }


    const userInfo={
        signInWithGoogle
    }
    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;