import { useTheme } from "@emotion/react";
import { Button } from "@mui/material";
import { ButtonContainer } from "./ButtonsContainer.styles";

const ButtonsContainer = ({ formType, edit, onClick }) => {
  const theme = useTheme();

  return (
    <ButtonContainer>
      {formType !== "billing" && (
        <Button
          variant="text"
          onClick={onClick}
          sx={{
            width: "100%",
            marginRight: theme.spacing(1),
          }}
        >
          Cancelar
        </Button>
      )}
      {((formType === "billing" && edit) ||
        formType === "profile" ||
        formType === "shipping" ||
        formType === "payment") && (
        <Button
          variant="contained"
          type="submit"
          sx={{
            width: "100%",
          }}
        >
          Guardar
        </Button>
      )}
    </ButtonContainer>
  );
};

export default ButtonsContainer;
