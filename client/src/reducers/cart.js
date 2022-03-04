import {
  ADD_TO_CART,
  CLEAR_CART,
  REMOVE_ALL_FROM_CART,
  REMOVE_ONE_FROM_CART,
} from "../types";

export const initialState = {
  products: [],
  cart: [],
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      let newProduct = state.products.find(
        (product) => product.id === action.payload
      );
      let productCart = state.cart.find((item) => item.id === newProduct.id);
    }
    case REMOVE_ONE_FROM_CART: {
    }
    case REMOVE_ALL_FROM_CART: {
    }
    case CLEAR_CART: {
    }
    default:
      return state;
  }
};
