import { ConfirmationContainer } from "./Confirmation.styles";
import ConfirmationData from "../ConfirmationData/ConfirmationData";
import ButtonsContainer from "../../../layout/ButtonsContainer/ButtonsContainer";

const Confirmation = ({
  formType,
  confirmationData,
  setStepperData,
  handleCancelPurchase,
  handlePayment,
}) => {
  const { billing, shipping, payment } = confirmationData;

  return (
    <ConfirmationContainer>
      <ConfirmationData
        type="Facturación"
        data={billing}
        setStepperData={setStepperData}
      />
      {billing.id !== shipping.addressId ? (
        <ConfirmationData
          type="Envío"
          data={shipping}
          setStepperData={setStepperData}
        />
      ) : (
        <ConfirmationData
          type="Misma dirección"
          data="La dirección de Envío es igua a la de Facturación"
        />
      )}
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
