import { createSlice } from "@reduxjs/toolkit";

import initialData from "../../state/card-data";

const cardsDataSlice = createSlice({
  name: "cardData",
  initialState: { cards: initialData },
  reducers: {
    setCardsData: (state, action) => {
      return {
        ...state,
        cards: [...action.payload],
      };
    },
    addCard: (state, action) => {
      return {
        ...state,
        cards: [...state.cards, action.payload],
      };
    },
    deleteCard: (state, action) => {
      const cardsData = state.cards.filter(
        (elem) => elem.id !== action.payload.id
      );
      return {
        ...state,
        cards: [...cardsData],
      };
    },
    saveCard: (state, action) => {
      const cardData = state.cards.map((obj) => {
        if (obj.id === action.payload.id) {
          obj = action.payload;
        }
        return obj;
      });
      return {
        ...state,
        cards: [...cardData],
      };
    },
  },
});

export const cardsDataActions = cardsDataSlice.actions;
export default cardsDataSlice.reducer;
