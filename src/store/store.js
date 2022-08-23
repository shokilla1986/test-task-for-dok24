import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cardSlice from "../reducers/cardSlice";

const rootReducer = combineReducers({
  card: cardSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});
