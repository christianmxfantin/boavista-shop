import { Navigate } from "react-router-dom";
import FormAuth from "../../../components/layout/FormAuth/FormAuth";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getRoleById } from "../../../api/roles";

const Dashboard = () => {
  const { user } = useSelector((state) => state.auth);
  const roleId = user.roleId;
  const [roleName, setRoleName] = useState("");

  useEffect(() => {
    const getRoleName = async () => {
      try {
        const roles = await getRoleById(roleId);
        setRoleName(roles.name);
      } catch (error) {
        console.log(error);
      }
    };

    getRoleName();
  }, [roleId]);

  if (roleName === "admin" || roleName === "user")
    return <FormAuth formType="dashboard" role={roleName} />;
  return <Navigate to="/login" replace />;
};

export default Dashboard;
