import {
  ADD_PRODUCT,
  DELETE_PRODUCT,
  NO_PRODUCT,
  READ_ALL_PRODUCTS,
  UPDATE_PRODUCT,
} from "../types";

export const addProduct = (id) => ({ type: ADD_PRODUCT, payload: id });

export const readAllProducts = () => ({ type: READ_ALL_PRODUCTS });

export const updateProduct = (id) => ({ type: UPDATE_PRODUCT, payload: id });

export const deleteProduct = (id) => ({ type: DELETE_PRODUCT, payload: id });

export const notFoundProduct = () => ({ type: NO_PRODUCT });
