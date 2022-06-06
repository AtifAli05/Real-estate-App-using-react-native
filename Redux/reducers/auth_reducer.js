import { ActionTypes } from "../constants/action-types";

const initialState = {
    data: [ ],
}
// step(3). After dispatch the action then the reducere take action and update the state by using the action like ActionTypes.SET_PRODUCTS
export const loginReducer= (state = initialState,{type,payload}) => {
   switch (type) {
       case ActionTypes.AUTH_LOGIN:
           return {...state, data: payload};
           // (...state) is used to get the current state.And the payload whatever had in the action from the api's data in the reducer.
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