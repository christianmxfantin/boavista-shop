import { useState } from "react";
import { useTheme } from "@emotion/react";
import { ToggleButton } from "@mui/material";
import {
  NumericInputContainer,
  AddButton,
  Quantity,
  RemoveButton,
} from "./NumericInput.styles";
import { Icon } from "../../ui/Icon";

const NumericInput = ({ type, total }) => {
  const theme = useTheme();

  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    if (count < total) {
      setCount(count + 1);
    }
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleInputChange = (e) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value >= 1 && value <= total) {
      setCount(value);
    }
  };

  return (
    <NumericInputContainer sx={{ display: type && "contents" }}>
      <AddButton value="left" onClick={handleIncrement}>
        <Icon name="Add" size={20} color={theme.palette.primary[500]} />
      </AddButton>
      <ToggleButton value="center">
        <Quantity>
          <input
            value={count}
            onChange={handleInputChange}
            style={{
              width: "30px",
              border: "none",
              color: theme.palette.primary[500],
            }}
          />
        </Quantity>
      </ToggleButton>
      <RemoveButton value="right" onClick={handleDecrement}>
        <Icon name="Remove" size={20} color={theme.palette.primary[500]} />
      </RemoveButton>
    </NumericInputContainer>
  );
};

export default NumericInput;
