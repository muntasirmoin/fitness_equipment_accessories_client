import React from "react";
import { Link } from "react-router-dom";

const BenefitsSection = () => {
  return (
    <>
      <div className="flex flex-col my-5">
        <h2 className="text-2xl font-bold text-center mb-5">Benefit Section</h2>
        <div className="flex flex-wrap justify-center">
          <div className="carousel carousel-end rounded-box">
            {/* 1 */}
            <div className="card card-side bg-base-100 shadow-xl">
              <figure>
                <img
                  src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
                  alt="Movie"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">New movie is released!</h2>
                <p>Click the button to watch on Jetflix app.</p>
              </div>
            </div>
            {/* 2 */}
            <div className="card card-side bg-base-100 shadow-xl">
              <figure>
                <img
                  src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
                  alt="Movie"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">New movie is released!</h2>
                <p>Click the button to watch on Jetflix app.</p>
              </div>
            </div>
            {/* 3 */}
            <div className="card card-side bg-base-100 shadow-xl">
              <figure>
                <img
                  src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
                  alt="Movie"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">New movie is released!</h2>
                <p>Click the button to watch on Jetflix app.</p>
              </div>
            </div>
            {/* 4 */}
            <div className="card card-side bg-base-100 shadow-xl">
              <figure>
                <img
                  src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
                  alt="Movie"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">New movie is released!</h2>
                <p>Click the button to watch on Jetflix app.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BenefitsSection;
