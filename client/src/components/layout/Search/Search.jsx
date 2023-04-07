import { useRef, useState } from "react";
import { createSearchParams, useNavigate } from "react-router-dom";
import { useTheme } from "@emotion/react";
import {
  SearchContainer,
  SearchIconWrapper,
  StyledInputBase,
} from "./Search.styles";
import { Icon as SearchIcon } from "../../ui/Icon";
import { products } from "../../products/productList";
import { List, ListItem, ListItemText, Paper, Popper } from "@mui/material";

const Search = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selectedItemIndex, setSelectedItemIndex] = useState(-1);
  const inputRef = useRef(null);

  const handleKeyDown = (e) => {
    let q = e.target.value;
    if (e.key === "ArrowUp" && selectedItemIndex > 0) {
      setSelectedItemIndex(selectedItemIndex - 1);
    } else if (
      e.key === "ArrowDown" &&
      selectedItemIndex < searchResults.length - 1
    ) {
      setSelectedItemIndex(selectedItemIndex + 1);
    } else if (e.key === "Enter") {
      navigate({
        pathname: "/products",
        search: `?${createSearchParams({
          q,
        })}`,
      });
      e.target.blur();
    }
  };

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    const filteredResults = products.filter((product) => {
      const nameWords = product.name.toLowerCase().split(" ");
      return nameWords.some((word) => word.startsWith(query));
    });
    setSearchResults(filteredResults.slice(0, 3));
    setSearchValue(query);
  };

  const renderResultText = (text) => {
    const lowerText = text.toLowerCase();
    const lowerQuery = searchValue.toLowerCase();
    const startIndex = lowerText.indexOf(lowerQuery);
    if (startIndex === -1) {
      return text;
    }
    const beforeMatch = text.slice(0, startIndex);
    const match = text.slice(startIndex, startIndex + searchValue.length);
    const afterMatch = text.slice(startIndex + searchValue.length);
    return (
      <>
        {beforeMatch}
        <b>{match}</b>
        {afterMatch}
      </>
    );
  };

  return (
    <>
      <SearchContainer>
        <SearchIconWrapper>
          <SearchIcon name="Search" size={22} />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Buscar"
          value={searchValue}
          onChange={handleSearch}
          onKeyDown={handleKeyDown}
          inputRef={inputRef}
          endAdornment={
            <Popper
              open={searchValue !== "" && searchResults.length > 0}
              anchorEl={inputRef.current}
              placement="top-start"
              sx={{ zIndex: theme.zIndex.appBar + 1 }}
            >
              <Paper sx={{ width: inputRef.current?.offsetWidth || "auto" }}>
                <List>
                  {searchResults.map((result) => (
                    <ListItem
                      key={result.id}
                      // onClick={() => handleResultClick(result)}
                    >
                      <ListItemText
                        primary={renderResultText(result.name)}
                        sx={{
                          backgroundColor: !selectedItemIndex
                            ? theme.palette.primary[200]
                            : "inherit",
                        }}
                      />
                    </ListItem>
                  ))}
                </List>
              </Paper>
            </Popper>
          }
        />
      </SearchContainer>
    </>
  );
};

export default Search;
