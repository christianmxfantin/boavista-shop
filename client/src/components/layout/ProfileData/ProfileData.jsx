import { useState, cloneElement } from "react";
import { Button } from "@mui/material";
import { useTheme } from "@emotion/react";
import { Icon as EditIcon } from "../../../components/ui/Icon";
import {
  ProfileDataContainer,
  ProfileDataTitleContainer,
  ProfileDataTitle,
  EditIconContainer,
} from "./ProfileData.styles";
import PaymentDetails from "../../checkout/Payment/PaymentDetails/PaymentDetails";

const ProfileData = ({ title, type, component }) => {
  const theme = useTheme();
  const [newPayment, setNewPayment] = useState(false);
  const [editMode, setEditMode] = useState(false);

  const handleClick = () => {
    if (!newPayment) {
      setNewPayment(true);
    } else {
      //save the new card
      setNewPayment(false);
    }
  };

  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  const handleEdit = () => {
    toggleEditMode();
  };

  const handleEditChange = (value) => {
    setEditMode(value);
  };

  return (
    <ProfileDataContainer>
      <ProfileDataTitleContainer>
        <ProfileDataTitle variant="h6">{title}</ProfileDataTitle>
        {type !== "payment" && (
          <EditIconContainer
            sx={{ visibility: editMode ? "hidden" : "visible" }}
          >
            <EditIcon
              name="Edit-Data"
              size={30}
              color={theme.palette.primary[500]}
              onClick={handleEdit}
            />
          </EditIconContainer>
        )}
      </ProfileDataTitleContainer>
      {!newPayment ? (
        cloneElement(component, { editMode, onEditChange: handleEditChange })
      ) : (
        <PaymentDetails data="newCard" />
      )}
      {type === "payment" && (
        <Button
          variant={newPayment ? "contained" : "text"}
          sx={{ margin: `${theme.spacing(2)} 0 ${theme.spacing(2)} 0` }}
          onClick={handleClick}
        >
          {!newPayment ? "Agregar Método de Pago" : "Guardar"}
        </Button>
      )}
    </ProfileDataContainer>
  );
};

export default ProfileData;
