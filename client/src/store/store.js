import { configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { CookieStorage } from "redux-persist-cookie-storage";
import Cookies from "js-cookie";

import cartReducer from "../reducers/cart";
import authReducer from "../reducers/auth";

const cookieStorage = {
  get: (key) => Cookies.get(key),
  set: (key, value) => Cookies.set(key, value, { expires: 1 }),
  remove: (key) => Cookies.remove(key),
};

const persistConfig = {
  key: "root",
  storage: new CookieStorage(cookieStorage),
};

const rootReducer = combineReducers({
  auth: authReducer,
  cart: cartReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});
