import axios from "axios";
import { ActionType } from "../../types/user";
import { Action, Dispatch } from "redux";

export const getAllUserProfile = () => async (dispatch: Dispatch<Action>) => {
    dispatch({
        type: ActionType.REQUEST,
    });
    try {
        const { data } = await axios.get(
            `ActionType.SUCCESS/user`,
            
        );
        // console.log(data);
        return dispatch({
            type: ActionType.SUCCESS,
            payload: data,
        });
    } catch {
        console.log("message");
        return dispatch({
            type: ActionType.ERROR,
            payload: 'Something Went Wrong',
        });
    }
};
