import { Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const ItemCard = styled(Box)(({ theme }) => ({
  height: "100%",
  padding: theme.spacing(4, 2, 0, 3), //32px 16px 0px 24px
  backgroundColor: theme.palette.primary[50],
  color: theme.palette.primary[500],
}));

export const ItemTitle = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  padding: theme.spacing(2.5), //20px
  borderRadius: theme.spacing(1), //8px,
  backgroundColor: theme.palette.primary[300],
  color: theme.palette.secondary.A100,
}));

export const ItemTitleBack = styled(Typography)(({ theme }) => ({
  cursor: "pointer",
  "&:hover": {
    color: theme.palette.secondary[500],
  },
}));

export const ItemData = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  marginTop: theme.spacing(2), //16px
}));

export const ItemImagesContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: theme.spacing(2), //16px
  borderRadius: theme.spacing(1), //8px
  backgroundColor: theme.palette.primary[100],
}));

export const ItemInfoContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  padding: theme.spacing(2), //16px
  border: `1px solid ${theme.palette.primary[300]}`,
  borderRadius: theme.spacing(1), //8px
  backgroundColor: theme.palette.secondary.A100,
}));

export const ItemInfoTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 500,
}));

export const ItemInfoPrice = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(2), //16px
  fontWeight: 300,
}));

export const ItemInfoStock = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(5), //40px
}));

export const ItemInfoAddToCart = styled(Button)(({ theme }) => ({
  marginTop: "auto",
  backgroundColor: theme.palette.primary[300],
  color: theme.palette.secondary.A100,
  "&:hover": {
    backgroundColor: theme.palette.secondary[500],
    color: theme.palette.primary[500],
  },
}));
