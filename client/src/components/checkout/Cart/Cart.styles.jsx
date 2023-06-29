import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const CartContainer = styled(Box)(({ theme }) => ({
  //styles
}));

export const ProductsContainer = styled(Box)(({ theme }) => ({
  maxHeight: "350px",
  overflowY: "auto",
  "&::-webkit-scrollbar": {
    width: "thin",
  },
}));

export const TotalContainer = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(1), //8px
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

export const TotalTitle = styled(Typography)(({ theme }) => ({
  marginRight: theme.spacing(2), //16px
  color: `${theme.palette.primary[500]}`,
  fontWeight: 600,
}));

export const TotalPrice = styled(Typography)(({ theme }) => ({
  color: `${theme.palette.error[500]}`,
  fontWeight: 600,
}));

export const CartButtonsContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  marginTop: "auto",
  justifyContent: "space-between",
}));
