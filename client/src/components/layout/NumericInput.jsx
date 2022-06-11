import { useTheme } from "@emotion/react";
import {
  Box,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { Icon } from "../ui/Icon";

const NumericInputContainer = styled(ToggleButtonGroup)(({ theme }) => ({
  marginTop: theme.spacing(4), //32px
}));

const AddButton = styled(ToggleButton)(({ theme }) => ({
  //styles
}));

const Quantity = styled(Box)(({ theme }) => ({
  padding: theme.spacing(0, 1, 0, 1), //8px
  color: theme.palette.primary[500],
}));

const RemoveButton = styled(ToggleButton)(({ theme }) => ({
  //styles
}));

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
