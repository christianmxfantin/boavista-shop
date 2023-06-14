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

const CardAddressItem = ({ itemType, data }) => {
  const theme = useTheme();
  const [isHover, setIsHover] = useState(false);
  return (
    <CardAddressItemContainer
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      sx={{
        backgroundColor: isHover ? theme.palette.primary[300] : "inherit",
        color: isHover ? theme.palette.secondary.A100 : "inherit",
      }}
    >
      <IconContainer sx={{ alignItems: itemType === "address" && "center" }}>
        <Icon name={itemType === "address" ? "address-card" : "credit-card"} />
      </IconContainer>
      {itemType === "address" ? (
        <ItemTitleContainer>
          <ItemTitle>{data.type}</ItemTitle>
          <ItemData variant="subtitle2">{data.address}</ItemData>
        </ItemTitleContainer>
      ) : (
        <ItemTitle>
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
