import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { CardAddressContainer, ItemsContainer } from "./CardAddress.styles";
import CardAddressItem from "../CardAddressItem/CardAddressItem";
import Billing from "../../checkout/Billing/Billing";
import PaymentDetails from "../../checkout/Payment/PaymentDetails/PaymentDetails";

const myAddress = [
  {
    id: 1,
    type: "Casa",
    address: "Lavalleja 1345 5to Piso Dpto 60",
    state: "CABA",
    city: "Coghlan",
    comments: "La puerta de rejas verde es Portería",
  },
  {
    id: 2,
    type: "Trabajo",
    address: "Montevideo 534 11vo Piso",
    state: "CABA",
    city: "San Nicolás",
    comments: "No dejar los productos en Portería",
  },
];

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

const CardAddress = ({ formType, itemType, isButtonDisabled }) => {
  const [showAddNew, setShowAddNew] = useState(false);

  useEffect(() => {
    if (formType !== "profile") {
      isButtonDisabled(true);
    }
  }, [formType, isButtonDisabled]);

  const handleClick = () => {
    setShowAddNew(true);
  };

  return showAddNew ? (
    itemType === "address" ? (
      <Billing formType={formType} isButtonDisabled={isButtonDisabled} />
    ) : (
      <PaymentDetails formType={formType} isButtonDisabled={isButtonDisabled} />
    )
  ) : (
    <CardAddressContainer
      sx={{
        width:
          formType === "payment"
            ? "30%"
            : formType === "profile"
            ? "100%"
            : "inherit",
      }}
    >
      <ItemsContainer>
        {itemType === "address"
          ? myAddress.map((address) => (
              <CardAddressItem
                data={address}
                formType={formType}
                key={address.id}
                itemType={itemType}
                isButtonDisabled={isButtonDisabled}
              />
            ))
          : myCards.map((card) => (
              <CardAddressItem
                data={card}
                formType={formType}
                key={card.id}
                itemType={itemType}
                isButtonDisabled={isButtonDisabled}
              />
            ))}
      </ItemsContainer>
      <Button
        variant={formType === "profile" ? "text" : "contained"}
        onClick={handleClick}
        sx={{ width: "100%", marginTop: formType === "profile" && "16px" }}
      >
        {itemType === "address"
          ? "Agregar Nueva Dirección"
          : "Agregar Método de Pago"}
      </Button>
    </CardAddressContainer>
  );
};

export default CardAddress;
