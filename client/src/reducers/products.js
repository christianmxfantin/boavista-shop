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
  },
});

export const { addOneProduct } = productSlice.actions;

export default productSlice.reducer;
