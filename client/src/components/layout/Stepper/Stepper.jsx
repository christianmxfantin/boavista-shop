import { Step, StepLabel, StepConnector } from "@mui/material";
import { StepperComponent } from "./Stepper.styles";

const Stepper = () => {
  return (
    <StepperComponent alternativeLabel orientation="linear">
      <Step>
        <StepLabel>Carrito de Compras</StepLabel>
      </Step>
      <StepConnector />
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
  );
};

export default Stepper;
