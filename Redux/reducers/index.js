import { combineReducers } from "redux";
import { loginReducer } from "./auth_reducer";

export const rootReducers = combineReducers({
    // reducers go here
    loginReducer : loginReducer,
});


//combineReducer is a function that takes an object as an argument.
//It combines all the reducers because we might have multiple reducers.
