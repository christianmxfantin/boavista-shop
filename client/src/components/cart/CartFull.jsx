import { useSelector, useDispatch } from "react-redux";
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
