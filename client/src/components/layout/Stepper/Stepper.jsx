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

const Stepper = () => {
  let stepperComponent;
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);

  const handleLeft = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleRight = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  // const handleReset = () => {
  //   setActiveStep(0);
  // };

  switch (activeStep) {
    case 1:
      stepperComponent = <Cart />;
      break;
    default:
      stepperComponent = null;
  }

  return (
    <>
      <StepperComponent
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

      {activeStep === 5 ? (
        <p>El step se ha completado</p>
      ) : (
        <>
          {stepperComponent}
          <CheckoutButtonsContainer>
            <Button
              name={activeStep === 1 ? "Vaciar Carrito" : "Atrás"}
              variant="contained"
              type="primary"
              onClick={handleLeft}
            />
            <Button
              name={activeStep === 5 ? "Finalizar" : "Continuar"}
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
