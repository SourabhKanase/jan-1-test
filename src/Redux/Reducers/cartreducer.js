import { ADD_NEW_ITEM_TOCART } from "../Action/actiontypes";

const initialState = {
  data: [],
};

const cartreducer = (state = initialState, action) => {
  console.log("cartreducer running");

  switch (action.type) {
    case ADD_NEW_ITEM_TOCART:
      // Ensure immutability by returning a new state object
      return {
        ...state, // Spread the current state
        data: [...state.data, action.payload],  // Update the data with the payload
      };
    default:
      return state; // Return the current state by default
  }
};

export default cartreducer;
