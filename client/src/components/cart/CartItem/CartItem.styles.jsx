import { Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const CartItemContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  padding: theme.spacing(3), //24px
  backgroundColor: theme.palette.secondary.A100,
  // border: `1px solid ${theme.palette.primary[500]}`,
  borderRadius: theme.spacing(1), //8px,
}));

export const CartItemImage = styled(Box)(({ theme }) => ({
  width: "100px",
  height: "100px",
}));

export const CartItemData = styled(Box)(({ theme }) => ({
  paddingLeft: theme.spacing(3), //24px
}));

export const CartItemTitle = styled(Typography)(({ theme }) => ({
  color: `${theme.palette.primary[500]}`,
  fontWeight: 500,
  "&:hover": {
    color: `${theme.palette.secondary[500]}`,
    cursor: "pointer",
  },
}));

export const CartItemPriceContainer = styled(Box)(({ theme }) => ({
  width: "70px",
  height: "30px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: theme.spacing(1), //8px
  border: `3px solid ${theme.palette.error[500]}`,
  borderRadius: "40px",
}));

export const CartItemPrice = styled(Typography)(({ theme }) => ({
  color: `${theme.palette.error[500]}`,
  fontWeight: 600,
}));

export const CartItemButtons = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginLeft: "auto",
}));
