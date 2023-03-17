import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const ConfirmationDataContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  width: "70%",
  marginBottom: "16px",
  padding: "8px",
  borderRadius: theme.spacing(1), //8px,
  backgroundColor: theme.palette.secondary.A100,
}));

export const DataInfo = styled(Typography)(({ theme }) => ({
  //styles
}));

export const DataEdit = styled(Box)(({ theme }) => ({
  //styles
}));
