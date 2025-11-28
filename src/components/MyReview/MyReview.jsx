import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../../Contexts/AuthContext/AuthContext";
import { NavLink } from "react-router";

const MyReview = () => {
  const { user, loading } = use(AuthContext);
  const [myReview, setMyReview] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/myReview?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyReview(data);
      });
  }, [user]);

  if (loading) {
    return <div></div>;
  }
  return (
    <div>
        <div className="overflow-x-auto my-10 bg-[#8d8992] p-10 rounded-2xl">
            <h1 className="text-2xl font-bold text-[#085053] text-center">My Reviews</h1>
          <table className="table md:w-2xl lg:w-4xl rounded-2xl border-separate border-spacing-y-2">
            {/* head */}
            <thead>
              <tr>
                <th>Food Image & Name</th>
                <th>Restaurant Name & Posted Date</th>
              </tr>
            </thead>
             {myReview.map((review) =>
              <tbody className="rounded-2xl border">
              
              <tr className="bg-[#b39d95] rounded-xl">
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img src={review.photo} alt={review.food_name} />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold text-[#085053]">{review.food_name}</div>
                    </div>
                  </div>
                </td>
                <td className="text-base font-semibold text-[#085053]">
                  {review.restaurant_name}
                  <br />
                  <span className="badge badge-ghost badge-sm text-[#085053]">
                    {review.date}
                  </span>
                </td>
                <th>
                  <NavLink className="btn-1" to={`/edit-review/${review._id}`}>Edit</NavLink>
                </th>
                <th>
                    <button className="btn-1">Delete</button>
                </th>
              </tr>
            </tbody>

             )}        
          </table>
        </div>
      
    </div>
  );
};

export default MyReview;
