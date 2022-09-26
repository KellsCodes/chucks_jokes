import axios from "axios";
import { API_URL } from "../../config/config";
import { GET_CATEGORIES_SUCCESS } from "../types";

export const getAllCategories = () => async(dispatch) => {
    try {
        const {data} = await axios.get(`${API_URL}categories`)
        // console.log(data)
        dispatch({
            type: GET_CATEGORIES_SUCCESS,
            payload: data
        })
    } catch (error) {
        console.log(error)
    }
}