import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const CartContainer = styled(Box)(({ theme }) => ({
  maxHeight: "380px",
  overflowY: "auto",
  "&::-webkit-scrollbar": {
    width: "thin",
  },
}));
