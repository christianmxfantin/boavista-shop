import {
  ADD_TO_CART,
  CLEAR_CART,
  REMOVE_ALL_FROM_CART,
  REMOVE_ONE_FROM_CART,
} from "../types";

export const initialState = {
  //traer data de la BD
  products: [
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
  ],
  cart: [],
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      let newItem = state.products.find(
        (product) => product.id === action.payload
      );

      //si el item existe en el Cart, agrega cantidad
      let itemInCart = state.cart.find((item) => item.id === newItem.id);

      return itemInCart
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === newItem.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          }
        : { ...state, cart: [...state.cart, { ...newItem, quantity: 1 }] };
    }
    case REMOVE_ONE_FROM_CART: {
      let itemToDelete = state.cart.find((item) => item.id === action.payload);

      return itemToDelete.quantity > 1
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === action.payload
                ? { ...item, quantity: item.quantity - 1 }
                : item
            ),
          }
        : {};
    }
    case REMOVE_ALL_FROM_CART: {
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    }
    case CLEAR_CART:
      return initialState;
    default:
      return state;
  }
};
