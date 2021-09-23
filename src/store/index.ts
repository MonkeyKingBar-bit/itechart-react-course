// import { configureStore } from "@reduxjs/toolkit";
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import cardsDataReducer from "./slice/cardsData";
import commonReducer from "./slice/common";
import tabReducer from "./slice//tab";

const reducer = combineReducers({
  cardsData: cardsDataReducer,
  common: commonReducer,
  tab: tabReducer,
});

const store = createStore(reducer, applyMiddleware(thunk));

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
