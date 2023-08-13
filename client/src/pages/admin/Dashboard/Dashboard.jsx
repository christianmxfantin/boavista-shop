import { Navigate } from "react-router-dom";
import FormAuth from "../../../components/layout/FormAuth/FormAuth";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const { user } = useSelector((state) => state.auth);
  const userRole = user.role.toLowerCase().trim();

  if (userRole === "admin" || userRole === "user")
    return <FormAuth formType="dashboard" role={userRole} />;
  return <Navigate to="/login" replace />;
};

export default Dashboard;
