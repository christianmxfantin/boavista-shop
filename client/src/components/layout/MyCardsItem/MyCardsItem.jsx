import { useState } from "react";
import { useTheme } from "@emotion/react";
import { Icon } from "../../ui/Icon";
import ActionButtons from "../ActionButtons/ActionButtons";
import { MyCardsItemContainer, MyCardsItemText } from "./MyCardsItem.styles";

const MyCardsItem = ({ card }) => {
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
      <Icon name="Credit-Card" />
      <MyCardsItemText>
        {`${
          card.typeCard === "credit" ? "Visa Crédito" : "Visa Débito"
        } terminada en ${card.finalNumber}`}
      </MyCardsItemText>
      <ActionButtons />
    </MyCardsItemContainer>
  );
};

export default MyCardsItem;
