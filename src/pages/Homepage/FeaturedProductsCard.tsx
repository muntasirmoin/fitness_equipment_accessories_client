import React from "react";
import { Link } from "react-router-dom";

const FeaturedProductsCard = ({ product }) => {
  return (
    <div className={`card max-w-sm rounded overflow-hidden shadow-lg`}>
      <figure>
        <img src={product?.photoURL} alt="image" className="w-full h-40" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product.name}</h2>

        <div className="card-actions justify-end">
          <Link to={`/product-details/${product._id}`}>
            <button
              className="btn btn-sm btn-outline btn-info"
              style={{ fontSize: "10px" }}
            >
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProductsCard;
