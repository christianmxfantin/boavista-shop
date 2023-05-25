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

const PaymentDetails = ({ typeData, isProfile }) => {
  const [newPayment, setNewPayment] = useState(false);

  const handleClickNewPayment = () => {
    setNewPayment(true);
  };

  const handleClickCancel = () => {
    // reset();
    setNewPayment(false);
  };

  return (
    <PaymentDetailsContainer
      sx={{
        width: !isProfile ? "25" : "inherit",
        // visibility: typeData ? "visible" : "hidden",
      }}
    >
      {!newPayment ? (
        <>
          <MyCardsContainer>
            {myCards.map((card) => (
              <MyCardsItem key={card.id} card={card} />
            ))}
          </MyCardsContainer>
          <Button
            variant="text"
            onClick={handleClickNewPayment}
            sx={{ width: "100%", marginTop: "16px" }}
          >
            Agregar Método de Pago
          </Button>
        </>
      ) : (
        <PaymentNewCard>
          <CardNumber placeholder="Número de Tarjeta"></CardNumber>
          <CardDataContainer>
            <CardExpirationDate placeholder="Vencimiento"></CardExpirationDate>
            <CardCVC placeholder="CVC"></CardCVC>
          </CardDataContainer>
          <CardName placeholder="Nombre Completo Tarjeta"></CardName>

          <ButtonsContainer onClick={handleClickCancel} />
        </PaymentNewCard>
      )}
    </PaymentDetailsContainer>
  );
};

export default PaymentDetails;
