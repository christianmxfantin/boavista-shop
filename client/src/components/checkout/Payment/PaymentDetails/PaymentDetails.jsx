import MyCardsItem from "../../../layout/MyCardsItem/MyCardsItem";
import {
  PaymentDetailsContainer,
  MyCardsContainer,
  PaymentNewCard,
  CardNumber,
  CardDataContainer,
  CardExpirationDate,
  CardCVC,
  CardName,
} from "./PaymentDetails.styles";

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
        <MyCardsContainer>
          <MyCardsContainer>
            {myCards.map((card) => (
              <MyCardsItem key={card.id} card={card} />
            ))}
          </MyCardsContainer>
        </MyCardsContainer>
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
