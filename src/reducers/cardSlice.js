import { createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
  name: "like",
  initialState: {
    like: false,
  },
  reducers: {
    changeLike(state) {
      state.like = !state.like;
      console.log(state.like);
    },
  },
});

export const { changeLike } = cardSlice.actions;
export default cardSlice.reducer;
