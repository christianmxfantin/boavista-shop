import { Stepper } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StepperComponent = styled(Stepper)(({ theme }) => ({
  marginBottom: theme.spacing(3), //24px
}));
