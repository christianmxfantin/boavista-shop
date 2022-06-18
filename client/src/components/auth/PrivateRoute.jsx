import { Navigate, Outlet } from "react-router-dom";

let auth = true;

const PrivateRoute = () => {
  return auth ? <Outlet /> : <Navigate replace to="/login" />;
};

export default PrivateRoute;
