import { useSelector } from "react-redux";
import CheckoutEmpty from "../../components/checkout/CheckoutEmpty/CheckoutEmpty";
import CheckoutFull from "../../components/checkout/CheckoutFull/CheckoutFull";

const Checkout = () => {
  const { cart } = useSelector((state) => state);
  console.log(cart);

  return cart.total === 0 ? <CheckoutEmpty /> : <CheckoutFull />;
};

export default Checkout;
