import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const FooterContainer = styled(Typography)(({ theme }) => ({
  padding: theme.spacing(2.5), //20px
  textAlign: "center",
  backgroundColor: theme.palette.primary[500],
  color: theme.palette.secondary.A100,
}));
