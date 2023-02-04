import { ListContainer, ListTitle } from "./List.styles";

const List = ({ data }) => {
  return (
    <ListContainer>
      <ListTitle variant="h4">Listado de {data}</ListTitle>
    </ListContainer>
  );
};

export default List;
