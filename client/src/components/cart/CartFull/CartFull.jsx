import { useSelector, useDispatch } from "react-redux";
import { CartContainer, CartButtonClean } from "./CartFull.styles";
import CartItem from "../CartItem/CartItem";

const CartFull = () => {
  // const dispatch = useDispatch();
  const { cart } = useSelector((state) => state);
  console.log(cart);

  return (
    <>
      <CartContainer>
        {cart.productsList.map((item, index) => (
          <CartItem key={index} data={item} />
        ))}
      </CartContainer>
      <CartButtonClean>Limpiar</CartButtonClean>
    </>
  );
};

export default CartFull;
