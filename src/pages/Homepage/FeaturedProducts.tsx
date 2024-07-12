import React from "react";
import { Link } from "react-router-dom";

const FeaturedProducts = () => {
  return (
    <>
      <div className="flex flex-col my-5">
        <h2 className="text-2xl font-bold text-center mb-5">
          Featured Products
        </h2>
        <div className="flex flex-wrap justify-center">
          <div className="carousel carousel-end rounded-box">
            {/* 1 */}
            <div className="card glass w-80 ml-2">
              <figure>
                <img
                  src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                  alt="car!"
                />
              </figure>
            </div>
            {/* 2 */}
            <div className="card glass w-80 ml-2">
              <figure>
                <img
                  src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                  alt="car!"
                />
              </figure>
            </div>
            {/* 3 */}
            <div className="card glass w-80 ml-2">
              <figure>
                <img
                  src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                  alt="car!"
                />
              </figure>
            </div>
            {/* 4 */}
            <div className="card glass w-80 ml-2">
              <figure>
                <img
                  src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                  alt="car!"
                />
              </figure>
            </div>
          </div>
        </div>
        <Link
          to="/"
          className="btn bg-[rgb(210,45,59)] mt-1 text-white px-4 py-2 rounded-2xl hover:bg-[#420c16] transition-colors duration-300"
        >
          Explore More
        </Link>
      </div>
    </>
  );
};

export default FeaturedProducts;
