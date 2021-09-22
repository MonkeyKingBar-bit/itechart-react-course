import { configureStore } from "@reduxjs/toolkit";
import cardsDataReducer from "./slice/cardsData";
import commonReducer from "./slice/common";
import tabReducer from "./slice//tab";

const store = configureStore({
  reducer: {
    cardsData: cardsDataReducer,
    common: commonReducer,
    tab: tabReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
