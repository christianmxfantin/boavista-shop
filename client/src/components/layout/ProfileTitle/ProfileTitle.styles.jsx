import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const ProfileTitleContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  margin: `${theme.spacing(3)} 0 ${theme.spacing(3)} 0`, //24px y 24px
  alignItems: "center",

  width: "500px",
  padding: theme.spacing(2),
  borderRadius: theme.spacing(1),
  backgroundColor: theme.palette.primary[50],
}));
