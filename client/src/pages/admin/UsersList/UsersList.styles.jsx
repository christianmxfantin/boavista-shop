import { Box, List } from "@mui/material";
import { styled } from "@mui/material/styles";

export const UsersListContainer = styled(List)(({ theme }) => ({
  borderRadius: theme.spacing(1.5), //12px
  backgroundColor: theme.palette.primary[100],
}));

export const IconsContainer = styled(Box)(({ theme }) => ({
  display: "flex",
}));
