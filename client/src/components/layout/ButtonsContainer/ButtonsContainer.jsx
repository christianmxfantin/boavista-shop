import { useTheme } from "@emotion/react";
import { Button } from "@mui/material";
import { ButtonContainer } from "./ButtonsContainer.styles";

const ButtonsContainer = ({ formType, edit, visibleShipping, onClick }) => {
  const theme = useTheme();

  return (
    <ButtonContainer>
      <Button
        variant="text"
        onClick={onClick}
        sx={{
          width: "100%",
          marginRight: theme.spacing(1),
          visibility:
            (formType === "billing" || formType === "profile") && edit
              ? "visible"
              : "hidden",
          display: formType !== "profile" ? "none" : "inherit",
        }}
      >
        Cancelar
      </Button>
      {console.log(formType, visibleShipping, edit)}
      <Button
        variant="contained"
        type="submit"
        sx={{
          width: "100%",
          visibility:
            ((formType === "billing" || formType === "profile") && edit) ||
            (formType === "shipping" && visibleShipping && edit) ||
            (formType === "shippin" && edit)
              ? "visible"
              : "hidden",
        }}
      >
        Guardar
      </Button>
    </ButtonContainer>
  );
};

export default ButtonsContainer;
