import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../../Contexts/AuthContext/AuthContext";
import { NavLink } from "react-router";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

const MyReview = () => {
  const { user, loading } = use(AuthContext);
  const [myReview, setMyReview] = useState([]);

  useEffect(() => {
    fetch(`https://local-food-lover-server-3000.vercel.app/myReview?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyReview(data);
      });
  }, [user]);

  if (loading) {
    return <div></div>;
  }

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://local-food-lover-server-3000.vercel.app/allReviews/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          })
          .catch((error) => {
            toast.error(error.message);
          });
      }
    });
  };

  return (
    <div>
      <div className="overflow-x-auto my-10 bg-[#8d8992] p-10 rounded-2xl">
        <h1 className="text-2xl font-bold text-[#085053] text-center">
          My Reviews
        </h1>
        <table className="table md:w-2xl lg:w-4xl rounded-2xl border-separate border-spacing-y-2">
          {/* head */}
          <thead>
            <tr>
              <th>Food Image & Name</th>
              <th>Restaurant Name & Posted Date</th>
            </tr>
          </thead>
          {myReview.map((review) => (
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
                      <div className="font-bold text-[#085053]">
                        {review.food_name}
                      </div>
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
                  <NavLink className="btn-1" to={`/edit-review/${review._id}`}>
                    Edit
                  </NavLink>
                </th>
                <th>
                  <button className="btn-1" onClick={()=>handleDelete(review._id)}>
                    Delete
                  </button>
                </th>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default MyReview;
