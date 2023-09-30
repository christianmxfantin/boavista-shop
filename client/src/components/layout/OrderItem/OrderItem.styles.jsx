import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const OrderItemContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  marginTop: theme.spacing(1), //8px
  padding: theme.spacing(1), //8px
  borderRadius: theme.spacing(1), //8px
  backgroundColor: theme.palette.primary[100],
}));

export const OrderID = styled(Box)(({ theme }) => ({
  marginRight: theme.spacing(2), //16px
}));

export const OrderTitle = styled(Box)(({ theme }) => ({
  //styles
}));

export const DeleteOrder = styled(Box)(({ theme }) => ({
  //styles
}));

export const DeleteIconContainer = styled(Box)(({ theme }) => ({
  //styles
}));
