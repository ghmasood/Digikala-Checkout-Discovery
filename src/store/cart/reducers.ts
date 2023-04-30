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
  minusFromCart: (state: cartType, action: PayloadAction<number>) => {
    const index = state.cartProducts.findIndex(
      (item) => item.id === action.payload
    );
    if (state.cartProducts[index].qty > 1) {
      state.total--;
      state.cartProducts[index].qty--;
    } else {
      return {
        total: state.total - 1,
        cartProducts: state.cartProducts.filter((i) => i.id !== action.payload),
      };
    }
  },
};

export default reducers;
