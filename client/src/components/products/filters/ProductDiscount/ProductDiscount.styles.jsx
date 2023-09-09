import { Box, Select, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const ProductDiscountCard = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(3), //24px
}));

export const ProductDiscountTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
}));

export const ProductDiscountSelect = styled(Select)(({ theme }) => ({
  width: "100%",
  // marginTop: theme.spacing(4), //32px,
  padding: theme.spacing(1), //8px,
}));
