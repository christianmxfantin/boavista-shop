import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const CheckoutContainer = styled(Box)(({ theme }) => ({
  heigth: "100%",
  margin: theme.spacing(2), //16px
  padding: theme.spacing(3), //24px
  backgroundColor: theme.palette.primary[50],
  borderRadius: theme.spacing(1.5), //12px
}));

// export const CartItemsContainer = styled(Box)(({ theme }) => ({
//   maxHeight: "380px",
//   overflowY: "auto",
//   "&::-webkit-scrollbar": {
//     width: "thin",
//   },
// }));
