import { ListContainer, ListTitle, ListData } from "./List.styles";
import UsersList from "../UsersList/UsersList";
import ProductsList from "../ProductsList/ProductsList";

const List = ({ data }) => {
  return (
    <main>
      <ListContainer>
        <ListTitle variant="h4">Listado de {data}</ListTitle>
        <ListData>
          {data === "Usuarios" ? <UsersList /> : <ProductsList />}
        </ListData>
      </ListContainer>
    </main>
  );
};

export default List;
