import axios from "axios";
import { API_URL } from "../../config/config";
import { QUERY_JOKES_ERROR, QUERY_JOKES_SUCCESS } from "../types";

export const getQuote = (category, setQuote) => async (dispatch) => {
  try {
    const { data } = await axios.get(`${API_URL}random?category=${category}`);
    setQuote(data);
  } catch (error) {
    console.log(error);
  }
};

export const searchQuote = (query) => async (dispatch) => {
  try {
    const { data } = await axios.get(`${API_URL}search?query=${query}`);
    console.log(data);
    // dispatch the data to store since it is a long list that could be fetched
    if (data?.total > 0) {
      dispatch({
        type: QUERY_JOKES_SUCCESS,
        payload: data?.result,
      });
    } else {
      dispatch({
        type: QUERY_JOKES_ERROR,
        payload: `${query} not found.`,
      });
    }
  } catch (error) {
    console.log(error);
    dispatch({
      type: QUERY_JOKES_ERROR,
      payload: `${query} not found.`,
    });
  }
};
