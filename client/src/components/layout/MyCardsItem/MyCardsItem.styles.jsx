import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const MyCardsItemContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  marginBottom: theme.spacing(1),
  padding: theme.spacing(1),
  borderRadius: theme.spacing(1), //8px
}));

export const MyCardsItemText = styled(Typography)(({ theme }) => ({
  // width: "100%",
  marginLeft: theme.spacing(2),
}));
