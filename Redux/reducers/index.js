import { combineReducers } from "redux";
import { productReducer,SelectProductReducer } from "./productReducer";

export const rootReducers = combineReducers({
    // reducers go here
    allProducts : productReducer,
    product:SelectProductReducer,
});


//combineReducer is a function that takes an object as an argument.
//It combines all the reducers because we might have multiple reducers.
