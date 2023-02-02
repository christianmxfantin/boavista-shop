import { Box, Button } from "@mui/material";
import { styled } from "@mui/material/styles";

export const CartContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  heigth: "100%",
}));

export const CartButtonClean = styled(Button)(({ theme }) => ({
  color: theme.palette.secondary.A100,
  backgroundColor: theme.palette.primary[500],
}));
