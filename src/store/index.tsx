// src/store/index.ts
// import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    // Add other reducers as needed
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
