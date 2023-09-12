import { useState } from "react";
import { useDispatch } from "react-redux";
import { useTheme } from "@emotion/react";
import { ToggleButton } from "@mui/material";
import {
  NumericInputContainer,
  AddButton,
  Quantity,
  RemoveButton,
} from "./NumericInput.styles";
import { Icon } from "../../ui/Icon";

import { addOneToCart, removeOneFromCart } from "../../../reducers/cart";

const NumericInput = ({
  type,
  total,
  totalProduct,
  setQuantityPrice,
  data,
}) => {
  let formType;
  let id;
  if (data) {
    ({ formType, id } = data);
  }

  const theme = useTheme();
  const dispatch = useDispatch();

  const [count, setCount] = useState(totalProduct);

  const handleIncrement = () => {
    if (count < total) {
      setCount(count + 1);
    }

    if (formType === "cart") {
      setQuantityPrice(count + 1);
      dispatch(addOneToCart(id));
    }
  };

  const handleDecrement = (id) => {
    if (count > 1) {
      setCount(count - 1);
    }
    if (formType === "cart") {
      setQuantityPrice(count - 1);
      dispatch(removeOneFromCart(id));
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
      <AddButton value="left" onClick={() => handleIncrement(id)}>
        <Icon name="Add" size={20} color={theme.palette.primary[500]} />
      </AddButton>
      <ToggleButton
        value="center"
        sx={{
          padding: theme.spacing(1),
          backgroundColor: theme.palette.primary[300],
          "&:hover": {
            backgroundColor: theme.palette.primary[300],
          },
        }}
      >
        <Quantity>
          <input
            name="quantity"
            value={count}
            onChange={handleInputChange}
            style={{
              width: "50px",
              textAlign: "center",
              border: "none",
              fontSize: theme.spacing(2.5),
              fontWeight: "bold",
              backgroundColor: theme.palette.primary[300],
              color: theme.palette.secondary.A100,
            }}
          />
        </Quantity>
      </ToggleButton>
      <RemoveButton
        value="right"
        disabled={count === 1}
        onClick={() => handleDecrement(id)}
      >
        <Icon name="Remove" size={20} color={theme.palette.primary[500]} />
      </RemoveButton>
    </NumericInputContainer>
  );
};

export default NumericInput;
