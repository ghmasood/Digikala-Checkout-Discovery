import { createSlice } from "@reduxjs/toolkit";
import { cartType } from "../../types";
import reducers from "./reducers";

export const initialState: cartType = {
  cartProducts: [],
  total: 0,
};

export const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: { ...reducers },
});

export const { addToCart, removeFromCart } = CartSlice.actions;

export default CartSlice.reducer;
