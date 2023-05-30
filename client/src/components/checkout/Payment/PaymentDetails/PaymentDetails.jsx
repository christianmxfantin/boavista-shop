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
import { useForm } from "react-hook-form";
import { validations, monthYearCheck } from "../../../../helpers/validations";
import DoneAdornment from "../../../layout/DoneAdornment/DoneAdornment";

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

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  const handleClickNewPayment = () => {
    setTypePayment("newCard");
  };

  const handleClickCancel = () => {
    reset();
    setTypePayment("myCards");
  };

  const onSubmit = (formValues) => {
    console.log(formValues);
    //save payment data

    handleClickCancel();
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
      // (isProfile && typePayment === "newCard")
      typePayment === "newCard" || typeCard === "newCard" ? (
        <PaymentNewCard
          component={"form"}
          autoComplete="off"
          noValidate
          onSubmit={handleSubmit(onSubmit)}
        >
          <CardNumber
            name="cardNumber"
            type="text"
            variant="outlined"
            size="small"
            placeholder="Ingrese su Número de Tarjeta"
            required
            InputProps={{
              endAdornment: <DoneAdornment visibility={"hidden"} />,
            }}
            {...register("cardNumber", {
              required: true,
              // pattern: validations.names.pattern,
            })}
            error={!!errors.cardNumber}
            // helperText={
            //   watch("cardNumber")
            //     ? errors.cardNumber && validations.cardNumber.errorDataNotValid
            //     : errors.cardNumber && validations.errorEmptyField
            // }
          />
          <CardDataContainer>
            <CardExpirationDate
              name="expirationDate"
              type="text"
              variant="outlined"
              size="small"
              placeholder="MM / AA"
              required
              InputProps={{
                endAdornment: <DoneAdornment visibility={"hidden"} />,
              }}
              {...register("expirationDate", {
                required: validations.errorEmptyField,
                pattern: {
                  value: validations.cardExpirationDate.pattern,
                  message: validations.cardExpirationDate.errorDataNotValid,
                },
                validate: monthYearCheck,
              })}
              error={!!errors.expirationDate}
              helperText={errors.expirationDate?.message}
            />
            <CardCVC
              name="cardCVC"
              type="text"
              variant="outlined"
              size="small"
              placeholder="CVC"
              required
              InputProps={{
                endAdornment: <DoneAdornment visibility={"hidden"} />,
              }}
              {...register("cardCVC", {
                required: true,
                // pattern: validations.names.pattern,
              })}
              error={!!errors.cardCVC}
              // helperText={
              //   watch("cardCVC")
              //     ? errors.cardCVC && validations.cardCVC.errorDataNotValid
              //     : errors.cardCVC && validations.errorEmptyField
              // }
            />
          </CardDataContainer>
          <CardName
            name="cardName"
            type="text"
            variant="outlined"
            size="small"
            placeholder="Ingrese su Nombre como aparece en la Tarjeta"
            {...register("cardName", {
              required: true,
              pattern: validations.names.pattern,
            })}
            error={!!errors.cardName}
            helperText={
              watch("cardName")
                ? errors.cardName && validations.names.errorDataNotValid
                : errors.cardName && validations.errorEmptyField
            }
          />
          <ButtonsContainer onClick={handleClickCancel} />
        </PaymentNewCard>
      ) : null}
    </PaymentDetailsContainer>
  );
};

export default PaymentDetails;
