import { useSelector, useDispatch } from "react-redux";
import { CartContainer, CartButtonClean } from "./CartFull.styles";
import CartItem from "../CartItem/CartItem";

const CartFull = () => {
  // const dispatch = useDispatch();
  const { cart } = useSelector((state) => state);
  console.log(cart);

  return (
    <CartContainer component={"main"}>
      {cart.productsList.map((item, index) => (
        <CartItem key={index} data={item} />
      ))}
      <CartButtonClean variant="contained">Limpiar</CartButtonClean>
    </CartContainer>
  );
};

export default CartFull;
