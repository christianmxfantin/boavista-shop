import { useState } from "react";
import { useTheme } from "@emotion/react";
import {
  Stepper as StepperComponent,
  StepConnector,
  Step,
  StepLabel,
} from "@mui/material";
import { PaymentContainer } from "./StepperCheckout.styles";

import Cart from "../../checkout/Cart/Cart";
import Billing from "../../checkout/Billing/Billing";
import Shipping from "../../checkout/Shipping/Shipping";
import Confirmation from "../../checkout/Confirmation/Confirmation/Confirmation";
import PaymentSuccessful from "../../checkout/Payment/PaymentSuccessful/PaymentSuccessful";
import CardAddress from "../CardAddress/CardAddress";

const StepperCheckout = () => {
  let stepperComponent;
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const handleLeft = () => {
    setIsButtonDisabled(false);
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleRight = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleCancelPurchase = () => {
    //Cancelar Compra
    console.log("Cancelar Compra");
  };

  const handlePayment = () => {
    //Pagar
    console.log("Pagar");
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  switch (activeStep) {
    case 1:
      stepperComponent = (
        <Billing
          formType="billing"
          showBilling={true}
          isButtonDisabled={setIsButtonDisabled}
          handleLeft={handleLeft}
          handleRight={handleRight}
        />
      );
      break;
    case 2:
      stepperComponent = (
        <Shipping
          formType="shipping"
          isButtonDisabled={setIsButtonDisabled}
          handleLeft={handleLeft}
          handleRight={handleRight}
        />
      );
      break;
    case 3:
      stepperComponent = (
        <>
          <PaymentContainer>
            <CardAddress
              formType="payment"
              itemType="card"
              isButtonDisabled={setIsButtonDisabled}
              handleLeft={handleLeft}
              handleRight={handleRight}
            />
          </PaymentContainer>
        </>
      );
      break;
    case 4:
      stepperComponent = (
        <Confirmation
          handleCancelPurchase={handleCancelPurchase}
          handlePayment={handlePayment}
        />
      );
      break;
    default:
      stepperComponent = <Cart handleRight={handleRight} />;
  }

  return (
    <>
      {activeStep === 5 ? (
        <PaymentSuccessful />
      ) : (
        <>
          <StepperComponent
            activeStep={activeStep}
            connector={<StepConnector />}
            sx={{ marginBottom: theme.spacing(3) }} //24px
          >
            <Step>
              <StepLabel>Carrito de Compras</StepLabel>
            </Step>
            <Step>
              <StepLabel>Facturación</StepLabel>
            </Step>
            <Step>
              <StepLabel>Envío</StepLabel>
            </Step>
            <Step>
              <StepLabel>Pago</StepLabel>
            </Step>
            <Step>
              <StepLabel>Confirmación</StepLabel>
            </Step>
          </StepperComponent>
          {stepperComponent}
        </>
      )}
    </>
  );
};

export default StepperCheckout;
