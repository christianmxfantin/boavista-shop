import { useSelector } from "react-redux";
import CartEmpty from "../components/cart/CartEmpty";
import CartFull from "../components/cart/CartFull";

const Cart = () => {
  const state = useSelector((state) => state);
  const { cart } = state.cart;

  return cart.length === 0 ? <CartEmpty /> : <CartFull />;
};

export default Cart;
