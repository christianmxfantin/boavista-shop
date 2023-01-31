import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    total: 0,
    productsList: [],
  },
  reducers: {
    addProductToCart: (state, action) => {
      state.productsList = [...state.productsList, action.payload];
      state.total += 1;
    },
  },
});

export const { addProductToCart } = cartSlice.actions;

export default cartSlice.reducer;
