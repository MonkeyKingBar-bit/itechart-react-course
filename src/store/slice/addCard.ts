import { createSlice, nanoid } from "@reduxjs/toolkit";
import initialData from "../../state/card-data";

const initialState = {
  cards: initialData,
  title: "",
  text: "",
};

const addCardSlice = createSlice({
  name: "addCard",
  initialState,
  reducers: {
    enteredTitle: (state, action) => {
      state.title = action.payload;
    },
    enteredTitleEmpty: (state) => {
      state.title = "";
    },
    enteredContent: (state, action) => {
      state.text = action.payload;
    },
    enteredContentEmpty: (state) => {
      state.text = "";
    },
    addCard: {
       reducer: (state, action) => {
          state.cards.push(action.payload)
       },
       prepare: (value) => {
          return {
             ...value,
             id: nanoid()
          }
       }
    },
  },
});

export const addCardActions = addCardSlice.actions;
export default addCardSlice.reducer;
