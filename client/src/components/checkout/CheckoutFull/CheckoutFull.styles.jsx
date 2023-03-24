import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const CheckoutContainer = styled(Box)(({ theme }) => ({
  height: "75vh",
  display: "flex",
  flexDirection: "column",
  margin: theme.spacing(1.5), //12px
  padding: theme.spacing(2), //16px
  backgroundColor: theme.palette.primary[50],
  borderRadius: theme.spacing(1.5), //12px
}));
