import { useSelector, useDispatch } from "react-redux";
import { CartContainer, CartButtonsContainer } from "./CartFull.styles";
import CartItem from "../CartItem/CartItem";
import { Button } from "../../ui/Button";

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
        <Button name="Vaciar carrito" variant="contained" type="primary" />
        <Button name={title} variant="contained" type="primary" />
      </CartButtonsContainer>
    </CartContainer>
  );
};

export default CartFull;
