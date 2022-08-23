import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  like: false,
};

const cardSlice = createSlice({
  name: "like",
  initialState,
  reducers: {
    changeLike: (state) => {
      state.like = !state.like;
    },
  },
});

export const { like } = cardSlice.actions;
export default cardSlice.reducer;
