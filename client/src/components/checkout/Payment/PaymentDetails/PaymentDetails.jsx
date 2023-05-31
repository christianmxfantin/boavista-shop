import { useRef, useState } from "react";
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
  const cardNameValue = useRef("");
  const [typePayment, setTypePayment] = useState("myCards");

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  //add function to add line in MM/AA

  const handleChangeToUpperCase = () => {
    cardNameValue.current.value = cardNameValue.current.value.toUpperCase();
  };

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
              endAdornment: (
                <DoneAdornment
                  visibility={
                    !errors.cardNumber && watch("cardNumber")
                      ? "visible"
                      : "hidden"
                  }
                />
              ),
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
                endAdornment: (
                  <DoneAdornment
                    visibility={
                      !errors.expirationDate && watch("cardExpirationDate")
                        ? "visible"
                        : "hidden"
                    }
                  />
                ),
              }}
              {...register("cardExpirationDate", {
                required: validations.errorEmptyField,
                pattern: {
                  value: validations.cardExpirationDate.pattern,
                  message: validations.cardExpirationDate.errorDataNotValid,
                },
                validate: monthYearCheck,
              })}
              error={!!errors.cardExpirationDate}
              helperText={errors.cardExpirationDate?.message}
            />
            <CardCVC
              name="cardCVC"
              type="text"
              variant="outlined"
              size="small"
              placeholder="CVC"
              required
              InputProps={{
                endAdornment: (
                  <DoneAdornment
                    visibility={
                      !errors.cardCVC && watch("cardCVC") ? "visible" : "hidden"
                    }
                  />
                ),
              }}
              {...register("cardCVC", {
                required: validations.errorEmptyField,
                minLength: {
                  value: validations.cardCVC.pattern,
                  message: validations.cardCVC.errorDataNotValid,
                },
                maxLength: {
                  value: validations.cardCVC.pattern,
                  message: validations.cardCVC.errorDataNotValid,
                },
                pattern: {
                  value: validations.cardCVC.pattern,
                  message: validations.cardCVC.errorDataNotValid,
                },
              })}
              error={!!errors.cardCVC}
              helperText={errors.cardCVC?.message}
            />
          </CardDataContainer>
          <CardName
            name="cardName"
            type="text"
            variant="outlined"
            size="small"
            placeholder="Ingrese su Nombre como aparece en la Tarjeta"
            required
            InputProps={{
              endAdornment: (
                <DoneAdornment
                  visibility={
                    !errors.CardName && watch("cardName") ? "visible" : "hidden"
                  }
                />
              ),
            }}
            inputRef={cardNameValue}
            {...register("cardName", {
              required: true,
              pattern: validations.names.pattern,
              onChange: handleChangeToUpperCase,
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
