import { combineReducers } from "redux";
import categories from "./categories";
import query from "./query_jokes";
export default combineReducers({ categories, query });
