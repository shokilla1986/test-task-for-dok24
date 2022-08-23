import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cardsSlice from "../reducers/cardSlice";

const rootReducer = combineReducers({
  cards: cardsSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});
