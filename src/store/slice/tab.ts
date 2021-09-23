import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeTab: 0,
};

const tabSlice = createSlice({
  name: "cardTabs",
  initialState,
  reducers: {
    setActiveTab: (state, action) => {
      state.activeTab = action.payload;
    },
  },
});

export const tabActions = tabSlice.actions;
export default tabSlice.reducer;
