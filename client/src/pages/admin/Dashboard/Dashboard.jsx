import { Navigate } from "react-router-dom";
import FormAuth from "../../../components/layout/FormAuth/FormAuth";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getRoleById } from "../../../api/roles";
import { responseError, statusErrors } from "../../../utils/toastErrors";

const Dashboard = () => {
  const { user } = useSelector((state) => state.auth);
  const roleId = user.roleId;
  const [roleName, setRoleName] = useState("");

  useEffect(() => {
    const getRoleName = async () => {
      try {
        const roles = await getRoleById(roleId);
        const name = roles.data.name.toLowerCase().trim();
        setRoleName(name);
      } catch (error) {
        statusErrors(error);
        responseError(error);
      }
    };

    getRoleName();
  }, [roleId]);

  if (roleName !== "web") {
    return <FormAuth formType="dashboard" role={roleName} />;
  }
  return <Navigate to="/login" replace />;
};

export default Dashboard;
