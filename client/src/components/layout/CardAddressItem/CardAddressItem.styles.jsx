import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const MyCardsItemContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  marginBottom: theme.spacing(1),
  padding: theme.spacing(1),
  borderRadius: theme.spacing(1), //8px
}));

export const ItemTitleContainer = styled(Typography)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
}));

export const ItemTitle = styled(Typography)(({ theme }) => ({
  marginLeft: theme.spacing(2),
}));

export const ItemData = styled(Typography)(({ theme }) => ({
  marginLeft: theme.spacing(2),
}));
