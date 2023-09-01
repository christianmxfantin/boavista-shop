import { useSelector } from "react-redux";
import EmptyData from "../../components/layout/EmptyData/EmptyData";
import CheckoutFull from "../../components/checkout/CheckoutFull/CheckoutFull";

const Checkout = () => {
  const { total } = useSelector((state) => state.cart);

  return total === 0 ? (
    <EmptyData iconName="checkout" size={180} title="órdenes" />
  ) : (
    <CheckoutFull />
  );
};

export default Checkout;
