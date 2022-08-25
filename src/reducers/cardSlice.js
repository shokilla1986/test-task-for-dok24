import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cardsList: [],
  watchList: [],
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
      state.cardsList = state.cardsList.map(
        (card) => (card = { ...card, like: false })
      );
    },
    cardsFetchingError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    changeLikeCard(state, action) {
      const card = state.cardsList.find((card) => card.id === action.payload);
      card.like = !card.like;
    },

    deleteCard(state, action) {
      state.cardsList = state.cardsList.filter(
        (card) => card.id !== action.payload
      );
    },
    showFilterList(state, action) {
      state.watchList = state.cardsList.filter((card) => card.like === true);
      console.log("watch: ", state.watchList);
    },
  },
});

export const {
  cardsFetching,
  cardsFetchingSuccess,
  cardsFetchingError,
  deleteCard,
  changeLikeCard,
  showFilterList,
} = cardsSlice.actions;
export default cardsSlice.reducer;
