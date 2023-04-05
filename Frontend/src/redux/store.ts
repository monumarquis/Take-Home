import {
    legacy_createStore,
    combineReducers,
    applyMiddleware,
    compose,
    Action

} from "redux";
import thunk, { ThunkMiddleware } from "redux-thunk";
import { RootState } from "../types/user";
import { allUserProfileReducer } from "./AllUser/alluser.reducer";



const rootReducer = combineReducers({
    allUser: allUserProfileReducer,

});

const createCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = legacy_createStore(
    rootReducer,
    createCompose(applyMiddleware(thunk as ThunkMiddleware<RootState, Action>))
);