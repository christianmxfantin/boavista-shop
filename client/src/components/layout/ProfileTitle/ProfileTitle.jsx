import { useEffect, useState } from "react";
import { useTheme } from "@emotion/react";
import { useSelector } from "react-redux";
import { getRoleById } from "../../../api/roles";
import { ProfileTitleContainer } from "./ProfileTitle.styles";
import { Typography } from "@mui/material";

const ProfileTitle = () => {
  const theme = useTheme();
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
        console.log(error);
      }
    };

    getRoleName();
  }, [roleId]);

  const resizeFont = () => {
    if (user) {
      const textLength = user.names.length + user.surnames.length;
      const letterSize = 100 / textLength;
      return `${letterSize}vh`;
    }
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
        {`${user.names} ${user.surnames}`}
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
    </ProfileTitleContainer>
  );
};

export default ProfileTitle;
