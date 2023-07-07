import { ConfirmationContainer } from "./Confirmation.styles";
import ConfirmationData from "../ConfirmationData/ConfirmationData";
import ButtonsContainer from "../../../layout/ButtonsContainer/ButtonsContainer";

const Confirmation = ({
  formType,
  confirmationData,
  handleCancelPurchase,
  handlePayment,
}) => {
  const { billing, shipping, payment } = confirmationData;

  return (
    <ConfirmationContainer>
      <ConfirmationData type="Facturación" data={billing} />
      <ConfirmationData type="Envío" data={shipping} />
      <ConfirmationData type="Pago" data={payment} />
      <ButtonsContainer
        formType={formType}
        leftName="Cancelar Compra"
        rightName="Pagar"
        onClickLeft={handleCancelPurchase}
        onClickRight={handlePayment}
      />
    </ConfirmationContainer>
  );
};

export default Confirmation;
