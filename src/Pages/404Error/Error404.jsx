import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import erro404 from '../../assets/404error.jpg'
import { useNavigate } from 'react-router';

const Error404 = () => {
    const navigate=useNavigate();

    return (
    
           <div className='relative'>
            <img src={erro404} className=' w-full h-100' alt="" />
            <button className='absolute left-80 top-60 btn-1' onClick={()=>{navigate('/')}}>Back to Home</button>
           </div>
    );
};

export default Error404;