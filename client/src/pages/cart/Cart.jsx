import { useSelector } from "react-redux";
import CartEmpty from "../../components/cart/CartEmpty/CartEmpty";
import CartFull from "../../components/cart/CartFull/CartFull";

const Cart = () => {
  const { cart } = useSelector((state) => state);

  return cart.total === 0 ? <CartEmpty /> : <CartFull />;
};

export default Cart;
