import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "products",
  initialState: {
    productsData: {},
  },
  reducers: {
    addOneProduct: (state, action) => {
      state.productsData = action.payload;
    },
    cleanProducts: (state, action) => {
      state.productsData = {};
    },
  },
});

export const { addOneProduct, cleanProducts } = productSlice.actions;

export default productSlice.reducer;
