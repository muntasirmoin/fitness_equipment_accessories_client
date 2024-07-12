import React from "react";

const SuccessPage = () => {
  return (
    <div className="mt-15 mb-5">
      <div className="pt-12">
        <br />
      </div>
      <div className="">
        <div className="card lg:card-side bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://i.ibb.co/d6J58q1/Email-Messages-for-Order-Confirmation-Page-v3.png"
              alt="Album"
            />
          </figure>
          <div className="card-body">
            <div className="text-center">
              <h2 className="card-title font-extrabold text-green-700">
                You will get <br /> your product <br /> Within Seven days!
              </h2>
            </div>
          </div>
          <figure>
            <img src="https://i.ibb.co/x2c8y0w/success2.jpg" alt="Album" />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;
