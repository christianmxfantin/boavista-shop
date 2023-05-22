import { Navigate, Outlet } from "react-router-dom";

//check if user is logged, true is logged
let auth = true;

const PrivateRoute = () => {
  return auth ? <Outlet /> : <Navigate replace to="/login" />;
};

export default PrivateRoute;
