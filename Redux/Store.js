import { createStore } from "redux";
import {rootReducers} from "./reducers/index";
// import { devToolsEnhancer } from "redux-devtools-extension";


const store = createStore(rootReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    );

export default store;

    // devToolsEnhancer({}),
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    //(window).__REDUX_DEVTOOLS_EXTENSION__ && (window).__REDUX_DEVTOOLS_EXTENSION__()

// CreateStore is a function that takes two arguments. It takes the rootReducers.
// CreateStore is used to create the store.All the reducers are combined and the store is created.