import { Box, Select, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const ProductTitleContainer = styled(Box)(() => ({
  display: "flex",
}));

export const ProductCategory = styled(Box)(({ theme }) => ({
  paddingTop: theme.spacing(4), //32px,
}));

export const ProductCategoryTitle = styled(Typography)(({ theme }) => ({
  paddingLeft: theme.spacing(1), //12px
  color: theme.palette.primary[500],
  fontWeight: 500,
}));

export const ProductCategoryQuantity = styled(Typography)(({ theme }) => ({
  paddingLeft: theme.spacing(1), //12px
  color: theme.palette.primary[500],
}));

export const ProductOrderByContainer = styled(Box)(({ theme }) => ({
  marginLeft: "auto",
  padding: theme.spacing(6, 1.5, 0, 0), //48px y 12px,
  display: "flex",
  alignItems: "center",
}));

export const ProductOrderBySelect = styled(Select)(({ theme }) => ({
  width: "150px",
  padding: theme.spacing(0.5), //4px,
}));
