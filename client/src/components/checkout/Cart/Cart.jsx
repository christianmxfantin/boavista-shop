import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useTheme } from "@emotion/react";
import {
  CartContainer,
  TotalContainer,
  TotalTitle,
  TotalPrice,
} from "./Cart.styles";
import CartItem from "../CartItem/CartItem";
import Underline from "../../ui/Underline";

const Cart = () => {
  // const dispatch = useDispatch();
  const theme = useTheme();
  const { cart } = useSelector((state) => state);
  console.log(cart);

  const [total, setTotal] = useState(0);
  const totalCount = (price) => {
    setTotal(total + price);
  };

  const totalProduct = (price) => {
    totalCount(price);
  };

  return (
    <CartContainer>
      {cart.productsList.map((item, index) => (
        <CartItem
          key={index}
          data={item}
          color={index % 2 === 0 && theme.palette.secondary.A100}
          totalCount={totalProduct}
        />
      ))}
      <Underline heigth={1} color={theme.palette.primary[500]} />
      <TotalContainer>
        <TotalTitle>Total</TotalTitle>
        <TotalPrice variant="h6">$ {total}</TotalPrice>
      </TotalContainer>
    </CartContainer>
  );
};

export default Cart;
