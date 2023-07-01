import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useTheme } from "@emotion/react";
import {
  CartContainer,
  TotalContainer,
  TotalTitle,
  TotalPrice,
  ProductsContainer,
  CartButtonsContainer,
} from "./Cart.styles";
import CartItem from "../CartItem/CartItem";
import Underline from "../../ui/Underline";
import { Button } from "@mui/material";

const Cart = ({ handleRight, setStepperData }) => {
  // const dispatch = useDispatch();
  let totalPrice = 0;
  const theme = useTheme();
  // para pedir data de CartItem
  // const [cartData, setCartData] = useState({});
  const { cart } = useSelector((state) => state);
  const productList = cart.productsList;

  const handleCleanCart = () => {
    //Vaciar Carrito
    console.log("Vaciar Carrito");
  };

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
              // setCartData={setCartData}
            />
          );
        })}
      </ProductsContainer>
      <Underline heigth={1} color={theme.palette.primary[500]} />
      <TotalContainer>
        <TotalTitle variant="h5">Total:</TotalTitle>
        <TotalPrice variant="h5">$ {totalPrice}</TotalPrice>
      </TotalContainer>
      <CartButtonsContainer>
        <Button
          variant="contained"
          sx={{
            "&:hover": {
              backgroundColor: theme.palette.secondary[500],
              color: theme.palette.primary[500],
            },
          }}
          onClick={handleCleanCart}
        >
          Vaciar Carrito
        </Button>
        <Button
          variant="contained"
          onClick={() => {
            setStepperData((prevData) => ({ ...prevData, cart: productList }));
            handleRight();
          }}
          sx={{
            "&:hover": {
              backgroundColor: theme.palette.secondary[500],
              color: theme.palette.primary[500],
            },
          }}
        >
          Continuar
        </Button>
      </CartButtonsContainer>
    </CartContainer>
  );
};

export default Cart;
