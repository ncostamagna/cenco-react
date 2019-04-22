import { SET_PRODUCTS } from "../actions/products";

export const products = (state = {}, action) => {
    console.log(action.payload);
    switch (action.type) {
      case SET_PRODUCTS:
          console.log(action)
          return action.payload;
      default:
        return state;
    }
  
  }
  