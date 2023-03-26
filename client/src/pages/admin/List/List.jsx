import { ListContainer, ListTitle, ListData } from "./List.styles";
import DashboardTable from "../../../components/layout/DashboardTable/DashboardTable";

const List = ({ data }) => {
  return (
    <main>
      <ListContainer>
        <ListTitle variant="h4">Listado de {data}</ListTitle>
        <ListData>
          {data === "Usuarios" ? (
            <DashboardTable type="users" />
          ) : (
            <DashboardTable type="products" />
          )}
        </ListData>
      </ListContainer>
    </main>
  );
};

export default List;
