import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const DashboardContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  color: theme.palette.primary[500],
}));

const DashboardTitle = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(3), //24px
  fontWeight: "500",
}));

const Dashboard = () => {
  return (
    <DashboardContainer>
      <DashboardTitle variant="h4">Dashboard</DashboardTitle>
    </DashboardContainer>
  );
};

export default Dashboard;
