import React from "react";
import CartItem from "../components/CartItem";
import { cartReducer } from "../reducers/cart";
import "../styles/pages/Cart.css";

const Cart = () => {
  let cart = [];
  const delFromCart = () => {};
  const clearCart = () => {};
  return (
    <>
      <div className="cart">Cart</div>
      <button onClick={clearCart}>Limpiar</button>
      {cart.map((item, index) => (
        <CartItem key={index} data={item} delFromCart={delFromCart} />
      ))}
    </>
  );
};

export default Cart;
