import React, { use } from "react";
import { AuthContext } from "../../Contexts/AuthContext/AuthContext";
import { toast } from "react-toastify";

const Addreview = () => {

    const {user}= use(AuthContext);

    



    const handleAddReview=(e)=>{
        e.preventDefault();
        const ratings=e.target.rating.value;

        const formData={
            food_name: e.target.foodName.value,
            photo: e.target.foodURL.value,
            restaurant_name: e.target.restaurantName.value,
            restaurant_location: e.target.location.value,
            rating: Number(ratings),
            description: e.target.description.value,
            reviewer_name:e.target.reviewer_name.value,
            user_email:user.email,
            date: new Date(),
            Favorites:0
        }

        fetch('http://localhost:3000/allReviews',{
            method:'POST',
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(formData)
        })
        .then(res=> res.json())
        .then(data=> {
            console.log(data);
        })
        .catch(error=>{
            toast.error(error.message);
        })
    

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
            <label className="label">Reviewer Name</label>
            <input type="text" name="reviewer_name" className="input" placeholder="Reviewer Name" required />

            <label className="label">Food Name</label>
            <input type="text" name="foodName" className="input" placeholder="Food Name" required />

            <label className="label">Food Image</label>
            <input type="text" name="foodURL" className="input" placeholder="https://exammple.jpg" required />

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
