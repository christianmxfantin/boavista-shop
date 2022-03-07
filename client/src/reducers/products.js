import {
  ADD_PRODUCT,
  DELETE_PRODUCT,
  NO_PRODUCT,
  READ_ALL_PRODUCTS,
  UPDATE_PRODUCT,
} from "../types";

export const initialState = {
  //traer data de la BD
  products: [
    { id: 1, name: "Producto 1", price: 300 },
    { id: 2, name: "Producto 2", price: 500 },
    { id: 3, name: "Producto 3", price: 900 },
  ],
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT: {
    }
    case READ_ALL_PRODUCTS: {
    }
    case UPDATE_PRODUCT: {
    }
    case DELETE_PRODUCT: {
    }
    case NO_PRODUCT: {
    }
    default:
      return state;
  }
};
