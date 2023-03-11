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
  const theme = useTheme();

  return (
    <BillingContainer>
      <TitleContainer>
        <EditIcon
          name="Edit-Data"
          size={30}
          color={theme.palette.primary[500]}
        />
      </TitleContainer>
      <DataContainer>
        <NameInput placeholder="Nombre" />
        <SurnameInput disabled placeholder="Apellido" />
        <AddressInput disabled placeholder="Dirección" />
      </DataContainer>
    </BillingContainer>
  );
};

export default Billing;
