import { ListContainer, ListTitle, ListData } from "./List.styles";
import DashboardTable from "../../../components/layout/DashboardTable/DashboardTable";

const List = ({ typeData }) => {
  return (
    <main>
      <ListContainer>
        <ListTitle variant="h4">
          Listado de {typeData === "users" ? "Usuarios" : "Productos"}
        </ListTitle>
        <ListData>
          <DashboardTable typeData={typeData} />
        </ListData>
      </ListContainer>
    </main>
  );
};

export default List;
