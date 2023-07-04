import { Box, TextField, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const ConfirmationDataContainer = styled(Box)(({ theme }) => ({
  width: "70%",
  marginBottom: theme.spacing(2), //16px,
  padding: theme.spacing(1), //8px
  borderRadius: theme.spacing(1), //8px,
  color: theme.palette.primary[500],
  backgroundColor: theme.palette.secondary.A100,
}));

export const DataTitleContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: theme.spacing(1), //8px,
}));

export const DataTitle = styled(Typography)(({ theme }) => ({
  //styles
}));

export const DataEdit = styled(Box)(({ theme }) => ({
  //styles
}));

export const DataInfoContainer = styled(Typography)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  padding: theme.spacing(1), //8px
  borderRadius: theme.spacing(1), //8px,
  color: theme.palette.primary[500],
  backgroundColor: theme.palette.primary[100],
}));

export const InputData = styled(TextField)(({ theme }) => ({
  color: theme.palette.primary[500],
  backgroundColor: theme.palette.primary[100],
}));
