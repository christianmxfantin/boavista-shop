import {
  ADD_PRODUCT,
  DELETE_PRODUCT,
  NO_PRODUCT,
  READ_ALL_PRODUCTS,
  UPDATE_PRODUCT,
} from "../types";

export const initialState = [
  { id: 1, name: "Lapicera Bic x 24 unidades", price: 500 },
  { id: 2, name: "Marcador Schneider Trazo fino x 6 unidades", price: 400 },
  { id: 3, name: "Lápices Staedtler x 24 unidades", price: 500 },
  {
    id: 4,
    name: "Goma de borrar Staedtler Tinta/Lápiz x 12 unidades",
    price: 600,
  },
  { id: 5, name: "Transportador Pizzini x 12 unidades", price: 700 },
  { id: 6, name: "Compáses Pizzini x 12 unidades", price: 900 },
];

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
