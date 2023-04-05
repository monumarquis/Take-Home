import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { store } from '../redux/store';

// Define the types for our All User actions
export enum ActionType {
    REQUEST = "allUser/allUserProfileRequest",
    SUCCESS = "allUser/allUserProfileSuccess",
    ERROR = "allUser/allUserProfileError"
}

export type UserErrorAction = ActionType.ERROR;
export type UserSuccessAction = ActionType.SUCCESS;
export type UserRequestAction = ActionType.REQUEST;


export type UserAction = UserRequestAction | UserErrorAction | UserSuccessAction;

export type spinnerProps = { Sectionheight: string, loaderHeight: string, loaderWidth: string }

export type UserState = {
    _id: string,
    name: string,
    email: string,
    destination: string,
    budgetOfPerson: string,
    currency: string,
    travellers: string,
    updatedAt: string;
    createdAt: string;
}

export type UserReducerInitState = {
    data?: UserState[] 
    loading: boolean;
    error: boolean;
}



export interface RootState {
    allUser: UserReducerInitState;
}

export type UserTravelInitState = {
    name: string,
    email: string,
    destination: string,
    budgetOfPerson: string,
    currency: string,
}
export type UserTravelState = {
    name: string,
    email: string,
    destination: string,
    budgetOfPerson: number,
    currency: string,
}
export interface getAllUserAction {
    type: UserAction,
    payload: UserState
}
export type Action = getAllUserAction

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;