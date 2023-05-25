import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const ButtonContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  marginTop: theme.spacing(2), //16px
}));
