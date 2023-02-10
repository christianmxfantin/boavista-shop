import { useTheme } from "@emotion/react";
import { CartEmptyContainer, CartEmptyTitle } from "./CartEmpty.styles";
import { CartEmptySvg } from "../../ui/Svg";

const CartEmpty = () => {
  const theme = useTheme();

  return (
    <CartEmptyContainer component={"main"}>
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
