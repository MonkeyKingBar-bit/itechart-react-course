import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isModalActive: false,
  isEditCardMode: false,
  isEditCard: false,
  isActiveCancelBtn: false,
  isSaveCard: false,
  isCanceled: false,
  isLoading: false,
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
      state.isEditCardMode = false;
    },
    editCard: (state) => {
      state.isEditCard = true;
    },
    setEditCard: (state) => {
      state.isEditCard = false;
    },
    activeCancelBtn: (state) => {
      state.isActiveCancelBtn = true;
    },
    setCancelBtn: (state) => {
      state.isActiveCancelBtn = false;
    },
    saveCard: (state) => {
      state.isSaveCard = true;
    },
    setSaveCard: (state) => {
      state.isSaveCard = false;
    },
    isCanceled: (state) => {
      state.isCanceled = true;
    },
    setIsCanceled: (state) => {
      state.isCanceled = false;
    },
    isLoading: (state) => {
      state.isLoading = true;
    },
    setIsLoading: (state) => {
      state.isLoading = false;
    },
  },
});

export const commonActions = commonSlice.actions;
export default commonSlice.reducer;
