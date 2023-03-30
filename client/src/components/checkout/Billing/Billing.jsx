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

const Billing = ({ profile }) => {
  const theme = useTheme();
  const nameInput = useRef();
  const [edit, setEdit] = useState(false);

  const handleEdit = () => {
    setEdit(true);
    nameInput.current.focus();
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
        {/* {console.log(!profile)} */}
        <NameInput
          disabled={!edit}
          placeholder="Nombres"
          inputRef={nameInput}
        />
        <SurnameInput disabled={!edit} placeholder="Apellidos" />
        <AddressInput disabled={!edit} placeholder="Dirección" />
        <AddressSearch disabled={!edit} visible={true} />
        <MailInput disabled={!edit} placeholder="Mail" />
        <PhoneInput disabled={!edit} placeholder="Teléfono" />
      </DataContainer>
    </BillingContainer>
  );
};

export default Billing;
