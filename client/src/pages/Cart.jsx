import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearCart, delFromCart } from "../actions/cart";
import CartItem from "../components/CartItem";

const Cart = () => {
  //ver de donde traer la data de cart
  //let cart = [];
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const { cart } = state.cart;

  return (
    <>
      <div className="cart">Cart</div>
      <button onClick={() => dispatch(clearCart())}>Limpiar</button>
      {cart.map((item, index) => (
        <CartItem
          key={index}
          data={item}
          delOneFromCart={() => dispatch(delFromCart(item.id))}
          delAllFromCart={() => dispatch(delFromCart(item.id, true))}
        />
      ))}
    </>
  );
};

export default Cart;
