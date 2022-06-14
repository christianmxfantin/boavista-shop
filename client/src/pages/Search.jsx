import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const SearchContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  color: theme.palette.primary[500],
}));

const SearchTitle = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(3), //24px
  fontWeight: "500",
}));

const Search = () => {
  return (
    <SearchContainer>
      <SearchTitle variant="h4">Búsqueda</SearchTitle>
    </SearchContainer>
  );
};

export default Search;
