import { createSlice } from "@reduxjs/toolkit";
interface Card {
  id: string;
  title: string;
  text: string;
}

const cardsDataSlice = createSlice({
  name: "cardData",
  initialState: { cards: [] as Card[], error: null },
  reducers: {
    cardsData: (state, action) => {
      return {
        ...state,
        cards: [...action.payload],
      };
    },
    setCardsData: (state, action) => {
      return {
        ...state,
        cards: [...state.cards, ...action.payload],
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
    setError: (state, action) => {
      state.error = state.error + action.payload;
    },
  },
});

export const cardsDataActions = cardsDataSlice.actions;
export default cardsDataSlice.reducer;
