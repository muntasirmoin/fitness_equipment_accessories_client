import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { removeFromCart, updateCartQuantity } from "../../store/cartSlice";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const CartPage: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleIncreaseQuantity = (productId: string) => {
    // Dispatch action to increase quantity
    const cartItem = {
      productId: productId,
      quantity: 1,
    };

    console.log("updateCartQuantity", cartItem);
    dispatch(updateCartQuantity(cartItem));
  };

  const handleDecreaseQuantity = (productId: string) => {
    const cartItem = {
      productId: productId,
      quantity: -1,
    };

    console.log("updateCartQuantity", cartItem);
    dispatch(updateCartQuantity(cartItem));
  };

  const handleRemoveItem = (productId: string) => {
    // if (
    //   window.confirm("Are you sure you want to remove this item from the cart?")
    // ) {
    //   // Dispatch action to remove item from cart
    //   dispatch(removeFromCart(productId));
    // }

    Swal.fire({
      title: "Product Remove?",
      text: "Are you sure you want to remove this product?",
      icon: "info",
      showCancelButton: true,
      confirmButtonText: "Yes, Remove",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Removed", "", "success");
        dispatch(removeFromCart(productId));
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire("Cancelled", "Your Remove process is cancelled", "error");
      }
    });
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  );
  const handleCheckout = () => {
    Swal.fire({
      title: "Proceed to Checkout?",
      text: "Are you sure you want to proceed to checkout?",
      icon: "info",
      showCancelButton: true,
      confirmButtonText: "Yes, Proceed",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Check Out Here", "", "success");
        navigate("/checkout");
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire("Cancelled", "Your checkout process was cancelled", "error");
      }
    });
  };

  return (
    <div className="mt-15 mb-5">
      <div className="pt-12">
        <br />
      </div>
      <div className="max-w-screen-xl mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
        <table className="table w-full">
          <thead>
            <tr>
              <th className="border px-4 py-2">Image</th>
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">Price</th>
              <th className="border px-4 py-2">Quantity</th>
              <th className="border px-4 py-2">Total</th>
              <th className="border px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.product._id}>
                <td className="border px-4 py-2">
                  <img
                    src={item.product.imageUrl}
                    alt={item.product.name}
                    className="h-12 w-12"
                  />
                </td>
                <td className="border px-4 py-2">{item.product.name}</td>
                <td className="border px-4 py-2">
                  ${item.product.price.toFixed(2)}
                </td>
                <td className="border px-4 py-2">
                  <div className="flex items-center">
                    <button
                      className="btn btn-sm btn-outline"
                      onClick={() => handleDecreaseQuantity(item.product._id)}
                      disabled={item.quantity === 0}
                    >
                      -
                    </button>
                    <span className="mx-2">{item.quantity}</span>
                    <button
                      className="btn btn-sm btn-outline"
                      onClick={() => handleIncreaseQuantity(item.product._id)}
                      disabled={item.quantity === item.product.stock}
                    >
                      +
                    </button>
                  </div>
                </td>
                <td className="border px-4 py-2">
                  ${(item.product.price * item.quantity).toFixed(2)}
                </td>
                <td className="border px-4 py-2">
                  <button
                    className="btn btn-sm btn-outline btn-error"
                    onClick={() => handleRemoveItem(item.product._id)}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mt-4">
          <h2 className="text-xl font-bold">
            Total Price: ${totalPrice.toFixed(2)}
          </h2>
          <button
            className="btn btn-sm btn-outline btn-success mt-2 font-bold"
            // style={{ fontSize: "10px" }}
            onClick={handleCheckout}
            disabled={
              cartItems.length === 0 ||
              cartItems.some((item) => item.quantity > item.product.stock) ||
              cartItems.some((item) => item.quantity === 0)
            }
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
