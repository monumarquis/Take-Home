import { ActionType, UserReducerInitState, UserState } from "../../types/user";

const initState: UserReducerInitState = {
    data: [],
    loading: false,
    error: false,
};
export const allUserProfileReducer = (
    state = initState,
    { type, payload }: { type: string, payload: UserState[] }
) => {
    switch (type) {
        case ActionType.SUCCESS: {
            return {
                ...state,
                data: payload,
                loading: false,
                error: false,
            };
        }
        case ActionType.REQUEST: {
            return {
                ...state,
                data: [],
                loading: true,
                error: false,
            };
        }
        case ActionType.ERROR: {
            return {
                ...state,
                data: [],
                loading: false,
                error: true,
            };
        }

        default: {
            return state;
        }
    }
};
