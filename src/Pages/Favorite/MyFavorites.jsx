import React, { use, useEffect, useState } from 'react';
import ReviewCard from '../../components/ReviewCard/ReviewCard';
import { AuthContext } from '../../Contexts/AuthContext/AuthContext';

const MyFavorites = () => {

      const { user, loading } = use(AuthContext);
      const [myReview,setMyReview] = useState([]);
   
    useEffect(() => {
        fetch(`http://localhost:3000/favorites?email=${user.email}`)
          .then((res) => res.json())
          .then((data) => {
            setMyReview(data);
          });
      }, [user]);
    
      if (loading) {
        return <div></div>;
      }
    
    return (
        <div className='my-10'>
          <h1 className='text-2xl text-center my-5 font-bold text-[#358386]'>My Favorites Page</h1>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {myReview.map(review=><ReviewCard key={review._id} review={review}></ReviewCard>)}
            </div>
            
        </div>
    );
};

export default MyFavorites;