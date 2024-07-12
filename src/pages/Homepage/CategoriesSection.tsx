import React from "react";
import { Link, useNavigate } from "react-router-dom";

const CategoriesSection = () => {
  const navigate = useNavigate();

  const handleLinkClick = (category: string) => {
    navigate("/products", { state: { category: category } });
  };

  return (
    <div className="flex flex-col my-5">
      <hr
        style={{
          border: "none",
          height: "2px",
          backgroundImage: "linear-gradient(to right, #00FF00, #FFD700)", // Replace colors with your gradient
          margin: "20px 0", // Adjust margin as needed
        }}
      />
      <h2 className="text-2xl font-bold text-green-500 text-center mb-5">
        Categories Section
      </h2>
      <div className="flex flex-wrap justify-between gap-4 my-5">
        {/* Card 1 */}
        <div className="card glass w-80">
          <figure>
            <img
              src="https://i.ibb.co/61VKQS1/s1.jpg"
              alt="car!"
              style={{ width: 350, height: 300 }}
            />
          </figure>
          <div className="card-body">
            <div className="card-actions justify-end">
              <button
                className="btn bg-[rgb(210,45,59)] text-white px-4 py-2 rounded-md hover:bg-[#420c16] transition-colors duration-300"
                onClick={() => handleLinkClick("Strength")}
              >
                Strength
              </button>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="card glass w-80">
          <figure>
            <img
              src="https://i.ibb.co/nj0vfkZ/a6.jpg"
              alt="car!"
              style={{ width: 350, height: 300 }}
            />
          </figure>
          <div className="card-body">
            <div className="card-actions justify-end">
              <button
                className="btn bg-[rgb(210,45,59)] text-white px-4 py-2 rounded-md hover:bg-[#420c16] transition-colors duration-300"
                onClick={() => handleLinkClick("MultiGym")}
              >
                MultiGym
              </button>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="card glass w-80">
          <figure>
            <img
              src="https://i.ibb.co/RTRzK9m/a9.jpg"
              alt="car!"
              style={{ width: 350, height: 300 }}
            />
          </figure>
          <div className="card-body">
            <div className="card-actions justify-end">
              <button
                className="btn bg-[rgb(210,45,59)] text-white px-4 py-2 rounded-md hover:bg-[#420c16] transition-colors duration-300"
                onClick={() => handleLinkClick("Treadmill")}
              >
                Treadmill
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoriesSection;
