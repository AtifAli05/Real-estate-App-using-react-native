import { ActionTypes } from "../constants/action-types";


//setProducts action actually take all the products from the api and set it to the redux store.
//Step(2). After dispatch an action in which the api's data to the reducer, it will return the type and the payload object
export const setProducts = (products) => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products
    };
};

export const selectedProducts = (product) => {
    debugger;
    return {
        type: ActionTypes.SELECTED_PRODUCTS,
        payload: product
    };
};

export const RemoveSelectedProducts = (product) => {
    debugger;
    return {
        type: ActionTypes.REMOVE_SELECTED_PRODUCTS,
    };
};



//We create action to change in the state in the reducer. 
//We have different actions for different reducers.
//We have different reducers for different parts of the state.
//We update the state in the reducer.

//In Actions WE have two things type and payload. 
//Type is the action type and payload is the data we want to update.

//Action is the object that we send to the reducer.
