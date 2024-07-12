// src/store/cartSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./index";

interface Product {
  _id: string;
  name: string;
  price: number;
  stock: number;
  imageUrl: string;
}

interface CartItem {
  product: Product;
  quantity: number;
}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<CartItem>) {
      const { product, quantity } = action.payload;
      const existingItem = state.items.find(
        (item) => item.product._id === product._id
      );
      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.items.push({ product, quantity });
      }
    },
    removeFromCart(state, action: PayloadAction<string>) {
      state.items = state.items.filter(
        (item) => item.product._id !== action.payload
      );
    },
    updateCartQuantity(
      state,
      action: PayloadAction<{ productId: string; quantity: number }>
    ) {
      const { productId, quantity } = action.payload;
      const itemToUpdate = state.items.find(
        (item) => item.product._id === productId
      );
      if (itemToUpdate) {
        itemToUpdate.quantity += quantity;
        if (itemToUpdate.quantity <= 0) {
          itemToUpdate.quantity = 0; // Ensure quantity doesn't go below zero
        }
      }
    },
  },
});

export const { addToCart, removeFromCart, updateCartQuantity } =
  cartSlice.actions;

export const selectCartItems = (state: RootState) => state.cart.items;

export default cartSlice.reducer;
