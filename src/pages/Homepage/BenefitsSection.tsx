import React from "react";
import { Link } from "react-router-dom";

const BenefitsSection = () => {
  return (
    <>
      <div className="flex flex-col my-5">
        <hr
          style={{
            border: "none",
            height: "2px",
            backgroundImage: "linear-gradient(to right, #00FF00, #FFD700)",
            margin: "20px 0",
          }}
        />
        <h2 className="text-2xl font-bold text-center mb-5 text-green-500">
          Benefit
        </h2>
        <div className="flex flex-wrap justify-center">
          <div className="carousel carousel-end rounded-box">
            {/* 1 */}
            <div className="card card-side bg-base-100 shadow-xl">
              <figure>
                <img
                  src="https://i.ibb.co/MRrmrs9/chest-pres.webp"
                  alt="Movie"
                  style={{ width: 550, height: 300 }}
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">CHEST PRESS MACHINE</h2>
                <p>
                  If you’re looking for easy to use exercise equipment that
                  targets your upper body, then you should try out the chest
                  press machine.
                </p>
              </div>
            </div>
            {/* 2 */}
            <div className="card card-side bg-base-100 shadow-xl">
              <figure>
                <img
                  src="https://i.ibb.co/Bf1cqY4/cybex-vr2-chestpress-1-1.jpg"
                  alt="Movie"
                  style={{ width: 550, height: 300 }}
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">MUSCLES USED</h2>
                <p>
                  Using a chest press, you get specifically target and work out
                  your chest, biceps, back, deltoids and shoulders.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 2 */}
        <div className="flex flex-wrap justify-center">
          <div className="carousel carousel-end rounded-box">
            {/* 1 */}
            <div className="card card-side bg-base-100 shadow-xl">
              <figure>
                <img
                  src="https://i.ibb.co/zmVfsKS/buge-biceps-curl.jpg"
                  alt="Movie"
                  style={{ width: 550, height: 300 }}
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">CURL BENCH</h2>
                <p>
                  f you want to specifically focus on pumping up those biceps,
                  then you can perform isolated movements with a preacher curl
                  bench.
                </p>
              </div>
            </div>
            {/* 2 */} <hr />
            <div className="card card-side bg-base-100 shadow-xl mt-5">
              <figure>
                <img
                  src="https://i.ibb.co/s6vDrZx/olympic-flat-bench-600x600.jpg"
                  alt="Movie"
                  style={{ width: 550, height: 300 }}
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title"> BENCH PRESS</h2>
                <p>
                  The bench press is a popular type of gym equipment, especially
                  for those just starting to get into weight lifting.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BenefitsSection;
