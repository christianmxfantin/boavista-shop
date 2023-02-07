import { ListContainer, ListTitle } from "./List.styles";

const List = ({ data }) => {
  return (
    <main>
      <ListContainer>
        <ListTitle variant="h4">Listado de {data}</ListTitle>
      </ListContainer>
    </main>
  );
};

export default List;
