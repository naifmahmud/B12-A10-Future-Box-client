import React, { use } from 'react';
import { AuthContext } from '../../Contexts/AuthContext/AuthContext';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({children}) => {
    
    const {user,loading}=use(AuthContext);

    const location= useLocation();
    console.log(location);


    if(loading){
        return <span className="skeleton skeleton-text">Thanks for your patience.....</span>
    }

    if(user){
        return children
    }
    else{
        return <Navigate state={location?.pathname} to="/login"></Navigate>
    }
    
   
};

export default PrivateRoute;