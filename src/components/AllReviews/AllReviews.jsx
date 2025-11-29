import React, { use, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useLoaderData } from "react-router";
import ReviewCard from "../ReviewCard/ReviewCard";
import { AuthContext } from "../../Contexts/AuthContext/AuthContext";

const AllReviews = () => {
  const { loading } = use(AuthContext);

  const allReview = useLoaderData();

  const [allReviews,setReviews]= useState(allReview);

  if (loading) {
    return (
      <span className="skeleton skeleton-text">Wait a sec data loading...</span>
    );
  }

  const handleSearch=(e)=>{

    e.preventDefault();
    const searchText=e.target.search.value;

    if(loading){
        return <div>loading....</div>
    }
    fetch(`http://localhost:3000/search?search=${searchText}`)
    .then(res=> res.json())
    .then(data=>{
        console.log(data);
        setReviews(data)
    })
  }

  return (
    <div className="my-10">
      <div>

        <form onSubmit={handleSearch}>
            <div className="searchBox my-5 mx-auto">
          <input
            className="border-none p-2 rounded-l-2xl"
            type="text"
            name="search"
            placeholder="Search here"
          />
          <button className="searchButton ml-3 pl-3">
            <FaSearch className="w-8 h-4" />
          </button>
        </div>
        </form>

      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {allReviews.map((reviews) => (
          <ReviewCard key={reviews._id} review={reviews}></ReviewCard>
        ))}
      </div>
    </div>
  );
};

export default AllReviews;
