import { combineReducers } from "redux";
import { cartReducer } from "./cart";

const reducer = combineReducers({
  cart: cartReducer,
});

export default reducer;
