import { AppBar, Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const NavbarContainer = styled(AppBar)(({ theme }) => ({
  padding: theme.spacing(1), //8px;
  display: "flex",
  justifyContent: "space-between",
}));

export const LogoContainer = styled(Box)(({ theme }) => ({
  width: 270,
  height: 60,
  paddingTop: theme.spacing(0.5), //4px
  display: { xs: "none", md: "flex" },
}));

export const NavbarChica = styled(Box)(({ theme }) => ({
  //styles
}));

export const SearchContainer = styled(Box)(({ theme }) => ({
  marginLeft: "auto",
  marginRight: theme.spacing(2), //16px
}));
