import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useLocation } from "react-router-dom";

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

const SearchPage = () => {
  let { search } = useLocation();
  let query = new URLSearchParams(search);

  return (
    <SearchContainer>
      <SearchTitle variant="h4">Búsqueda</SearchTitle>
      <p>
        Estás buscando: <b>{query}</b>
      </p>
    </SearchContainer>
  );
};

export default SearchPage;
