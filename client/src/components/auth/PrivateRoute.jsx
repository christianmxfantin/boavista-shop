import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import Cookies from "js-cookie";

import { authResponse } from "../../api/auth";

const PrivateRoute = () => {
  const [isAuth, setIsAuth] = useState(false);
  const cookies = Cookies.get();

  const getData = async () => {
    try {
      const res = await authResponse(cookies.token);
      if (!res.data) {
        setIsAuth(false);
        console.log("res es falso?", isAuth);
        // return;
      } else {
        setIsAuth(true);
        console.log("res es verdadero?", isAuth);
      }
    } catch (error) {
      setIsAuth(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return !isAuth ? <Navigate replace to="/login" /> : <Outlet />;
};

export default PrivateRoute;
