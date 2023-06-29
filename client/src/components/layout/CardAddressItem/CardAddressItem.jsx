import { useState } from "react";
import { useTheme } from "@emotion/react";
import { Icon } from "../../ui/Icon";
import ActionButtons from "../ActionButtons/ActionButtons";
import {
  CardAddressItemContainer,
  IconContainer,
  ItemData,
  ItemTitle,
  ItemTitleContainer,
} from "./CardAddressItem.styles";
import { Checkbox, FormControlLabel } from "@mui/material";

const CardAddressItem = ({
  data,
  formType,
  itemType,
  isButtonDisabled,
  selectedAddress,
}) => {
  const theme = useTheme();
  const [isHover, setIsHover] = useState(false);
  const [isSelected, setIsSelected] = useState(false);

  const handleChangeCheckbox = (e) => {
    if (e.target.checked === true) {
      setIsSelected(true);
      isButtonDisabled(false);
    } else {
      setIsSelected(false);
      isButtonDisabled(true);
    }
    selectedAddress(e.target.value);
  };

  return (
    <CardAddressItemContainer
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      sx={{
        backgroundColor:
          isSelected || (isHover && formType === "profile")
            ? theme.palette.primary[300]
            : "inherit",
        color:
          isSelected || (isHover && formType === "profile")
            ? theme.palette.secondary.A100
            : "inherit",
      }}
    >
      {formType !== "profile" ? (
        <FormControlLabel
          control={
            <Checkbox
              name={
                formType === "shipping" ? "shippingMethod" : "paymentMethod"
              }
              value={data.id}
              onChange={(e) => handleChangeCheckbox(e)}
              sx={{
                color: theme.palette.secondary.A100,
                "&:hover": {
                  color: theme.palette.secondary.A100,
                },
              }}
            />
          }
        />
      ) : (
        <IconContainer sx={{ alignItems: itemType === "address" && "center" }}>
          <Icon
            name={itemType === "address" ? "address-card" : "credit-card"}
          />
        </IconContainer>
      )}

      {itemType === "address" ? (
        <ItemTitleContainer>
          <ItemTitle
            sx={{
              marginLeft: theme.spacing(2),
            }}
          >
            {data.type}
          </ItemTitle>
          <ItemData variant="subtitle2">{data.address}</ItemData>
        </ItemTitleContainer>
      ) : (
        <ItemTitle
          sx={{
            marginLeft: formType !== "profile" ? 0 : theme.spacing(2),
          }}
        >
          {`${
            data.typeCard === "credit" ? "Visa Crédito" : "Visa Débito"
          } terminada en ${data.finalNumber}`}
        </ItemTitle>
      )}
      <ActionButtons
        type={itemType === "address" ? "address" : "card"}
        data={data}
      />
    </CardAddressItemContainer>
  );
};

export default CardAddressItem;
