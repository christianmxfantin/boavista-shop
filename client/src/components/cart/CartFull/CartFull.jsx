import { useSelector, useDispatch } from "react-redux";
import { useTheme } from "@emotion/react";
import {
  CartContainer,
  CartItemsContainer,
  CartButtonsContainer,
} from "./CartFull.styles";
import CartItem from "../CartItem/CartItem";
import { Button } from "../../ui/Button";
import Stepper from "../../layout/Stepper/Stepper";

const CartFull = ({ title }) => {
  // const dispatch = useDispatch();
  const theme = useTheme();
  const { cart } = useSelector((state) => state);
  console.log(cart);

  const colors = [
    theme.palette.secondary.A100,
    {
      // background: theme.palette.primary[100],
      // borderColor: theme.palette.primary[500],
    },
  ];

  return (
    <CartContainer component={"main"}>
      <Stepper />
      <CartItemsContainer>
        {cart.productsList.map((item, index) => (
          <CartItem key={index} data={item} color={`${colors[index % 2]}`} />
        ))}
      </CartItemsContainer>
      <CartButtonsContainer>
        <Button name="Vaciar carrito" variant="contained" type="primary" />
        <Button name={title} variant="contained" type="primary" />
      </CartButtonsContainer>
    </CartContainer>
  );
};

export default CartFull;
