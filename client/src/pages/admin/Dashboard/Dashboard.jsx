import { useEffect, useState } from "react";
import FormAuth from "../../../components/layout/FormAuth/FormAuth";
import { Navigate } from "react-router-dom";
import { getRoleById } from "../../../api/roles";
import { useSelector } from "react-redux";

const Dashboard = () => {
  // const { user } = useSelector((state) => state.auth);
  const [isAdmin, setIsAdmin] = useState(false);
  // console.log(user);

  useEffect(() => {
    const checkAdmin = async () => {
      const role = await getRoleById("4cd83c29-44a4-4c35-8fc8-ba26c916840d");
      console.log(role.data.names);
      if (role.data.names === "Admin") {
        setIsAdmin(true);
        console.log(isAdmin);
      }
    };
    checkAdmin();
  }, [isAdmin]);

  if (!isAdmin) return <Navigate to="/login" replace />;
  return <FormAuth formType="dashboard" />;
};

export default Dashboard;
