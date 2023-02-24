import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const CartContainer = styled(Box)(({ theme }) => ({
  heigth: "100%",
  margin: theme.spacing(3), //24px
  padding: theme.spacing(3), //24px
  backgroundColor: theme.palette.primary[50],
  borderRadius: theme.spacing(1.5), //12px
}));

export const CartItemsContainer = styled(Box)(({ theme }) => ({
  //styles para scrollear
}));

export const CartButtonsContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
}));
