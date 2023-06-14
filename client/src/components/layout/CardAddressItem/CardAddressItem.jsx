import { useState } from "react";
import { useTheme } from "@emotion/react";
import { Icon } from "../../ui/Icon";
import ActionButtons from "../ActionButtons/ActionButtons";
import {
  ItemData,
  ItemTitle,
  ItemTitleContainer,
  MyCardsItemContainer,
  MyCardsItemText,
} from "./CardAddressItem.styles";

const CardAddressItem = ({ itemType, data }) => {
  const theme = useTheme();
  const [isHover, setIsHover] = useState(false);
  return (
    <MyCardsItemContainer
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      sx={{
        backgroundColor: isHover ? theme.palette.primary[300] : "inherit",
        color: isHover ? theme.palette.secondary.A100 : "inherit",
      }}
    >
      <Icon name={itemType === "address" ? "address-card" : "credit-card"} />
      {itemType === "address" ? (
        <ItemTitleContainer>
          <ItemTitle>{data.type}</ItemTitle>
          <ItemData>{data.address}</ItemData>
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
    </MyCardsItemContainer>
  );
};

export default CardAddressItem;
