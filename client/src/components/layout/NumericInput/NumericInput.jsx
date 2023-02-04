import { useTheme } from "@emotion/react";
import { ToggleButton, Typography } from "@mui/material";
import {
  NumericInputContainer,
  AddButton,
  Quantity,
  RemoveButton,
} from "./NumericInput.styles";
import { Icon } from "../../ui/Icon";

const NumericInput = () => {
  const theme = useTheme();

  return (
    <NumericInputContainer>
      <AddButton value="left">
        <Icon name="Add" size={20} color={theme.palette.primary[500]} />
      </AddButton>
      <ToggleButton value="center">
        <Quantity>
          <Typography variant="subtitle-1">1</Typography>
        </Quantity>
      </ToggleButton>
      <RemoveButton value="right">
        <Icon name="Remove" size={20} color={theme.palette.primary[500]} />
      </RemoveButton>
    </NumericInputContainer>
  );
};

export default NumericInput;
