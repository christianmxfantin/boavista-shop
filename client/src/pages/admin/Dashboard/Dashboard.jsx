import { Navigate } from "react-router-dom";
import FormAuth from "../../../components/layout/FormAuth/FormAuth";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const { user } = useSelector((state) => state.auth);

  if (
    user.role.toLowerCase().trim() === "admin" ||
    user.role.toLowerCase().trim() === "user"
  )
    return <FormAuth formType="dashboard" role={user.role} />;
  return <Navigate to="/login" replace />;
};

export default Dashboard;
