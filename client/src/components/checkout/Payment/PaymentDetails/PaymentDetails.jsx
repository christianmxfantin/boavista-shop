import { useRef, useState } from "react";
import { useTheme } from "@emotion/react";
import ButtonsContainer from "../../../layout/ButtonsContainer/ButtonsContainer";
import {
  PaymentDetailsContainer,
  CardNumber,
  CardDataContainer,
  CardExpirationDate,
  CardCVC,
  CardName,
} from "./PaymentDetails.styles";
import { InputAdornment } from "@mui/material";
import { useForm } from "react-hook-form";
import {
  validations,
  validateCardNumber,
  monthYearCheck,
} from "../../../../helpers/validations";
import DoneAdornment from "../../../layout/DoneAdornment/DoneAdornment";
import { Icon } from "../../../ui/Icon";
import { VisaIconSvg, MasterCardIconSvg, AmexIconSvg } from "../../../ui/Svg";
import CardAddress from "../../../layout/CardAddress/CardAddress";

const PaymentDetails = ({ formType, isButtonDisabled }) => {
  const theme = useTheme();
  const cardNumberValue = useRef("");
  const cardExpirationDateValue = useRef("");
  const cardNameValue = useRef("");
  const [showMyCards, setShowMyCards] = useState(false);
  const [cardType, setCardType] = useState("");

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  const handleChangeCardType = () => {
    const inputValue = parseInt(cardNumberValue.current.value);

    const cardRegExp = {
      visa: /^4[0-9]{6,}$/,
      master:
        /^5[1-5][0-9]{5,}|222[1-9][0-9]{3,}|22[3-9][0-9]{4,}|2[3-6][0-9]{5,}|27[01][0-9]{4,}|2720[0-9]{3,}$/,
      amex: /^3[47][0-9]{5,}$/,
    };

    for (let key in cardRegExp) {
      if (cardRegExp[key].test(inputValue)) {
        setCardType(key);
        break;
      } else {
        setCardType("");
      }
    }
  };

  const handleChangeExpirationDate = () => {
    const inputValue = cardExpirationDateValue.current.value;
    if (inputValue.length === 4) {
      cardExpirationDateValue.current.value = `${inputValue.slice(
        0,
        2
      )} / ${inputValue.slice(2)}`;
    }
  };

  const handleChangeToUpperCase = () => {
    cardNameValue.current.value = cardNameValue.current.value.toUpperCase();
  };

  const handleClickCancel = () => {
    reset();
    setShowMyCards(true);
    isButtonDisabled(false);
  };

  const onSubmit = (formValues) => {
    console.log(formValues);
    //save payment data

    handleClickCancel();
  };

  return showMyCards ? (
    <CardAddress
      formType={formType}
      itemType="card"
      isButtonDisabled={isButtonDisabled}
    />
  ) : (
    <PaymentDetailsContainer
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
          startAdornment: (
            <InputAdornment position="start">
              {cardType === "visa" ? (
                <VisaIconSvg />
              ) : cardType === "master" ? (
                <MasterCardIconSvg />
              ) : cardType === "amex" ? (
                <AmexIconSvg />
              ) : (
                <Icon name="credit-card" color={theme.palette.primary[500]} />
              )}
            </InputAdornment>
          ),
          endAdornment: (
            <DoneAdornment
              visibility={
                !errors.cardNumber && watch("cardNumber") ? "visible" : "hidden"
              }
            />
          ),
        }}
        inputRef={cardNumberValue}
        {...register("cardNumber", {
          required: validations.errorEmptyField,
          validate: validateCardNumber,
          onChange: handleChangeCardType,
        })}
        error={!!errors.cardNumber}
        helperText={errors.cardNumber?.message}
      />
      <CardDataContainer>
        <CardExpirationDate
          name="expirationDate"
          type="text"
          variant="outlined"
          size="small"
          placeholder="MM / AA"
          required
          inputProps={{ maxLength: 7 }}
          InputProps={{
            endAdornment: (
              <DoneAdornment
                visibility={
                  !errors.cardExpirationDate && watch("cardExpirationDate")
                    ? "visible"
                    : "hidden"
                }
              />
            ),
          }}
          inputRef={cardExpirationDateValue}
          {...register("cardExpirationDate", {
            required: validations.errorEmptyField,
            validate: monthYearCheck,
            onChange: handleChangeExpirationDate,
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
          inputProps={{ minLength: 3, maxLength: 4 }}
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
                !errors.cardName && watch("cardName") ? "visible" : "hidden"
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
      <ButtonsContainer formType={formType} onClick={handleClickCancel} />
    </PaymentDetailsContainer>
  );
};

export default PaymentDetails;
