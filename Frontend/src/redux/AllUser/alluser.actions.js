import axios from "axios";
import { ALL_USER_PROFILE_ERROR, ALL_USER_PROFILE_REQUEST, ALL_USER_PROFILE_SUCCESS } from "./alluser.types";

export const getAllUserProfile = (url) => async (dispatch) => {
    dispatch({
        type: ALL_USER_PROFILE_REQUEST,
    });
    try {
        const { data } = await axios.get(
            url
        );
        return dispatch({
            type: ALL_USER_PROFILE_SUCCESS,
            payload: data,
        });
    } catch (error) {
        console.log(error);
        return dispatch({
            type: ALL_USER_PROFILE_ERROR,
        });
    }
};
