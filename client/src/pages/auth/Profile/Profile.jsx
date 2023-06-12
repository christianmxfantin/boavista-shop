import { useState } from "react";
import { useTheme } from "@emotion/react";
import { Button } from "@mui/material";
import { ProfileContainer, ProfileTitle } from "./Profile.styles";

import ProfileData from "../../../components/layout/ProfileData/ProfileData";
import AccountData from "../../../components/layout/AccountData/AccountData";
import Billing from "../../../components/checkout/Billing/Billing";
import PaymentDetails from "../../../components/checkout/Payment/PaymentDetails/PaymentDetails";
import TableActions from "../../../components/layout/TableActions/TableActions";

const Profile = () => {
  const theme = useTheme();
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  return (
    <main>
      <ProfileContainer>
        <ProfileTitle variant="h4">Mi Perfil</ProfileTitle>
        <ProfileData title="Datos de Cuenta" component={<AccountData />} />
        <ProfileData
          title="Datos de Facturación"
          component={<Billing formType="profile" />}
        />
        <ProfileData
          title="Métodos de Pago"
          type="payment"
          component={<PaymentDetails formType="profile" />}
        />
        <Button
          variant="text"
          onClick={handleClick}
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
