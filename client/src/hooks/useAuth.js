import { useEffect, useState } from "react";
import { authResponse } from "../api/auth";
import Cookies from "js-cookie";

const useAuth = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const cookies = Cookies.get("token");
      if (!cookies) {
        setIsAuth(false);
        setIsLoading(false);
        return;
      }

      try {
        const res = await authResponse(cookies);
        // console.log(res);
        if (!res.data) {
          setIsAuth(false);
          setIsLoading(false);
          return;
        }

        setIsAuth(true);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsAuth(false);
        setIsLoading(false);
      }
    };
    getData();
  }, []);

  return { isLoading, isAuth };
};

export default useAuth;
