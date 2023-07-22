import { Navigate } from "react-router-dom";
import FormAuth from "../../../components/layout/FormAuth/FormAuth";

const Dashboard = () => {
  const user = { role: "Web" };
  // const { user } = useSelector((state) => state.auth);

  if (user.role === "Web") return <Navigate to="/login" replace />;
  return <FormAuth formType="dashboard" role={user.role} />;
};

export default Dashboard;
