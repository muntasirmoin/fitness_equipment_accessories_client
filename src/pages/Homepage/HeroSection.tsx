import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: "url(https://i.ibb.co/hBfDQZf/hIcon.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">
            You are stronger than you think
          </h1>
          <p className="mb-5">
            Pushing through the pain, embracing the gain <br /> My body is my
            machine <br />
            Every rep counts, every effort matters
          </p>
          <Link
            to="/product-details"
            className="btn bg-[rgb(210,45,59)] text-white px-4 py-2 rounded-md hover:bg-[#420c16] transition-colors duration-300"
          >
            Buy Product
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
