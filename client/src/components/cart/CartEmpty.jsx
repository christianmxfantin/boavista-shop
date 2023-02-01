import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useTheme } from "@emotion/react";
import { CartEmptySvg } from "../ui/Svg";

const CartEmptyContainer = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(8), //64px,
  textAlign: "center",
}));

const CartEmptyTitle = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(4), //32px,
  color: theme.palette.primary[500],
}));

const CartEmpty = () => {
  const theme = useTheme();

  return (
    <CartEmptyContainer>
      <CartEmptySvg
        style={{
          width: "180px",
          heigth: "180px",
          stroke: `${theme.palette.primary[500]}`,
        }}
      ></CartEmptySvg>
      <CartEmptyTitle component="div" variant="h5">
        Todavía no hay productos por aquí
      </CartEmptyTitle>
    </CartEmptyContainer>
  );
};

export default CartEmpty;
