import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const PrivateRoute = () => {
  const { isLoading, isAuth } = useAuth();

  if (isLoading) return null;

  //si ya esta autenticado, vuelve a la página principal
  if (isAuth && !isLoading) return <Navigate to="/" replace />;
  //si no esta autenticado, ingresa
  return <Outlet />;
};

export default PrivateRoute;
