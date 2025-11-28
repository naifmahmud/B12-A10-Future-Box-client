import React, { use } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Contexts/AuthContext/AuthContext';
import { useLoaderData } from 'react-router';

const EditReview = () => {
  const data= useLoaderData();
  const editData= data.result;
  console.log(editData);
  

  const {loading}=use(AuthContext);

    const handleEditReview=(e)=>{

          e.preventDefault();

          if(loading){
            return loading
          }
  
          const dataEdit={
              food_name: e.target.foodName.value,
              photo: e.target.foodURL.value,
              restaurant_name: e.target.restaurantName.value,
              date: new Date().toLocaleString("en-US",{timeZone:"Asia/Dhaka"}),
          }
  
          fetch(`http://localhost:3000/allReviews/${editData._id}`,{
              method:'PATCH',
              headers:{
                  "Content-Type":"application/json"
              },
              body:JSON.stringify(dataEdit)
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
            <h1 className="logo-text p-2">Edit Review</h1>
          </div>
          <form onSubmit={handleEditReview}>
            <fieldset className="fieldset">
  
              <label className="label">Food Name</label>
              <input type="text" name="foodName" defaultValue={editData.food_name} className="input" placeholder="Food Name" required />
  
              <label className="label">Food Image</label>
              <input type="text" name="foodURL" defaultValue={editData.photo} className="input" placeholder="https://exammple.jpg" required />
  
              <label className="label">Restaurant Name</label>
              <input
                type="text" name="restaurantName"
                className="input"
                placeholder="Restaurant Name" defaultValue={editData.restaurant_name} required
              />
  
              <button className="btn-1 btn-neutral mt-4">Edit Review</button>
            </fieldset>
          </form>
        </div>
      </div>
    );
};

export default EditReview;