import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    total: 0,
    productList: [],
  },
  reducers: {
    addProductToCart: (state, action) => {
      state.productList = [...state.productList, action.payload];
      state.total += 1;
    },
    removeAllFromCart: (state, action) => {
      state.productList = [...state.productList, action.payload];
      state.total += 1;
    },
    removeOneFromCart: (state, action) => {
      state.productList = [...state.productList, action.payload];
      state.total += 1;
    },
    cleanCart: (state, action) => {
      state.productList = [...state.productList, action.payload];
      state.total += 1;
    },
  },
});

export const { addProductToCart } = cartSlice.actions;

export default cartSlice.reducer;
