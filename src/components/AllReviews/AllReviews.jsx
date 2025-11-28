import React from 'react';
import { useLoaderData } from 'react-router';
import ReviewCard from '../ReviewCard/ReviewCard';

const AllReviews = () => {

    const allReview=useLoaderData();
    // console.log(allReview);
    

    return (
        <div className='my-10'>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {allReview.map(review=><ReviewCard key={review._id} review={review}></ReviewCard>)}
            </div>
        </div>
    );
};

export default AllReviews;