import { Box, Grid, Select, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const ProductContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  color: theme.palette.primary[500],
}));

export const ProductFilters = styled(Box)(({ theme }) => ({
  margin: theme.spacing(4, 3.5, 2, 3), //32px, 28px, 16px, 24px
  padding: theme.spacing(4), //32px
  width: "30%",
  display: "flex",
  flexDirection: "column",
  borderRadius: theme.spacing(1.5), //12px
  backgroundColor: theme.palette.primary[50],
}));

export const ProductData = styled(Box)(() => ({
  //styles
}));

export const ProductTitleContainer = styled(Box)(() => ({
  display: "flex",
}));

export const ProductTitle = styled(Box)(({ theme }) => ({
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

export const ProductOrderByTitle = styled(Typography)(({ theme }) => ({
  paddingRight: theme.spacing(1), //8px,
  fontWeight: 500,
}));

export const ProductOrderBySelect = styled(Select)(({ theme }) => ({
  width: "150px",
  padding: theme.spacing(0.5), //4px,
}));

export const ProductListContainer = styled(Grid)(({ theme }) => ({
  maxWidth: "100%",
  margin: `${theme.spacing(0)} !important`,
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridAutoRows: "1fr",
}));

export const ProductListItem = styled(Grid)(({ theme }) => ({
  padding: `${theme.spacing(1.5, 1.5, 2, 0)} !important`, //12px y 12px
}));
