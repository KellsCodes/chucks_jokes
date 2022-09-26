import { GET_CATEGORIES_SUCCESS } from "../types";


export default function categories(state = {}, action) {
  switch (action.type) {
    case GET_CATEGORIES_SUCCESS:
        return {
          ...state,
          categories: [...action.payload]
        }
    default:
      return state;
  }
}
