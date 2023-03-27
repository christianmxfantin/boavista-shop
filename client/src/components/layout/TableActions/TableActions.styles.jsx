import { Box, Modal } from "@mui/material";
import { styled } from "@mui/material/styles";

export const TableActionsModal = styled(Modal)(({ theme }) => ({
  //   border: 0,
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
