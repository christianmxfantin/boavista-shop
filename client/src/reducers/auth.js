import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {},
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    unsetUser: (state) => {
      state.user = {};
    },
  },
});

export const { setUser, unsetUser } = authSlice.actions;

export default authSlice.reducer;
