import { useEffect, useState } from "react";
import { useTheme } from "@emotion/react";
import { useDispatch, useSelector } from "react-redux";
import { getRoleById } from "../../../api/roles";
import { ProfileTitleContainer } from "./ProfileTitle.styles";
import { Button, Typography } from "@mui/material";
import useAuth from "../../../hooks/api/useAuth";
import { unsetUser } from "../../../reducers/auth";
import { cleanCart } from "../../../reducers/cart";
import { cleanProducts } from "../../../reducers/products";
import { responseError, statusErrors } from "../../../utils/toastErrors";

const ProfileTitle = () => {
  const theme = useTheme();
  const dispatch = useDispatch();

  const { logout } = useAuth();
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

  const resizeFont = () => {
    if (Object.keys(user).length !== 0) {
      const textLength = user.names.length + user.surnames.length;
      const letterSize = 100 / textLength;
      return `${letterSize}vh`;
    }
  };

  const handleLogout = () => {
    dispatch(cleanProducts());
    dispatch(cleanCart());
    dispatch(unsetUser());
    logout();
  };

  return (
    <ProfileTitleContainer>
      <Typography
        variant="h3"
        sx={{
          maxWidth: "100%",
          marginBottom: theme.spacing(1),
          fontSize: user ? resizeFont() : "inherit",
          fontWeight: "500",
        }}
      >
        {Object.keys(user).length !== 0 && `${user.names} ${user.surnames}`}
      </Typography>
      <Typography
        sx={{
          padding: theme.spacing(0.5),
          borderRadius: theme.spacing(0.5),
          backgroundColor:
            roleName === "admin"
              ? theme.palette.success[500]
              : roleName === "user"
              ? theme.palette.primary[500]
              : theme.palette.secondary[500],
          color: theme.palette.secondary.A100,
        }}
      >
        {roleName === "admin"
          ? "Administrador"
          : roleName === "user"
          ? "Usuario"
          : "Usuario Web"}
      </Typography>
      <Button
        onClick={handleLogout}
        sx={{ marginTop: theme.spacing(2), color: theme.palette.error[500] }}
      >
        Cerrar Sesión
      </Button>
    </ProfileTitleContainer>
  );
};

export default ProfileTitle;
