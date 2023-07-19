import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const PrivateRoute = () => {
  const { isLoading, isAuth } = useAuth();

  if (isLoading) return null;
  if (!isAuth && !isLoading) return <Navigate to="/login" replace />;
  return <Outlet />;
};

export default PrivateRoute;
