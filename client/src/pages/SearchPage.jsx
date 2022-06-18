import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useLocation } from "react-router-dom";

const SearchContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  // alignItems: "center",
  color: theme.palette.primary[500],
}));

const SearchTitle = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(3), //24px
  paddingLeft: theme.spacing(3), //24px
  fontWeight: "400",
}));

const SearchPage = () => {
  let totResults = 2;
  let { search } = useLocation();

  return (
    <SearchContainer>
      <SearchTitle variant="h6">
        {`Se muestran ${totResults} resultados para la búsqueda: `}
        <b>{search.slice(3).replace(/\+/g, " ")}</b>
      </SearchTitle>
    </SearchContainer>
  );
};

export default SearchPage;
