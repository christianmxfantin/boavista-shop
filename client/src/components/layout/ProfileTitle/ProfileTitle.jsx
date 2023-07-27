import { useTheme } from "@emotion/react";
import { useSelector } from "react-redux";
import { ProfileTitleContainer } from "./ProfileTitle.styles";
import { Typography } from "@mui/material";

const ProfileTitle = () => {
  const theme = useTheme();
  const { user } = useSelector((state) => state.auth);
  const role = user.role.trim().toLowerCase();

  return (
    <ProfileTitleContainer>
      <Typography
        variant="h3"
        sx={{ marginBottom: theme.spacing(1), fontWeight: "500" }}
      >
        {`${user.names} ${user.surnames}`}
      </Typography>
      <Typography
        sx={{
          padding: theme.spacing(0.5),
          borderRadius: theme.spacing(0.5),
          backgroundColor:
            role === "admin"
              ? theme.palette.success[500]
              : role === "user"
              ? theme.palette.primary[500]
              : theme.palette.secondary[500],
          color: theme.palette.secondary.A100,
        }}
      >
        {role === "admin"
          ? "Administrador"
          : role === "user"
          ? "Usuario"
          : "Usuario Web"}
      </Typography>
    </ProfileTitleContainer>
  );
};

export default ProfileTitle;
