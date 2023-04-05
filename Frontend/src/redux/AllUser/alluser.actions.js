import axios from "axios";
import { ALL_USER_PROFILE_ERROR, ALL_USER_PROFILE_REQUEST, ALL_USER_PROFILE_SUCCESS } from "./alluser.types";

export const getAllUserProfile = () => async (dispatch) => {
    dispatch({
        type: ALL_USER_PROFILE_REQUEST,
    });
    try {
        const { data: { user } } = await axios.get(
            `https://graceful-wasp-slip.cyclic.app/user`,
        );
        return dispatch({
            type: ALL_USER_PROFILE_SUCCESS,
            payload: user,
        });
    } catch (error) {
        console.log(error);
        return dispatch({
            type: ALL_USER_PROFILE_ERROR,
        });
    }
};
