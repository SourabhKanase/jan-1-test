import { createStore, combineReducers } from "redux";
import apireducer from "./Reducers/apireducer";
import cartreducer from "./Reducers/cartreducer";

// Combine multiple reducers into a single reducer
const rootReducer = combineReducers({
    api: apireducer,
    cart: cartreducer
});

// Create the Redux store using the combined reducer
const store = createStore(rootReducer);

export default store;

