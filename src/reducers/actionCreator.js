import axios from "axios";
import {
  cardsFetching,
  cardsFetchingSuccess,
  cardsFetchingError,
} from "./cardSlice";

export const fetchCards = () => async (dispatch) => {
  try {
    dispatch(cardsFetching());
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/photos?_limit=10"
    );
    dispatch(cardsFetchingSuccess(response.data));
  } catch (error) {
    dispatch(cardsFetchingError(error.message));
  }
};
