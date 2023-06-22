import { useState } from "react";
import { useTheme } from "@emotion/react";
import {
  Stepper as StepperComponent,
  StepConnector,
  Step,
  StepLabel,
} from "@mui/material";
import {
  PaymentContainer,
  CheckoutButtonsContainer,
} from "./StepperCheckout.styles";
import { Button } from "../../ui/Button";

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

  // const handleButtonDisabled = (value) => {
  //   setIsButtonDisabled(value);
  // };

  const handleCleanCart = () => {
    //Vaciar Carrito
    console.log("Vaciar Carrito");
  };

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
        />
      );
      break;
    case 2:
      stepperComponent = (
        <Shipping formType="shipping" isButtonDisabled={setIsButtonDisabled} />
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
            />
          </PaymentContainer>
        </>
      );
      break;
    case 4:
      stepperComponent = <Confirmation />;
      break;
    default:
      stepperComponent = <Cart />;
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
          <CheckoutButtonsContainer
            sx={{
              justifyContent: activeStep !== 4 ? "space-between" : "flex-end",
            }}
          >
            <Button
              name={
                activeStep === 0
                  ? "Vaciar Carrito"
                  : activeStep === 4
                  ? "Cancelar Compra"
                  : "Atrás"
              }
              variant={activeStep !== 4 && "contained"}
              buttonStyle={activeStep !== 4 ? "primary" : "secondary"}
              sx={{ marginRight: activeStep === 4 && "8px" }}
              onClick={
                activeStep === 0
                  ? handleCleanCart
                  : activeStep === 4
                  ? handleCancelPurchase
                  : handleLeft
              }
            />
            <Button
              name={activeStep === 4 ? "Pagar" : "Continuar"}
              variant="contained"
              buttonStyle="primary"
              disabled={activeStep >= 1 && activeStep <= 3 && isButtonDisabled}
              onClick={activeStep === 4 ? handlePayment : handleRight}
            />
          </CheckoutButtonsContainer>
        </>
      )}
    </>
  );
};

export default StepperCheckout;
