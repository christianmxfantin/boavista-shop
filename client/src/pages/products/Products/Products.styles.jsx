import { Box, Grid, Typography } from "@mui/material";
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

export const ProductSearchTitle = styled(Typography)(({ theme }) => ({
  paddingLeft: theme.spacing(1), //8px
  fontWeight: "400",
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
