import { ADD_NEW_ITEM_TOCART,REMOVE_ITEM_FROM_CART } from "../Action/actiontypes";

const initialState = {
  data: [],
};

const cartreducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_NEW_ITEM_TOCART:

      return {
        ...state, // Spread the current state
        data: [...state.data, action.payload],  // Update the data with the payload
      };

    case REMOVE_ITEM_FROM_CART :    const updatedData = state.data.filter(item => item.id !== action.payload.id);
      
    return {
      ...state,
      data: updatedData,
    };
           
    default:
      return state; // Return the current state by default
  }
};

export default cartreducer;
