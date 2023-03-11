import { useState } from "react";
import { useTheme } from "@emotion/react";
import {
  Stepper as StepperComponent,
  StepConnector,
  Step,
  StepLabel,
} from "@mui/material";
import { CheckoutButtonsContainer } from "./Stepper.styles";
import { Button } from "../../ui/Button";

import Cart from "../../checkout/Cart/Cart";
import Billing from "../../checkout/Billing/Billing";
import Shipping from "../../checkout/Shipping/Shipping";
import Confirmation from "../../checkout/Confirmation/Confirmation";
import Payment from "../../checkout/Payment/Payment/Payment";

import PaymentSuccessful from "../../checkout/Payment/PaymentSuccessful/PaymentSuccessful";

const Stepper = () => {
  let stepperComponent;
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);

  const handleLeft = () => {
    if (activeStep > 0) {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
      console.log(activeStep);
    }
  };

  const handleRight = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    console.log(activeStep);
  };

  // const handleReset = () => {
  //   setActiveStep(1);
  // };

  switch (activeStep) {
    case 1:
      stepperComponent = <Billing />;
      break;
    case 2:
      stepperComponent = <Shipping />;
      break;
    case 3:
      stepperComponent = <Confirmation />;
      break;
    case 4:
      stepperComponent = <Payment />;
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
              <StepLabel>Confirmación</StepLabel>
            </Step>
            <Step>
              <StepLabel>Pago</StepLabel>
            </Step>
          </StepperComponent>
          {stepperComponent}
          <CheckoutButtonsContainer>
            <Button
              name={activeStep === 0 ? "Vaciar Carrito" : "Atrás"}
              variant="contained"
              type="primary"
              disabled={activeStep === 4}
              onClick={handleLeft}
            />
            <Button
              name={activeStep === 4 ? "Pagar" : "Continuar"}
              variant="contained"
              type="primary"
              onClick={handleRight}
            />
          </CheckoutButtonsContainer>
        </>
      )}
    </>
  );
};

export default Stepper;
