import { useLocation } from "react-router-dom";
import { SearchContainer, SearchTitle } from "./SearchPage.styles";

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
