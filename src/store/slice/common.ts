import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isModalActive: false,
  isEditCardMode: false,
  isEditCard: false,
  isActiveCancelBtn: false,
  isSaveCard: false,
  isCanceled: false,
};

const commonSlice = createSlice({
  name: "cardList",
  initialState,
  reducers: {
    modalActive: (state) => {
      state.isModalActive = true;
    },
    setModalActive: (state) => {
      state.isModalActive = false;
    },
    editCardMode: (state) => {
      state.isEditCardMode = true;
    },
    setEditCardMode: (state) => {
      state.isEditCardMode = true;
    },
    editCard: (state) => {
      state.isEditCard = true;
    },
    activeCancelBtn: (state) => {
      state.isActiveCancelBtn = true;
    },
    saveCard: (state) => {
      state.isSaveCard = true;
    },
    canceled: (state) => {
      state.isCanceled = true;
    }
  },
});

export const commonActions = commonSlice.actions;
export default commonSlice.reducer;
