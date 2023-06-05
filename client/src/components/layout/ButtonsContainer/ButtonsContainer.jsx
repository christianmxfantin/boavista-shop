import { useTheme } from "@emotion/react";
import { Button } from "@mui/material";
import { ButtonContainer } from "./ButtonsContainer.styles";

const ButtonsContainer = ({ isHidden, onClick }) => {
  const theme = useTheme();

  return (
    <ButtonContainer>
      <Button
        variant="text"
        onClick={onClick}
        sx={{
          width: "100%",
          marginRight: theme.spacing(1),
          display: isHidden ? "none" : "inherit",
        }}
      >
        Cancelar
      </Button>
      <Button variant="contained" type="submit" sx={{ width: "100%" }}>
        Guardar
      </Button>
    </ButtonContainer>
  );
};

export default ButtonsContainer;
