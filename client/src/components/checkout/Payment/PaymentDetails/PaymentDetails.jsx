import { useState } from "react";
import ButtonsContainer from "../../../layout/ButtonsContainer/ButtonsContainer";
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
import { Button } from "@mui/material";

const myCards = [
  {
    id: 1,
    finalNumber: 1142,
    typeCard: "debit",
  },
  {
    id: 2,
    finalNumber: 5454,
    typeCard: "credit",
  },
];

const PaymentDetails = ({ isProfile, typeCard }) => {
  const [typePayment, setTypePayment] = useState("myCards");

  const handleClickNewPayment = () => {
    setTypePayment("newCard");
  };

  const handleClickCancel = () => {
    // reset();
    setTypePayment("myCards");
  };

  return (
    <PaymentDetailsContainer
      sx={{
        width: !isProfile ? "25" : "inherit",
      }}
    >
      {(isProfile && typePayment === "myCards") || typeCard === "myCards" ? (
        <>
          <MyCardsContainer>
            {myCards.map((card) => (
              <MyCardsItem key={card.id} card={card} />
            ))}
          </MyCardsContainer>
          {isProfile && (
            <Button
              variant="text"
              onClick={handleClickNewPayment}
              sx={{ width: "100%", marginTop: "16px" }}
            >
              Agregar Método de Pago
            </Button>
          )}
        </>
      ) : //si hay algun error se puede agregar la siguiente condición:
      // isProfile && typePayment === "newCard"
      typePayment === "newCard" || typeCard === "newCard" ? (
        <PaymentNewCard>
          <CardNumber placeholder="Número de Tarjeta"></CardNumber>
          <CardDataContainer>
            <CardExpirationDate placeholder="Vencimiento"></CardExpirationDate>
            <CardCVC placeholder="CVC"></CardCVC>
          </CardDataContainer>
          <CardName placeholder="Nombre Completo Tarjeta"></CardName>
          <ButtonsContainer onClick={handleClickCancel} />
        </PaymentNewCard>
      ) : null}
    </PaymentDetailsContainer>
  );
};

export default PaymentDetails;
