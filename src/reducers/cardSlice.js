import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cardsList: [],
  isLoading: false,
  error: "",
};

const cardsSlice = createSlice({
  name: "cardsList",
  initialState,
  reducers: {
    cardsFetching(state) {
      state.isLoading = true;
      console.log("loading", state.cardsList);
    },
    cardsFetchingSuccess(state, action) {
      state.isLoading = false;
      state.error = "";
      state.cardsList = action.payload;
      console.log("success:", state.cardsList);
    },
    cardsFetchingError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
      console.log("error", state.cardsList);
    },
  },
});

export const { cardsFetching, cardsFetchingSuccess, cardsFetchingError } =
  cardsSlice.actions;
export default cardsSlice.reducer;
