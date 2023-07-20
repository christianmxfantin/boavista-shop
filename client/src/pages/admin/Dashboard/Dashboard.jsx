import { useState } from "react";
import FormAuth from "../../../components/layout/FormAuth/FormAuth";
import { Navigate } from "react-router-dom";

const Dashboard = () => {
  const [isAdmin, setIsAdmin] = useState(false);

  //check here isAdmin

  if (!isAdmin) return <Navigate to="/login" replace />;
  return <FormAuth formType="dashboard" />;
};

export default Dashboard;
