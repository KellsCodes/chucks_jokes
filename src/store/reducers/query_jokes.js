import { QUERY_JOKES_SUCCESS, QUERY_JOKES_ERROR } from "../types";

export default function query(state = {}, action) {
  switch (action.type) {
    case QUERY_JOKES_SUCCESS:
      return {
        ...state,
        query: action.payload,
      };
    case QUERY_JOKES_ERROR:
      return {
        ...state,
        query: action.payload,
      };
    default:
      return state;
  }
}
