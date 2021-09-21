import { configureStore } from "@reduxjs/toolkit";
import commonReducer from "./slice/common";
import addCardReducer from "./slice/addCard";
import tabReducer from "./slice//tab";

const store = configureStore({
  reducer: { common: commonReducer, addCard: addCardReducer, tab: tabReducer },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
