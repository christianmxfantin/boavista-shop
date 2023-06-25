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

  const handleCleanInput = () => {
    setSearchResults([]);
    setSelectedItemIndex(-1);
    setSearchValue("");
    inputRef.current.blur();
  };

  const handleListItemClick = (index) => {
    setSelectedItemIndex(index);
    setSearchValue(searchResults[index]?.name);
    console.log(setSearchValue(searchResults[index]?.name));
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowUp" && selectedItemIndex > 0) {
      setSelectedItemIndex(selectedItemIndex - 1);
      setSearchValue(searchResults[selectedItemIndex - 1]?.name || "");
    } else if (
      e.key === "ArrowDown" &&
      selectedItemIndex < searchResults.length - 1
    ) {
      setSelectedItemIndex(selectedItemIndex + 1);
      setSearchValue(searchResults[selectedItemIndex + 1]?.name || "");
    } else if (e.key === "Enter") {
      let q = e.target.value;
      navigate({
        pathname: "/products",
        search: `?${createSearchParams({
          q,
        })}`,
      });
      handleCleanInput();
    }
  };

  const handleSearch = (e) => {
    const query = e.target.value
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, (char) => "");
    const queryWords = query.split(" ");
    const filteredResults = products.filter((product) => {
      const nameWords = product.name
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, (char) => "")
        .split(" ");
      return queryWords.every((queryWord) =>
        nameWords.some((nameWord) => nameWord.startsWith(queryWord))
      );
    });
    setSearchResults(filteredResults.slice(0, 3));
    setSearchValue(query);
  };

  const renderResultText = (text) => {
    const lowerText = text
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, (char) => "");
    const lowerQuery = searchValue
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, (char) => "");
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
    <SearchContainer>
      <SearchIconWrapper>
        <SearchIcon name="Search" size={22} />
      </SearchIconWrapper>
      <StyledInputBase
        name="search"
        placeholder="Buscar"
        value={searchValue}
        inputRef={inputRef}
        onChange={handleSearch}
        onKeyDown={handleKeyDown}
        onBlur={handleCleanInput}
        endAdornment={
          <Popper
            open={searchValue !== "" && searchResults.length > 0}
            anchorEl={inputRef.current}
            placement="top-start"
            sx={{
              display: searchResults.length === 0 && "none",
              zIndex: theme.zIndex.appBar + 1,
            }}
          >
            <Paper sx={{ width: inputRef.current?.offsetWidth || "auto" }}>
              <List>
                {searchResults.map((result, index) => (
                  <ListItem
                    key={result.id}
                    sx={{
                      cursor: "pointer",
                      backgroundColor:
                        selectedItemIndex === index
                          ? theme.palette.primary[100]
                          : "inherit",
                      color:
                        selectedItemIndex === index
                          ? theme.palette.primary[600]
                          : "inherit",
                      "&:hover": {
                        fontWeight: 500,
                        backgroundColor: theme.palette.primary[100],
                        color: theme.palette.primary[600],
                      },
                    }}
                  >
                    <ListItemText
                      primary={renderResultText(result.name)}
                      onClick={() => handleListItemClick(index)}
                    />
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Popper>
        }
      />
    </SearchContainer>
  );
};

export default Search;
