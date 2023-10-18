import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    total: 0, //total de items
    productList: {},
  },
  reducers: {
    addProductToCart: (state, action) => {
      const product = action.payload;
      if (state.productList.hasOwnProperty(product.id)) {
        if (product.total !== 0) {
          state.productList[product.id].totalProduct += product.total;
          state.total += product.total;
        } else {
          state.productList[product.id].totalProduct += 1;
          state.total += 1;
        }
      } else {
        state.productList = {
          ...state.productList,
          [product.id]: {
            ...product,
            totalProduct: product.total !== 0 ? product.total : 1,
          },
        };
        state.total += product.total !== 0 ? product.total : 1;
      }
    },
    addOneToCart: (state, action) => {
      const productId = action.payload;
      state.productList[productId].totalProduct += 1;
      state.total += 1;
    },
    removeAllFromCart: (state, action) => {
      const productId = action.payload;
      state.total = state.total - state.productList[productId].totalProduct;
      delete state.productList[productId];
    },
    removeOneFromCart: (state, action) => {
      const productId = action.payload;
      state.productList[productId].totalProduct -= 1;
      state.total -= 1;

      if (state.productList[productId].totalProduct === 0) {
        delete state.productList[productId];
      }
    },
    cleanCart: (state, action) => {
      state.productList = {};
      state.total = 0;
    },
  },
});

export const {
  addProductToCart,
  addOneToCart,
  removeAllFromCart,
  removeOneFromCart,
  cleanCart,
} = cartSlice.actions;

export default cartSlice.reducer;
