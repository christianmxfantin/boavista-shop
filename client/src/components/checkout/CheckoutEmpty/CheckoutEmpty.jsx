import { useTheme } from "@emotion/react";
import {
  CheckoutEmptyContainer,
  CheckoutEmptyTitle,
} from "./CheckoutEmpty.styles";
import { CheckoutEmptySvg } from "../../ui/Svg";

const CheckoutEmpty = () => {
  const theme = useTheme();

  return (
    <CheckoutEmptyContainer component={"main"}>
      <CheckoutEmptySvg
        style={{
          width: "180px",
          heigth: "180px",
          stroke: `${theme.palette.primary[500]}`,
        }}
      ></CheckoutEmptySvg>
      <CheckoutEmptyTitle component="div" variant="h5">
        Todavía no hay productos por aquí
      </CheckoutEmptyTitle>
    </CheckoutEmptyContainer>
  );
};

export default CheckoutEmpty;
