import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";

const DashboardContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

const BoxContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  width: "95%",
  margin: theme.spacing(1.5, 3, 0, 3), //24px
  padding: theme.spacing(2), //16px
  borderRadius: theme.spacing(1), //8px,
  backgroundColor: theme.palette.primary[300],
}));

const Title = styled(Typography)(({ theme }) => ({
  borderRadius: theme.spacing(1), //8px,
  // backgroundColor: theme.palette.primary[200],
  color: theme.palette.secondary.A100,
  fontWeight: "500",
}));

const Dashboard = () => {
  return (
    <DashboardContainer>
      <BoxContainer>
        <Link to="/dashboard/users" style={{ textDecoration: "none" }}>
          <Title variant="h4">Usuarios</Title>
        </Link>
      </BoxContainer>
      <BoxContainer>
        <Link to="/dashboard/products" style={{ textDecoration: "none" }}>
          <Title variant="h4">Productos</Title>
        </Link>
      </BoxContainer>
    </DashboardContainer>
  );
};

export default Dashboard;
