import { Link } from "react-router-dom";
import { DashboardContainer, BoxContainer, BoxTitle } from "./Dashboard.styles";

const Dashboard = () => {
  return (
    <main>
      <DashboardContainer>
        <BoxContainer>
          <Link to="/dashboard/users" style={{ textDecoration: "none" }}>
            <BoxTitle variant="h4">Usuarios</BoxTitle>
          </Link>
        </BoxContainer>
        <BoxContainer>
          <Link to="/dashboard/products" style={{ textDecoration: "none" }}>
            <BoxTitle variant="h4">Productos</BoxTitle>
          </Link>
        </BoxContainer>
      </DashboardContainer>
    </main>
  );
};

export default Dashboard;
