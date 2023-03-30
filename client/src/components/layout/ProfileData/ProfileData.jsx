import { useState } from "react";
import { Button } from "@mui/material";
import { useTheme } from "@emotion/react";
import { Icon as EditIcon } from "../../../components/ui/Icon";
import {
  ProfileDataContainer,
  ProfileDataTitleContainer,
  ProfileDataTitle,
} from "./ProfileData.styles";
import PaymentDetails from "../../checkout/Payment/PaymentDetails/PaymentDetails";

const ProfileData = ({ title, type, component }) => {
  const theme = useTheme();
  const [newPayment, setNewPayment] = useState(false);

  const handleClic = () => {
    if (!newPayment) {
      setNewPayment(true);
    } else {
      //save the new card
      setNewPayment(false);
    }
  };

  const handleEdit = () => {
    //editData
  };

  return (
    <ProfileDataContainer>
      <ProfileDataTitleContainer>
        <ProfileDataTitle variant="h6">{title}</ProfileDataTitle>
        <EditIcon
          name="Edit-Data"
          size={30}
          color={theme.palette.primary[500]}
          onClick={handleEdit}
        />
      </ProfileDataTitleContainer>
      {!newPayment ? component : <PaymentDetails data="newCard" />}
      {type === "payment" && (
        <Button
          variant="text"
          sx={{ marginTop: theme.spacing(2), marginBottom: theme.spacing(2) }}
          onClick={handleClic}
        >
          {!newPayment ? "Agregar Método de Pago" : "Guardar"}
        </Button>
      )}
      {/* {newPayment && <PaymentDetails data="newCard" />} */}
    </ProfileDataContainer>
  );
};

export default ProfileData;
