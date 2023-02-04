import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const ProductCard = styled(Card)(({ theme }) => ({
  borderRadius: `${theme.spacing(0.5)}`,
  height: "100%",
}));

export const ProductCardImage = styled(CardMedia)(({ theme }) => ({
  //styles
}));

export const ProductCardContent = styled(CardContent)(({ theme }) => ({
  padding: `${theme.spacing(1)} !important`,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
}));

export const ProductName = styled(Typography)(({ theme }) => ({
  color: `${theme.palette.primary[500]}`,
  fontWeight: 500,
  "&:hover": {
    color: `${theme.palette.secondary[500]}`,
    fontWeight: 600,
  },
}));

export const ProductCardData = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
}));

export const ProductPrice = styled(Typography)(({ theme }) => ({
  color: `${theme.palette.primary[500]}`,
}));
