import { useSelector } from "react-redux";
import CartEmpty from "../components/cart/CartEmpty";
import CartFull from "../components/cart/CartFull";

const Cart = () => {
  const { cart } = useSelector((state) => state);

  return cart.total === 0 ? <CartEmpty /> : <CartFull />;
};

export default Cart;
