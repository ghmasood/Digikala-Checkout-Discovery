import { PayloadAction } from "@reduxjs/toolkit";
import { cardType, productType } from "../../types";

const reducers = {
  addToCard: (state: cardType, action: PayloadAction<productType>) => {
    state.cardProducts.push(action.payload);
    state.total++;
    return state;
  },
  removeFromCard: (state: cardType, action: PayloadAction<number>) => {
    const index = state.cardProducts.findIndex(
      (item) => item.id === action.payload
    );
    state.cardProducts.splice(index, index);
    return state;
  },
};

export default reducers;
