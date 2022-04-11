import { ActionTypes } from "../constants/action-types";

const initialState = {
    products: [
        // {  id: 1, name: 'Rehan', category : 'Practice_Test'  },
    ],
}
// step(3). After dispatch the action then the reducere take action and update the state by using the action like ActionTypes.SET_PRODUCTS
export const productReducer= (state = initialState,{type,payload}) => {
   switch (type) {
       case ActionTypes.SET_PRODUCTS:
           return {...state, products: payload};
           // (...state) is used to get the current state.And the payload whatever had in the action from the api's data in the reducer.
       default:
           return state;
   }
};

export const SelectProductReducer= (state = {},{type,payload}) => {
    debugger
    switch (type) {
        case ActionTypes.SELECTED_PRODUCTS:
            return {...state, ...payload};
            // (...state) is used to get the current state.And the payload whatever had in the action from the api's data in the reducer.
        case ActionTypes.REMOVE_SELECTED_PRODUCTS:
            return {};
            default:
            return state;
    }
 };


// Reducers having two parameters.one is the state and the other is the action. 
// State is the current state of the application.State is the object that we send to the reducer.
// Action is the object that we send to the reducer.

// On the basis of the Actions, we update the state in the reducer.
// We have different actions for different reducers.
// We have different reducers for different parts of the state.