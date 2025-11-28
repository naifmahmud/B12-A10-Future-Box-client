import React from "react";
import { MdOutlineStarHalf } from "react-icons/md";


const ReviewCard = ({ review }) => {
  console.log(review);
  const {
    food_name,
    photo,
    reviewer_name,
    restaurant_name,
    restaurant_location,
    rating,
  } = review;

  return (
    <div className="card bg-[#f8c0ab] w-96 shadow-2xl">
      <figure className="relative">
        <img src={photo} className="w-2xl h-50" />
        <button className="absolute top-2 right-2 btn btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2.5"
            stroke="currentColor"
            className="size-[1.2em]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
            />
          </svg>
        </button>
      </figure>
      <div className="card-body text-[#358386] font-bold">
        <h2 className="card-title text-2xl font-bold">{food_name}</h2>
        <div className="flex justify-between">
          <h4 className="text-base font-semibold text-white bg-[#ed9172]  rounded-2xl px-2">{restaurant_name}</h4>
          <h4 className="text-base font-semibold">{restaurant_location}</h4>
        </div>
        <div className="flex justify-between">
          <h5 className="text-base font-semibold text-white bg-[#ed9172]  rounded-2xl px-2">{reviewer_name}</h5>
          <h5 className="flex items-center text-base font-semibold rounded-2xl ">{rating}<span><MdOutlineStarHalf /></span></h5>
        </div>
        <div className="card-actions">
          <button className="btn-1 w-full">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
