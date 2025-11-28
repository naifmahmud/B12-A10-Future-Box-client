import React from "react";
import { MdOutlineStarHalf } from "react-icons/md";
import { useLoaderData } from "react-router";

const ReviewDetails = () => {
  const detailReview = useLoaderData();
  const review = detailReview.result;

  const {
    food_name,
    photo,
    reviewer_name,
    restaurant_name,
    restaurant_location,
    rating,
    description
  } = review;

  return (
    <div className="my-10 p-5">
        <h1></h1>
      <div className="flex flex-col md:flex-row card card-side shadow-sm p-5 bg-[#e7dedb]">
        <figure>
          <img src={photo} className="md:w-2xl h-50 md:h-80 rounded-xl" alt="" />
        </figure>

        <div className="card-body text-[#358386]  ">
          <h2 className="card-title  font-bold">{food_name}</h2>
          <div className="flex justify-between">
          <h4 className="text-base font-semibold text-white bg-[#ed9172]  rounded-2xl px-2">{restaurant_name}</h4>
          <h4 className="text-base font-semibold">{restaurant_location}</h4>
        </div>
          <div className="flex justify-between">
          <h5 className="text-base font-semibold text-white bg-[#ed9172]  rounded-2xl px-2">{reviewer_name}</h5>
          <h5 className="flex items-center text-base font-semibold rounded-2xl ">{rating}<span><MdOutlineStarHalf /></span></h5>
        </div>
          <div>
            <h5>Description</h5>
            <p className="w-2xs">{description}</p>
          </div>
      </div>
          </div>
            <button className="btn-1 w-full">Add To Cart</button>
        </div>
     
  );
};

export default ReviewDetails;
