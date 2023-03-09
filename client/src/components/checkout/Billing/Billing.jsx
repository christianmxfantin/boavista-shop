import { Icon } from "../../ui/Icon";
import { BillingContainer, NameInput, SurnameInput } from "./Billing.styles";

const Billing = () => {
  return (
    <BillingContainer>
      <Icon name="Edit-Data" size={30} />
      <NameInput disabled placeholder="Nombre" />
      <SurnameInput disabled placeholder="Apellido" />
    </BillingContainer>
  );
};

export default Billing;
