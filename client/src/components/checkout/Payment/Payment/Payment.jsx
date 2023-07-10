import { useState } from "react";
import ButtonsContainer from "../../../layout/ButtonsContainer/ButtonsContainer";
import CardAddress from "../../../layout/CardAddress/CardAddress";
import { PaymentContainer } from "./Payment.styles";

const Payment = ({
  formType,
  handleLeft,
  handleRight,
  setStepperData,
  isButtonDisabled,
  setIsButtonDisabled,
}) => {
  const [selectedCard, setSelectedCard] = useState(0);

  return (
    <PaymentContainer>
      <CardAddress
        formType={formType}
        itemType="card"
        isButtonDisabled={isButtonDisabled}
        setIsButtonDisabled={setIsButtonDisabled}
        setSelectedCard={setSelectedCard}
      />
      <ButtonsContainer
        formType={formType}
        leftName="Atrás"
        rightName="Continuar"
        disabled={isButtonDisabled}
        onClickLeft={handleLeft}
        onClickRight={() => {
          setStepperData((prevData) => ({
            ...prevData,
            payment: selectedCard,
          }));
          handleRight();
        }}
      />
    </PaymentContainer>
  );
};

export default Payment;
