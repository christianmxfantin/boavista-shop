import { Box, TextField, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const ProductPriceCard = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(4), //32px
}));

export const ProductPriceTitle = styled(Typography)(() => ({
  fontWeight: 600,
}));

export const ProductPriceContainer = styled(Box)(() => ({
  display: "flex",
}));

export const ProductPriceInput = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-input": {
    padding: theme.spacing(1), //8px
  },
}));
