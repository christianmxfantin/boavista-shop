import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearCart, delFromCart } from "../actions/cart";
import { Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import CartEmpty from "../components/cart/CartEmpty";
import CartItem from "../components/cart/CartItem";

const CartFull = styled(Box)(() => ({
  //styles
}));

const CartTitle = styled(Typography)(() => ({
  //styles
}));

const CartButtonClean = styled(Button)(({ theme }) => ({
  color: theme.palette.secondary.A100,
  backgroundColor: theme.palette.primary[500],
}));

const Cart = () => {
  //ver de donde traer la data de cart
  //let cart = [];
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const { cart } = state.cart;

  return cart.length === 0 ? (
    <CartEmpty />
  ) : (
    <CartFull>
      <CartTitle>Elementos en el Carrito</CartTitle>
      <CartButtonClean onClick={() => dispatch(clearCart())}>
        Limpiar
      </CartButtonClean>
      {cart.map((item, index) => (
        <CartItem
          key={index}
          data={item}
          delOneFromCart={() => dispatch(delFromCart(item.id))}
          delAllFromCart={() => dispatch(delFromCart(item.id, true))}
        />
      ))}
    </CartFull>
  );
};

export default Cart;
