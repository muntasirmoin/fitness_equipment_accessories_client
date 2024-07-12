import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import FeaturedProductsCard from "./FeaturedProductsCard";

interface Product {
  _id?: string;

  name: string;
  price: number;
  description: string;
  imageUrl: string;
  category: string;
  stock: number;
}

const FeaturedProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch("http://localhost:3000/products", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
        setProducts(data);
      } else {
        console.error("Failed to fetch products");
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  return (
    <>
      <hr
        style={{
          border: "none",
          height: "2px",
          backgroundImage: "linear-gradient(to right, #00FF00, #FFD700)", // Replace colors with your gradient
          margin: "20px 0", // Adjust margin as needed
        }}
      />
      <div className="flex flex-col my-5">
        <h2 className="text-2xl font-bold text-green-500 text-center mb-5">
          Featured Products
        </h2>

        <div className="grid grid-cols-3 gap-4 border-2 border-gray-200  p-2 mb-2">
          {products.slice(0, 3).map((product) => (
            <FeaturedProductsCard key={product._id} product={product} />
          ))}
        </div>

        <Link
          to="/products"
          className="btn bg-[rgb(210,45,59)] mt-1 text-white px-4 py-2 rounded-2xl hover:bg-[#420c16] transition-colors duration-300"
        >
          Explore More
        </Link>
      </div>
    </>
  );
};

export default FeaturedProducts;
