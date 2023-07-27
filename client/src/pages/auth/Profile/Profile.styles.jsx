import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const ProfileContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  color: theme.palette.primary[500],
}));
