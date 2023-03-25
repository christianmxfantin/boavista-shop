import { useNavigate } from "react-router-dom";
import { useTheme } from "@emotion/react";
import {
  DashboardContainer,
  DashboardTitle,
  ButtonsContainer,
} from "./Dashboard.styles";
import {
  Button as UsersButton,
  Button as ProductsButton,
} from "../../../components/ui/Button";

const Dashboard = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const handleUsersButton = () => {
    navigate("/dashboard/users");
  };

  const handleProductsButton = () => {
    navigate("/dashboard/products");
  };

  return (
    <DashboardContainer component={"main"}>
      <DashboardTitle variant="h4">Panel de Administración</DashboardTitle>
      <ButtonsContainer>
        <UsersButton
          name="Usuarios"
          buttonStyle="primary"
          sx={{
            width: "376px",
            fontSize: "24px",
            marginBottom: theme.spacing(4), //32px
          }}
          onClick={handleUsersButton}
        />
        <ProductsButton
          name="Productos"
          buttonStyle="primary"
          sx={{
            width: "376px",
            fontSize: theme.spacing(3), //24px
          }}
          onClick={handleProductsButton}
        />
      </ButtonsContainer>
    </DashboardContainer>
  );
};

export default Dashboard;
