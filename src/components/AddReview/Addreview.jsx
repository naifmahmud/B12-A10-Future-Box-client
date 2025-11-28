import React from "react";

const Addreview = () => {


    const handleAddReview=(e)=>{
        e.preventDefault();

        const foodName= e.target.foodName.value;
        const foodImage= e.target.foodURL.value;
        const restaurantName= e.target.restaurantName.value;
        const location= e.target.location.value;
        const rating= e.target.rating.value;
        const description= e.target.description.value;

        console.log({foodName,foodImage,restaurantName,location,rating,description});

        e.target.reset();
        
    }
  return (
    <div>
      <div className="card bg-[#ffe0d2] w-4xl max-w-sm shrink-0 shadow-2xl p-5 rounded-2xl my-10">
        <div className="text-2xl text-center">
          <h1 className="logo-text p-2">Add New Review</h1>
        </div>
        <form onSubmit={handleAddReview}>
          <fieldset className="fieldset">
            <label className="label">Food Name</label>
            <input type="text" name="foodName" className="input" placeholder="Food Name" required />

            <label className="label">Food Image</label>
            <input type="text" name="foodURL" className="input" placeholder="Food Image" required />

            <label className="label">Restaurant Name</label>
            <input
              type="text" name="restaurantName"
              className="input"
              placeholder="Restaurant Name" required
            />

            <label className="label">Location</label>
            <input type="text" name="location" className="input" placeholder="Location" required />

            <label className="label">Star Rating</label>
            <input type="text" name="rating" className="input" placeholder="Give Rating" required />

            <label className="label">Review Text</label>
            <textarea
              name="description"
              id=""
              className="p-3  rounded-2xl bg-base-200" required
              rows={4}
            ></textarea>

            <button className="btn-1 btn-neutral mt-4">Add Review</button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Addreview;
