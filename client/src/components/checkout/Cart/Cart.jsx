import { useSelector, useDispatch } from "react-redux";
import { useTheme } from "@emotion/react";
import {
  CartContainer,
  TotalContainer,
  TotalTitle,
  TotalPrice,
  ProductsContainer,
} from "./Cart.styles";
import CartItem from "../CartItem/CartItem";
import Underline from "../../ui/Underline";

const Cart = () => {
  // const dispatch = useDispatch();
  let totalPrice = 0;
  const theme = useTheme();
  const { cart } = useSelector((state) => state);
  console.log(cart);

  return (
    <CartContainer>
      <ProductsContainer>
        {cart.productsList.map((item, index) => {
          totalPrice += item.price;
          return (
            <CartItem
              key={index}
              data={item}
              color={index % 2 === 0 && theme.palette.secondary.A100}
            />
          );
        })}
      </ProductsContainer>
      <Underline heigth={1} color={theme.palette.primary[500]} />
      <TotalContainer>
        <TotalTitle variant="h5">Total:</TotalTitle>
        <TotalPrice variant="h5">$ {totalPrice}</TotalPrice>
      </TotalContainer>
    </CartContainer>
  );
};

export default Cart;
