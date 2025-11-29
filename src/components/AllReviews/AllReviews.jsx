import React, { use } from 'react';
import { useLoaderData } from 'react-router';
import ReviewCard from '../ReviewCard/ReviewCard';
import { AuthContext } from '../../Contexts/AuthContext/AuthContext';

const AllReviews = () => {

    const {loading}=use(AuthContext);

    const allReview=useLoaderData();
    // console.log(allReview);
    
    if(loading){
        return <span className="skeleton skeleton-text">Wait a sec data loading...</span>
    }

    return (
        <div className='my-10'>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {allReview.map(reviews=><ReviewCard key={reviews._id} review={reviews}></ReviewCard>)}
            </div>
        </div>
    );
};

export default AllReviews;