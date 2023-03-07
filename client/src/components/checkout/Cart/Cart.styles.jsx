import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const CartContainer = styled(Box)(({ theme }) => ({
  maxHeight: "380px",
  overflowY: "auto",
  "&::-webkit-scrollbar": {
    width: "thin",
  },
}));

export const TotalContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

export const TotalTitle = styled(Typography)(({ theme }) => ({
  marginRigth: theme.spacing(2), //16px
  color: `${theme.palette.primary[500]}`,
  fontWeight: 600,
}));

export const TotalPrice = styled(Typography)(({ theme }) => ({
  color: `${theme.palette.error[500]}`,
  fontWeight: 600,
}));
