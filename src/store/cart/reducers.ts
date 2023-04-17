import { PayloadAction } from "@reduxjs/toolkit";
import { cardType } from "../../types";

const reducers = {
  addToCard: (state: cardType, action: PayloadAction<number>) => {
    state.pids.push(action.payload);
    state.total++;
    return state;
  },
  removeFromCard: (state: cardType, action: PayloadAction<number>) => {
    const index = state.pids.findIndex((item) => item === action.payload);
    state.pids.splice(index, index);
    return state;
  },
};

export default reducers;
