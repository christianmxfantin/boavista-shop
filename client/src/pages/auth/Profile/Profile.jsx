import { useState } from "react";
import { useTheme } from "@emotion/react";
import { useSelector } from "react-redux";
import { Button, Typography } from "@mui/material";
import {
  ProfileContainer,
  ProfileTitle,
  ProfileTitleContainer,
} from "./Profile.styles";

import ProfileData from "../../../components/layout/ProfileData/ProfileData";
import AccountData from "../../../components/layout/AccountData/AccountData";
import TableActions from "../../../components/layout/TableActions/TableActions";
import CardAddress from "../../../components/layout/CardAddress/CardAddress";

const Profile = () => {
  const theme = useTheme();
  const { user } = useSelector((state) => state.auth);
  const role = user.role.trim().toLowerCase();
  const [showModal, setShowModal] = useState(false);

  const handleClickDeleteAccount = () => {
    setShowModal(true);
  };

  return (
    <main>
      <ProfileContainer>
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
                  ? "green"
                  : role === "user"
                  ? "red"
                  : theme.palette.secondary[500],
              color: "white",
            }}
          >
            {role === "admin"
              ? "Administrador"
              : role === "user"
              ? "Usuario"
              : "Usuario Web"}
          </Typography>
        </ProfileTitleContainer>
        <ProfileData
          title="Datos de Cuenta"
          component={<AccountData formType="profile" />}
        />
        <ProfileData
          title="Datos de Facturación"
          component={<CardAddress formType="profile" itemType="address" />}
        />
        <ProfileData
          title="Métodos de Pago"
          component={<CardAddress formType="profile" itemType="card" />}
        />
        <Button
          variant="text"
          onClick={handleClickDeleteAccount}
          sx={{
            marginBottom: theme.spacing(3),
            color: theme.palette.error[500],
          }}
        >
          Borrar Cuenta
        </Button>
      </ProfileContainer>
      <TableActions
        showModal={showModal}
        setShowModal={setShowModal}
        deleteType="account"
        // data={profile}
      />
    </main>
  );
};

export default Profile;
