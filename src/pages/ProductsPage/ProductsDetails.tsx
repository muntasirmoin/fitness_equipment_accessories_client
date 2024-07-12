import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
// import { addToCart } from "../../store/cart/actions";

import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cartSlice";
import { CartItem, Product } from "../../store/cart/types";
import Swal from "sweetalert2";

// main code

const ProductsDetails = () => {
  const { selectId } = useParams();
  const navigate = useNavigate();
  console.log(selectId);
  const dispatch = useDispatch();
  const [singleProduct, setSingleProduct] = useState<Product>({
    _id: "",
    id: "",
    name: "",
    price: 0,
    description: "",
    imageUrl: "",
    category: "",
    stock: 0,
  });

  // fetch(`http://localhost:3000/singleProduct/${selectId}`)
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/singleProduct/${selectId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        setSingleProduct(data);
      } else {
        console.error("Failed to fetch products");
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const handleAddToCart = () => {
    if (singleProduct) {
      const cartItem: CartItem = {
        product: singleProduct,
        quantity: 1, // Default quantity, you can adjust this as needed
      };

      dispatch(addToCart(cartItem));

      // Show success message using SweetAlert
      Swal.fire({
        icon: "success",
        title: "Added to Cart",
        text: `${singleProduct.name} has been added to your cart.`,
        showConfirmButton: false,
        timer: 1500, // Automatically close after 1.5 seconds
      }).then(() => {
        // Navigate to checkout page after SweetAlert is closed
        navigate("/cart");
      });
    } else {
      // Show error message using SweetAlert
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "No product to add to cart!",
      });
    }
  };

  if (!singleProduct) {
    return <div>Loading...</div>;
  }
  const { name, category, description, imageUrl, price, stock } =
    singleProduct as Product;

  return (
    <div className="mt-15 mb-5">
      <div className="pt-12">
        <br />
      </div>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg"
            alt="Album"
          />
        </figure>
        <div className="card-body">
          {/* 1 */}
          <div className="flex gap-4">
            {/* First Card */}
            <div className="card bg-white  w-96 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">Name!</h2>
                <div className="card-actions justify-center">
                  <p className="btn btn-success font-bold btn-outline">
                    {name}
                  </p>
                </div>
              </div>
            </div>

            {/* Second Card */}
            <div className="card bg-white  w-96 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">Category!</h2>
                <div className="card-actions justify-center">
                  <p className="btn btn-success font-bold text-white btn-outline">
                    {category}
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="flex gap-4">
            {/* three Card */}
            <div className="card bg-white  w-96 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">Price!</h2>
                <div className="card-actions justify-center">
                  <p className="btn btn-success font-bold text-white btn-outline">
                    {price}
                  </p>
                </div>
              </div>
            </div>

            {/* fourCard */}
            <div className="card bg-white  w-96 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">Stock!</h2>
                <div className="card-actions justify-center">
                  <p className="btn btn-success font-bold text-white btn-outline">
                    {stock}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="card bg-white mr-5 shadow-xl">
            <div className="card-actions justify-center">
              <p className="btn btn-success font-bold text-white btn-outline">
                {description}
              </p>
            </div>
          </div>
          <div className="card mr-5 ">
            <div className="card-actions justify-center">
              <button
                className="btn btn-success font-bold text-white btn-outline"
                disabled={stock === 0}
                onClick={handleAddToCart}
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsDetails;
