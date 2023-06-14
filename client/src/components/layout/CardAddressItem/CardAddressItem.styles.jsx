import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const CardAddressItemContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  marginBottom: theme.spacing(1),
  padding: theme.spacing(1),
  borderRadius: theme.spacing(1), //8px
}));

export const IconContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
}));

export const ItemTitleContainer = styled(Typography)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
}));

export const ItemTitle = styled(Typography)(({ theme }) => ({
  marginLeft: theme.spacing(2),
  cursor: "pointer",
}));

export const ItemData = styled(Typography)(({ theme }) => ({
  marginLeft: theme.spacing(2),
  color: theme.palette.secondary.A100,
  fontWeight: "normal",
}));
