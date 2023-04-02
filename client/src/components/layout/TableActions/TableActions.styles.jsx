import { Box, Modal, TextField, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const TableActionsModal = styled(Modal)(({ theme }) => ({
  // styles
}));

export const TableActionsContainer = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  padding: theme.spacing(2),
  borderRadius: theme.spacing(1),
  backgroundColor: theme.palette.secondary.A100,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
}));

export const TableActionsTitle = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(5),
  borderRadius: theme.spacing(1),
  display: "flex",
  justifyContent: "center",
  color: theme.palette.secondary.A100,
  // fontWeight: 500,
}));

export const TableEditContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  marginBottom: theme.spacing(8),
}));

export const TableImage = styled(Box)(({ theme }) => ({
  width: "150px",
  height: "150px",
  backgroundColor: theme.palette.primary[300],
  color: theme.palette.secondary.A100,
  borderRadius: theme.spacing(1),
  marginRight: theme.spacing(3),
}));

export const TableInputContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
}));

export const TableNameInput = styled(TextField)(({ theme }) => ({
  padding: "8px",
}));

export const TablePriceInput = styled(TextField)(({ theme }) => ({
  padding: "8px",
}));

export const TableButtonsContainer = styled(Box)(({ theme }) => ({
  display: "flex",
}));

export const TableDeleteContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  marginBottom: theme.spacing(6),
}));

export const TableDeleteParagraph = styled(Typography)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

export const TableDeleteLine1 = styled(Typography)(({ theme }) => ({
  //style
}));

export const TableDeleteLine2 = styled(Typography)(({ theme }) => ({
  fontWeight: "bold",
  margin: "8px 0 8px 0",
}));

export const TableDeleteLine3 = styled(Typography)(({ theme }) => ({
  //style
}));