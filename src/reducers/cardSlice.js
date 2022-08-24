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

    deleteCard(state, action) {
      console.log("deleteCard");
      console.log("action: ", action.payload);
      state.cardsList = state.cardsList.filter(
        (card) => card.id !== action.payload
      );
    },
  },
});

export const {
  cardsFetching,
  cardsFetchingSuccess,
  cardsFetchingError,
  deleteCard,
} = cardsSlice.actions;
export default cardsSlice.reducer;
