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
    },
    cardsFetchingSuccess(state, action) {
      state.isLoading = false;
      state.error = "";
      state.cardsList = action.payload;
    },
    cardsFetchingError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { cardsFetching, cardsFetchingSuccess, cardsFetchingError } =
  cardsSlice.actions;
export default cardsSlice.reducer;
