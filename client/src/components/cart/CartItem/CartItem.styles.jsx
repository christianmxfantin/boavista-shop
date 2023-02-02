import { Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const CartItemContainer = styled(Box)(({ theme }) => ({
  margin: "16px",
  padding: "16px",
  width: "300px",
  border: `1px solid ${theme.palette.primary[500]}`,
  borderRadius: "8px",
}));

export const CartItemTitle = styled(Typography)(({ theme }) => ({
  //styles
}));

export const CartItemPrice = styled(Typography)(({ theme }) => ({
  //styles
}));

export const CartItemQuantity = styled(Typography)(({ theme }) => ({
  //styles
}));

export const CartItemDeleteOne = styled(Button)(({ theme }) => ({
  marginTop: "8px",
  marginRight: "8px",
  color: theme.palette.secondary.A100,
  backgroundColor: theme.palette.primary[500],
}));

export const CartItemDeleteAll = styled(Button)(({ theme }) => ({
  marginTop: "8px",
  color: theme.palette.secondary.A100,
  backgroundColor: theme.palette.primary[500],
}));
