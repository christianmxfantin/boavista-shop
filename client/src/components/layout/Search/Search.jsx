import {
  SearchContainer,
  SearchIconWrapper,
  StyledInputBase,
} from "./Search.styles";
import { Icon as SearchIcon } from "../../ui/Icon";
import { createSearchParams, useNavigate } from "react-router-dom";

const Search = () => {
  let q;
  let navigate = useNavigate();

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      navigate({
        pathname: "/products/search",
        search: `?${createSearchParams({
          q,
        })}`,
      });
      e.target.blur();
    }
  };

  return (
    <>
      <SearchContainer>
        <SearchIconWrapper>
          <SearchIcon name="Search" size={22} />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Buscar productos…"
          onKeyDown={handleKeyDown}
          onChange={(e) => (q = e.target.value)}
        />
      </SearchContainer>
    </>
  );
};

export default Search;
