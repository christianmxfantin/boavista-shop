import { useState, useRef } from "react";
import { useTheme } from "@emotion/react";
import { Icon as EditIcon } from "../../ui/Icon";
import {
  BillingContainer,
  TitleContainer,
  DataContainer,
  NameInput,
  SurnameInput,
  AddressInput,
  MailInput,
  PhoneInput,
} from "./Billing.styles";
import AddressSearch from "../AddressSearch/AddressSearch";
import { Button } from "@mui/material";

const Billing = ({ profile, editMode, onEditChange }) => {
  const theme = useTheme();
  const nameInput = useRef();
  const [edit, setEdit] = useState(false);

  const handleEdit = () => {
    setEdit(true);
    nameInput.current.focus();
  };

  const handleSave = () => {
    //save billing data
    onEditChange(false);
  };

  return (
    <BillingContainer>
      {!profile && (
        <TitleContainer
          sx={{
            visibility: edit ? "hidden" : "visible",
          }}
        >
          <EditIcon
            name="Edit-Data"
            size={30}
            color={theme.palette.primary[500]}
            onClick={handleEdit}
          />
        </TitleContainer>
      )}
      <DataContainer sx={{ width: !profile ? "30%" : "70%" }}>
        <NameInput
          disabled={!edit && !editMode}
          placeholder="Nombres"
          inputRef={nameInput}
        />
        <SurnameInput disabled={!edit && !editMode} placeholder="Apellidos" />
        <AddressInput disabled={!edit && !editMode} placeholder="Dirección" />
        <AddressSearch disabled={!edit && !editMode} visible={true} />
        <MailInput disabled={!edit && !editMode} placeholder="Mail" />
        <PhoneInput disabled={!edit && !editMode} placeholder="Teléfono" />
      </DataContainer>
      {editMode && (
        <Button
          variant="contained"
          type="submit"
          onClick={handleSave}
          sx={{ width: "70%", marginTop: theme.spacing(2) }}
        >
          Guardar
        </Button>
      )}
    </BillingContainer>
  );
};

export default Billing;
