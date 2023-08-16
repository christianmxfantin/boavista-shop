import { useState } from "react";
import { useTheme } from "@emotion/react";
import { Button } from "@mui/material";
import { ProfileContainer } from "./Profile.styles";

import ProfileTitle from "../../../components/layout/ProfileTitle/ProfileTitle";
import ProfileData from "../../../components/layout/ProfileData/ProfileData";
import AccountData from "../../../components/layout/AccountData/AccountData";
import TableActions from "../../../components/layout/TableActions/TableActions";
import CardAddress from "../../../components/layout/CardAddress/CardAddress";

const Profile = () => {
  const theme = useTheme();
  const [showModal, setShowModal] = useState(false);

  const handleClickDeleteAccount = () => {
    setShowModal(true);
  };

  return (
    <main>
      <ProfileContainer>
        <ProfileTitle />
        <ProfileData
          title="Datos de la Cuenta"
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
