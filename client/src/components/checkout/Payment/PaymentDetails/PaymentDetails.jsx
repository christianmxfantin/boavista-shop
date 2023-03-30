import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import {
  PaymentDetailsContainer,
  MyCardsList,
  PaymentNewCard,
  CardNumber,
  CardDataContainer,
  CardExpirationDate,
  CardCVC,
  CardName,
} from "./PaymentDetails.styles";
import { Icon } from "../../../ui/Icon";

const myCards = [
  {
    finalNumber: 1142,
    typeCard: "debit",
  },
  {
    finalNumber: 5454,
    typeCard: "credit",
  },
];

const PaymentDetails = ({ data, profile }) => {
  return (
    <PaymentDetailsContainer
      sx={{
        width: !profile ? "25" : "inherit",
        visibility: data ? "visible" : "hidden",
      }}
    >
      {data === "myCards" ? (
        <MyCardsList>
          {myCards.map((card) => (
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <Icon name="Credit-Card" />
                </ListItemIcon>
                <ListItemText
                  primary={`${
                    card.typeCard === "credit" ? "Visa Crédito" : "Visa Débito"
                  } terminada en ${card.finalNumber}`}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </MyCardsList>
      ) : (
        <PaymentNewCard>
          <CardNumber placeholder="Número de Tarjeta"></CardNumber>
          <CardDataContainer>
            <CardExpirationDate placeholder="Vencimiento"></CardExpirationDate>
            <CardCVC placeholder="CVC"></CardCVC>
          </CardDataContainer>
          <CardName placeholder="Nombre Completo Tarjeta"></CardName>
        </PaymentNewCard>
      )}
    </PaymentDetailsContainer>
  );
};

export default PaymentDetails;
