import { useTheme } from "@emotion/react";
import { Icon as EditIcon } from "../../ui/Icon";
import {
  BillingContainer,
  TitleContainer,
  DataContainer,
  NameInput,
  SurnameInput,
  AddressInput,
} from "./Billing.styles";

const Billing = () => {
  let edit = false;
  const theme = useTheme();

  const handleClick = () => {
    edit = true;
  };

  return (
    <BillingContainer>
      <TitleContainer>
        <EditIcon
          name="Edit-Data"
          size={30}
          color={theme.palette.primary[500]}
          onClick={handleClick}
        />
      </TitleContainer>
      <DataContainer>
        <NameInput placeholder="Nombre" />
        {/* <SurnameInput {edit && disabled} placeholder="Apellido" /> */}
        <AddressInput disabled placeholder="Dirección" />
      </DataContainer>
    </BillingContainer>
  );
};

export default Billing;
