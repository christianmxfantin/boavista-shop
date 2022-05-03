import React from "react";
import { useTheme } from "@emotion/react";
import {
  Container as CartEmptyImage,
  Container,
  Typography as CartEmptyTitle,
} from "@mui/material";
import CartImage from "../../images/cart-empty.svg";

const CartEmpty = () => {
  const theme = useTheme();

  return (
    <>
      <Container
        sx={{ marginTop: "150px", display: "flex", flexDirection: "column" }}
      >
        <CartEmptyImage sx={{ textAlign: "center" }}>
          <img
            src={CartImage}
            alt=""
            style={{
              padding: "0px !important",
              margin: "0px",
              width: "30%",
              heigth: "30%",
              objectFit: "cover",
            }}
          />
        </CartEmptyImage>
        <CartEmptyTitle
          component="div"
          variant="h5"
          sx={{
            marginTop: "32px",
            textAlign: "center",
            color: `${theme.palette.grey[500]}`,
          }}
        >
          Todavía no hay productos por aquí
        </CartEmptyTitle>
      </Container>
    </>
  );
};

export default CartEmpty;
