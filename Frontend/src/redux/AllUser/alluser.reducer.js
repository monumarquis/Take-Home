import { ALL_USER_PROFILE_ERROR, ALL_USER_PROFILE_SUCCESS, ALL_USER_PROFILE_REQUEST } from "./alluser.types";

const initState = {
    data: [],
    totalPages: null,
    loading: false,
    error: false,
};

export const allUserProfileReducer = (
    state = initState,
    { type, payload }
) => {
    switch (type) {
        case ALL_USER_PROFILE_REQUEST: {
            return {
                ...state,
                loading: true,
                error: false,
            };
        }
        case ALL_USER_PROFILE_SUCCESS: {
            return {
                ...state,
                data: payload.user,
                totalPages: payload.totalPages,
                loading: false,
                error: false,
            };
        }
        case ALL_USER_PROFILE_ERROR: {
            return {
                ...state,
                loading: false,
                error: true,
            };
        }

        default: {
            return state;
        }
    }
};