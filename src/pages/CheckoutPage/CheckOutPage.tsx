import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";

interface Product {
  id: string;
  name: string;
  price: number;
  stockQuantity: number;
  imageUrl: string;
}

interface CartItem {
  product: Product;
  quantity: number;
}

const CheckOutPage: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const navigate = useNavigate();

  const handlePlaceOrder = () => {
    if (paymentMethod === "Cash on Delivery") {
      // Update stock logic here
      cartItems.forEach((item) => (item.product.stock -= item.quantity));
      // Clear cart logic here
      navigate("/success");
    } else {
      alert("Please select a payment method");
    }
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  );

  return (
    <div className="mt-15 mb-5">
      <div className="pt-12">
        <br />
      </div>
      <div className="mt-8">
        <h2 className="text-xl font-bold">Order Summary</h2>
        <table className="table w-full mt-4">
          <thead>
            <tr>
              <th className="border px-4 py-2">Image</th>
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">Price</th>
              <th className="border px-4 py-2">Quantity</th>
              <th className="border px-4 py-2">Total</th>
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
                <td className="border px-4 py-2">{item.quantity}</td>
                <td className="border px-4 py-2">
                  ${(item.product.price * item.quantity).toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <h3 className="text-xl font-bold mt-4">
          Total: ${totalPrice.toFixed(2)}
        </h3>
      </div>
      <div className="max-w-screen-md mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Checkout</h1>
        <div className="mb-4">
          <label className="block mb-2">Name</label>
          <input
            type="text"
            className="input input-bordered w-full"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Email</label>
          <input
            type="email"
            className="input input-bordered w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Phone</label>
          <input
            type="tel"
            className="input input-bordered w-full"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Delivery Address</label>
          <textarea
            className="textarea textarea-bordered w-full"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block mb-2">Payment Method</label>
          <div>
            <label className="mr-4">
              <input
                type="radio"
                name="paymentMethod"
                value="Cash on Delivery"
                checked={paymentMethod === "Cash on Delivery"}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              Cash on Delivery
            </label>
            {/* Add other payment methods here */}
          </div>
        </div>
        <button className="btn btn-primary mt-4" onClick={handlePlaceOrder}>
          Place Order
        </button>
      </div>{" "}
    </div>
  );
};

export default CheckOutPage;
