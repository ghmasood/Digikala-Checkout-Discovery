import { createSlice } from "@reduxjs/toolkit";
import { cardType } from "../../types";
import reducers from "./reducers";

export const initialState: cardType = {
  cardProducts: [],
  total: 0,
};

export const CardSlice = createSlice({
  name: "card",
  initialState,
  reducers: { ...reducers },
});

export const { addToCard, removeFromCard } = CardSlice.actions;

export default CardSlice.reducer;
