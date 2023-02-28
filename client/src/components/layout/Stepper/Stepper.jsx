import { useTheme } from "@emotion/react";
import {
  Stepper as StepperComponent,
  StepConnector,
  Step,
  StepLabel,
} from "@mui/material";

const Stepper = () => {
  const theme = useTheme();

  return (
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
  );
};

export default Stepper;
