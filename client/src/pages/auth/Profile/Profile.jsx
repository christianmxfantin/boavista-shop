import { useTheme } from "@emotion/react";
import { Button } from "@mui/material";
import { ProfileContainer, ProfileTitle } from "./Profile.styles";

import ProfileData from "../../../components/layout/ProfileData/ProfileData";
import LoginData from "../../../components/layout/LoginData/LoginData";
import Billing from "../../../components/checkout/Billing/Billing";
import PaymentDetails from "../../../components/checkout/Payment/PaymentDetails/PaymentDetails";

const Profile = () => {
  const theme = useTheme();

  return (
    <main>
      <ProfileContainer>
        <ProfileTitle variant="h4">Mi Perfil</ProfileTitle>
        <ProfileData
          title="Datos de Cuenta"
          component={<LoginData profile={true} />}
        />
        <ProfileData
          title="Datos de Facturación"
          component={<Billing profile={true} />}
        />
        <ProfileData
          title="Métodos de Pago"
          type="payment"
          component={<PaymentDetails profile={true} data="myCards" />}
        />
        <Button
          variant="text"
          sx={{
            marginBottom: theme.spacing(3),
            color: theme.palette.error[500],
          }}
        >
          Borrar Cuenta
        </Button>
      </ProfileContainer>
    </main>
  );
};

export default Profile;
