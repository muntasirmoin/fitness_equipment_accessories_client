import React from "react";
import { Link } from "react-router-dom";

const CategoriesSection = () => {
  return (
    <div className="flex flex-col my-5">
      <h2 className="text-2xl font-bold text-center mb-5">
        Categories Section
      </h2>
      <div className="flex flex-wrap justify-between gap-4 my-5">
        {/* Card 1 */}
        <div className="card glass w-80">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="car!"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Life hack</h2>

            <div className="card-actions justify-end">
              <Link
                to="/"
                className="btn bg-[rgb(210,45,59)] text-white px-4 py-2 rounded-md hover:bg-[#420c16] transition-colors duration-300"
              >
                Select
              </Link>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="card glass w-80">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="car!"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Life hack</h2>

            <div className="card-actions justify-end">
              <Link
                to="/"
                className="btn bg-[rgb(210,45,59)] text-white px-4 py-2 rounded-md hover:bg-[#420c16] transition-colors duration-300"
              >
                Select
              </Link>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="card glass w-80">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="car!"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Life hack</h2>

            <div className="card-actions justify-end">
              <Link
                to="/"
                className="btn bg-[rgb(210,45,59)] text-white px-4 py-2 rounded-md hover:bg-[#420c16] transition-colors duration-300"
              >
                Select
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoriesSection;
