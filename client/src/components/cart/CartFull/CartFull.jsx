import { useSelector, useDispatch } from "react-redux";
import {
  CartContainer,
  CartButtonsContainer,
  CartButtonClean,
  CartButtonLeft,
} from "./CartFull.styles";
import CartItem from "../CartItem/CartItem";

const CartFull = ({ title }) => {
  // const dispatch = useDispatch();
  const { cart } = useSelector((state) => state);
  console.log(cart);

  return (
    <CartContainer component={"main"}>
      {cart.productsList.map((item, index) => (
        <CartItem key={index} data={item} />
      ))}
      <CartButtonsContainer>
        <CartButtonClean variant="contained">Vaciar Carrito</CartButtonClean>
        <CartButtonLeft variant="contained">{title}</CartButtonLeft>
      </CartButtonsContainer>
    </CartContainer>
  );
};

export default CartFull;
