import { useSelector, useDispatch } from "react-redux";
import { useTheme } from "@emotion/react";
import CartItem from "../CartItem/CartItem";
import { CartContainer } from "./Cart.styles";

const Cart = () => {
  // const dispatch = useDispatch();
  const theme = useTheme();
  const { cart } = useSelector((state) => state);
  console.log(cart);

  return (
    <CartContainer>
      {cart.productsList.map((item, index) => (
        <CartItem
          key={index}
          data={item}
          color={index % 2 === 0 && theme.palette.secondary.A100}
        />
      ))}
    </CartContainer>
  );
};

export default Cart;
