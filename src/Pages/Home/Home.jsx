import React from "react";
import slider1 from "../../assets/slider1.png";
import slider2 from "../../assets/slider2.png";
import Marquee from "react-fast-marquee";
import { NavLink, useLoaderData } from "react-router";
import ReviewCard from "../../components/ReviewCard/ReviewCard";

const Home = () => {
  const topReview = useLoaderData();

  return (
    <div className="bg-[#f0ebebe2]">
      {/* slider */}
      <Marquee speed={80} pauseOnHover={true}>
        {/* slider1 */}
        <section className="relative w-full mx-10">
          <img
            src={slider1}
            className="h-100 w-screen rounded-xl object-cover"
            alt=""
          />
          <div className="absolute text-center items-center top-40 left-1/8">
            <h4 className="text-white text-2xl font-bold w-3/4">
              LOCAL FOOD & RESTAURANT REVIEW PLATFORM
            </h4>

            <p className="text-white text-xl font-semibold w-3/4 border-t">
              A Great Way To Find, Share, And Review The Best Businesses In Town
            </p>
          </div>
        </section>

        {/* slider2 */}
        <section className="relative w-full">
          <img
            src={slider2}
            className="h-100 w-screen rounded-xl object-cover"
            alt=""
          />
          <div className="absolute text-center items-center top-40 left-1/3">
            <h4 className="text-white text-2xl font-bold w-2/4">
              A Great Way To Find, Share, And Review The Best Businesses In
              Town.
            </h4>
          </div>
        </section>
      </Marquee>

      {/* top rated reviews */}
      <section>
        <h1 className="text-2xl font-bold text-center mt-10 logo-text">Top SIX Review</h1>
        <div className="mx-10 lg:mx-20 space-x-0">
        <div className="my-10 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {topReview.map((review) => (
            <ReviewCard key={review._id} review={review}></ReviewCard>
          ))}
        </div>

        <div className="my-5 flex justify-center items-center">
          <NavLink className="btn-1  " to="/allReviews">
            All Review
          </NavLink>
        </div>
      </div>
      </section>

      {/* News Letter */}
      <section className="mx-20 my-10 bg-[#f0ebebe2]">

        <h1></h1>
        <div className="md:flex justify-around items-center gap-5 md:h-100  p-5">
          <figure className="p-2 rounded-2xl ">
            <img
              src="https://i.ibb.co.com/BHXXwTDV/pacake.jpg"
              alt=""
              className="md:w-3xl w-full h-70 rounded-2xl transform hover:translate-x-2 shadow-2xl"
            />
          </figure>

          <div>
            <h1 className="text-gray-500 text-2xl font-bold md:w-2xs mb-5">
              Fresh,Healthy,Delicious Pancake
            </h1>
            <p className="text-[#358386] text-base md:w-2xl">
              Warm pancakes draped in golden honey create a comforting harmony,
              each bite blending soft, airy texture with rich sweetness,
              inviting slow savoring and simple joy in every delicious, sticky
              mouthful.
            </p>
          </div>
        </div>

        <div className="md:flex justify-around items-center gap-5 md:h-100 bg-[#f0ebebe2] p-5">
          <div>
            <h1 className="text-gray-500 text-2xl font-bold md:w-2xs mb-5">
              Amazing Fish Florentine
            </h1>
            <p className="text-[#358386] text-base md:w-2xl">
              Fish Florentine is a refined, comforting dish featuring tender, flaky fish nestled atop a bed of creamy spinach. Simmered with garlic, herbs, and a light, velvety sauce, it delivers balanced richness and freshness. Its elegant presentation and gentle flavors make it a timeless favorite in both home kitchens and fine dining.
            </p>
          </div>

          <figure className="p-2 rounded-2xl ">
            <img
              src="https://i.ibb.co.com/cK6s4k84/dish.jpg"
              alt=""
              className="md:w-3xl w-full h-70 rounded-2xl transform hover:translate-y-1 shadow-2xl"
            />
          </figure>
        </div>
      </section>

      <section class="py-16 bg-white">
  <div class="text-center mb-12">
    <h2 class="text-4xl font-extrabold text-gray-900">
      Our <span class="text-[#358386]">Services</span>
    </h2>
  </div>

  <div class="max-w-7xl mx-auto grid grid-cols-2 gap-5">

    <div class="bg-green-50 border border-green-200 rounded-xl p-8 text-center shadow-sm hover:shadow-md transition">
      <img src="" alt="" />
      <h3 class="text-xl font-semibold text-gray-900">Best Food <span class="text-[#1b7478]">Review</span></h3>
      <p class="text-gray-600 mt-2">
        Indulge in vitality with 'Fresh from Nutrition'—where every bite revitalizes.
      </p>
    </div>

    <div class="bg-green-50 border border-green-200 rounded-xl p-8 text-center shadow-sm hover:shadow-md transition">
          <img src="" alt="" />
          <h3 class="text-xl font-semibold text-gray-900">Premium <span class="text-[#1b7478]">Quality Restaurant</span></h3>
      <p class="text-gray-600 mt-2">
        Experience culinary excellence with research for Premium Food With Rich Culture.where every bite reflects.
      </p>
    </div>

  </div>
</section>


    </div>
  );
};

export default Home;
