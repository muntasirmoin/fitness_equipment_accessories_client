import {
  ADD_TO_CART,
  CartItem,
  CartState,
  REMOVE_FROM_CART,
  UPDATE_CART_QUANTITY,
} from "./types";

// export const addToCart = createAction<Product>('cart/addToCart');
export const addToCart = (item: CartItem) => ({
  type: ADD_TO_CART,
  payload: item,
});

export const removeFromCart = (productId: string) => ({
  type: REMOVE_FROM_CART,
  payload: productId,
});

export const updateCartQuantity = (productId: string, quantity: number) => ({
  type: UPDATE_CART_QUANTITY,
  payload: { productId, quantity },
});

// src/store/cart/reducer.ts
// import { CartState, CartItem } from "./types";
// import { ADD_TO_CART, REMOVE_FROM_CART, UPDATE_CART_QUANTITY } from "./actions";

const initialState: CartState = {
  items: [],
};

const cartReducer = (state = initialState, action: any): CartState => {
  switch (action.type) {
    case ADD_TO_CART:
      // Check if the item already exists in cart
      const existingItemIndex = state.items.findIndex(
        (item) => item?.product?._id === action.payload?.product?._id
      );
      if (existingItemIndex !== -1) {
        // Item exists, update quantity
        const updatedItems = [...state.items];
        updatedItems[existingItemIndex].quantity += action.payload.quantity;
        return { ...state, items: updatedItems };
      } else {
        // Item does not exist, add new item
        return { ...state, items: [...state.items, action.payload] };
      }

    case REMOVE_FROM_CART:
      return {
        ...state,
        items: state.items.filter(
          (item) => item.product._id !== action.payload
        ),
      };

    case UPDATE_CART_QUANTITY:
      const updatedItems = state.items.map((item) =>
        item.product._id === action.payload.productId
          ? { ...item, quantity: action.payload.quantity }
          : item
      );
      return { ...state, items: updatedItems };

    default:
      return state;
  }
};

export default cartReducer;
