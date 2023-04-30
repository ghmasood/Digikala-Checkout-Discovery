import { PayloadAction } from "@reduxjs/toolkit";
import { IFilterdItem, cartType, productType } from "../../types";

const reducers = {
  addToCart: (state: cartType, action: PayloadAction<productType>) => {
    const duplicatedIndex = state.cartProducts.findIndex(
      (product) => product.id === action.payload.id
    );
    if (duplicatedIndex >= 0) {
      state.cartProducts[duplicatedIndex].qty++;
    } else {
      state.cartProducts.push({
        ...action.payload,
        qty: 1,
        finalPrice:
          (action.payload.price * (100 - action.payload.discountPercentage)) /
          100,
      });
    }
    state.total++;
  },
  removeFromCart: (state: cartType, action: PayloadAction<number>) => {},
};

export default reducers;
