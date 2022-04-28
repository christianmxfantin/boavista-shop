import React from "react";
import { styled, alpha } from "@mui/material/styles";
import { InputBase } from "@mui/material";

//el siguiente tiene que venir del componente Icon
// import SearchIcon from "@mui/icons-material/Search";
import { Icon as SearchIcon } from "../ui/Icon";

const SearchContainer = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.tertiary.main, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.tertiary.main, 0.25),
    color: theme.palette.secondary.main,
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const Search = () => {
  return (
    <>
      <SearchContainer>
        <SearchIconWrapper>
          <SearchIcon name="Search" size={22} />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
        />
      </SearchContainer>
    </>
  );
};

export default Search;
