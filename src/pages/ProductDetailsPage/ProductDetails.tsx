import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
// import { addToCart } from "../../store/cart/actions";

// working

import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cartSlice";
import { CartItem, Product } from "../../store/cart/types";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const ProductDetails = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const [products, setProducts] = useState<Product[]>([]);
  // const [singleProduct, setSingleProduct] = useState<Product>({
  //   _id: "",
  //   id: "",
  //   name: "",
  //   price: 0,
  //   description: "",
  //   imageUrl: "",
  //   category: "",
  //   stock: 0,
  // });

  // const handleAddToCart = (product) => {
  //   // onAddToCart(product, quantities[product.id] || 1);
  // };

  const handleAddToCart = (product: Product) => {
    console.log("working", product);
    if (product) {
      const cartItem: CartItem = {
        product: product,
        quantity: 1, // Default quantity, you can adjust this as needed
      };

      dispatch(addToCart(cartItem));

      // Show success message using SweetAlert
      Swal.fire({
        icon: "success",
        title: "Added to Cart",
        text: `${product.name} has been added to your cart.`,
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

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch(
        "https://fitness-equipment-accessories-server.vercel.app/products",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

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
    <div className="mt-15 mb-5">
      <Helmet>
        <title>Product | FitZone</title>
      </Helmet>
      <div className="pt-12">
        <br />
      </div>
      <div
        className="p-4"
        style={{
          border: "1px solid black",
          backgroundColor: "white",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
        }}
      >
        <div className="overflow-x-auto overflow-auto">
          <h1 className="font-bold text-4xl mb-2 text-center text-green-500">
            Products
          </h1>
          <div className="top-0 left-0 w-full max-w-screen-xl mx-auto bg-white shadow-lg mt-1">
            <table className="table w-full">
              <thead>
                <tr>
                  <th className="border text-gray-800 text-center px-4 py-2">
                    #
                  </th>
                  <th className="border text-gray-800 text-center px-4 py-2">
                    Image
                  </th>
                  <th className="border text-gray-800 text-center px-4 py-2">
                    Name
                  </th>
                  <th className="border text-gray-800 text-center px-4 py-2">
                    Category
                  </th>
                  <th className="border text-gray-800 text-center px-4 py-2">
                    Price
                  </th>
                  <th className="border text-gray-800 text-center px-4 py-2">
                    Stock
                  </th>
                  <th className="border text-gray-800 text-center px-4 py-2">
                    Description
                  </th>
                  <th className="border text-gray-800 text-center px-4 py-2">
                    Quantity
                  </th>
                  <th className="border text-gray-800 text-center px-4 py-2">
                    Add To Cart
                  </th>
                </tr>
              </thead>
              <tbody>
                {products.map((product, index) => (
                  <tr key={product._id}>
                    <td className="border px-4 py-2">{index + 1}</td>
                    <td className="border  text-center px-4 py-2">
                      <img
                        src={product.imageUrl}
                        alt={product.name}
                        className="h-12 w-12"
                      />
                    </td>
                    <td className="border text-center px-4 py-2">
                      {product.name}
                    </td>
                    <td className="border text-center px-4 py-2">
                      {product.category}
                    </td>
                    <td className="border text-center px-4 py-2">
                      ${product.price}
                    </td>
                    <td className="border text-center px-4 py-2">
                      {product.stock}
                    </td>
                    <td className="border text-center px-4 py-2">
                      {product.description}
                    </td>
                    <td className="border text-center px-4 py-2">1</td>
                    <td className="border text-center px-4 py-2">
                      {product.stock === 0 ? (
                        <button
                          className="btn btn-sm btn-outline btn-info"
                          disabled
                        >
                          Out of Stock
                        </button>
                      ) : (
                        <button
                          className="btn btn-sm btn-outline btn-info"
                          onClick={() => handleAddToCart(product)}
                        >
                          Add to Cart
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
