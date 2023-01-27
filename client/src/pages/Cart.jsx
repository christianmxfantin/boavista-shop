import { useSelector } from "react-redux";
import CartEmpty from "../components/cart/CartEmpty";
import CartFull from "../components/cart/CartFull";

const Cart = () => {
  const state = useSelector((state) => state);

  return state.cart.length === 0 ? <CartEmpty /> : <CartFull />;
};

export default Cart;
