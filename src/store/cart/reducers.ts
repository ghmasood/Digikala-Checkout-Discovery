import { PayloadAction } from "@reduxjs/toolkit";
import { cartType, productType } from "../../types";

const reducers = {
  addToCart: (state: cartType, action: PayloadAction<productType>) => {
    state.cartProducts.push(action.payload);
    state.total++;
    return state;
  },
  removeFromCart: (state: cartType, action: PayloadAction<number>) => {
    const index = state.cartProducts.findIndex(
      (item) => item.id === action.payload
    );
    state.cartProducts.splice(index, index);
    return state;
  },
};

export default reducers;
