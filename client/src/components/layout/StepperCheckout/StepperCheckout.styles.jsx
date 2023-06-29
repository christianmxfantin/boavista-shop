import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const PaymentContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: theme.spacing(2),
}));
