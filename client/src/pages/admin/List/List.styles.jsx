import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const ListContainer = styled(Box)(({ theme }) => ({
  height: "75vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  margin: theme.spacing(1.5), //12px
  padding: theme.spacing(2), //16px
  backgroundColor: theme.palette.primary[50],
  borderRadius: theme.spacing(1.5), //12px
}));

export const ListTitle = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2), //16px
  color: theme.palette.primary[500],
  fontWeight: "500",
}));

export const ListData = styled(Box)(({ theme }) => ({
  width: "100%",
}));

export const ButtonsContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  padding: `0 ${theme.spacing(2)} 0 ${theme.spacing(2)}`,
}));
