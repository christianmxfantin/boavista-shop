import { Box, Button } from "@mui/material";
import { styled } from "@mui/material/styles";

export const CartContainer = styled(Box)(({ theme }) => ({
  heigth: "100%",
  margin: theme.spacing(3), //24px
  padding: theme.spacing(3), //24px
  backgroundColor: theme.palette.primary[50],
  borderRadius: theme.spacing(1.5), //12px
}));

export const CartButtonsContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
}));

export const CartButtonClean = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(3), //24px
  color: theme.palette.secondary.A100,
  backgroundColor: theme.palette.primary[500],
  "&:hover": {
    backgroundColor: theme.palette.secondary[500],
    color: theme.palette.primary[500],
  },
}));

export const CartButtonLeft = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(3), //24px
  color: theme.palette.secondary.A100,
  backgroundColor: theme.palette.primary[500],
  "&:hover": {
    backgroundColor: theme.palette.secondary[500],
    color: theme.palette.primary[500],
  },
}));
