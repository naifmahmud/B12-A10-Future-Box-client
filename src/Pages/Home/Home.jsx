import React from "react";
import slider1 from "../../assets/slider1.png";
import slider2 from "../../assets/slider2.png";
import Marquee from "react-fast-marquee";

const Home = () => {
  return (
    <div>
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
            <h4 className="text-white text-2xl font-bold w-3/4">LOCAL FOOD & RESTAURANT REVIEW PLATFORM</h4>

            <p className="text-white text-xl font-semibold w-3/4 border-t">A Great Way To Find, Share, And Review The Best Businesses In Town</p>
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

      {/* NewsLetter */}
      <section>

      </section>

      <section>

      </section>
    </div>
  );
};

export default Home;
