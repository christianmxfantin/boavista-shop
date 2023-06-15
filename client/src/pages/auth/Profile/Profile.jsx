import { useState } from "react";
import { useTheme } from "@emotion/react";
import { Button } from "@mui/material";
import { ProfileContainer, ProfileTitle } from "./Profile.styles";

import ProfileData from "../../../components/layout/ProfileData/ProfileData";
import AccountData from "../../../components/layout/AccountData/AccountData";
import Billing from "../../../components/checkout/Billing/Billing";
import PaymentDetails from "../../../components/checkout/Payment/PaymentDetails/PaymentDetails";
import TableActions from "../../../components/layout/TableActions/TableActions";
import CardAddress from "../../../components/layout/CardAddress/CardAddress";

const Profile = () => {
  const theme = useTheme();
  const [showModal, setShowModal] = useState(false);
  const [showBilling, setShowBilling] = useState(false);

  const handleClickAddress = () => {
    setShowBilling(true);
  };

  const handleClickDeleteAccount = () => {
    setShowModal(true);
  };

  return (
    <main>
      <ProfileContainer>
        <ProfileTitle variant="h4">Mi Perfil</ProfileTitle>
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
        actionType="delete-account"
      />
    </main>
  );
};

export default Profile;
