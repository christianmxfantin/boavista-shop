import { useSelector, useDispatch } from "react-redux";
import { clearCart, delFromCart } from "../../actions/cart";
import { Box, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import CartItem from "../cart/CartItem";

const CartContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  heigth: "100%",
}));

const CartButtonClean = styled(Button)(({ theme }) => ({
  color: theme.palette.secondary.A100,
  backgroundColor: theme.palette.primary[500],
}));

const CartFull = () => {
  //ver de donde traer la data de cart
  //let cart = [];
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const { cart } = state.cart;

  return (
    <>
      <CartContainer>
        {cart.map((item) => (
          <CartItem
            key={item.id}
            data={item}
            delOneFromCart={() => dispatch(delFromCart(item.id))}
            delAllFromCart={() => dispatch(delFromCart(item.id, true))}
          />
        ))}
      </CartContainer>
      <CartButtonClean onClick={() => dispatch(clearCart())}>
        Limpiar
      </CartButtonClean>
    </>
  );
};

export default CartFull;
