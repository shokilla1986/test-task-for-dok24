import axios from "axios";
import {
  cardsFetching,
  cardsFetchingSuccess,
  cardsFetchingError,
} from "./cardSlice";

export const fetchCards = () => async (dispatch) => {
  try {
    dispatch(cardsFetching());
    const response = await axios.get("https://picsum.photos/v2/list");
    dispatch(cardsFetchingSuccess(response.data));
  } catch (error) {
    dispatch(cardsFetchingError(error.message));
  }
};
