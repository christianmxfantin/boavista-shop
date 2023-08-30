import { useEffect, useRef, useState } from "react";
import { useTheme } from "@emotion/react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
  validateCardNumber,
  monthYearCheck,
  PatternValidations,
} from "../../../../helpers/validations";
import DoneAdornment from "../../../layout/DoneAdornment/DoneAdornment";
import { Icon } from "../../../ui/Icon";
import { VisaIconSvg, MasterCardIconSvg, AmexIconSvg } from "../../../ui/Svg";
import CardAddress from "../../../layout/CardAddress/CardAddress";
import { EmptyFieldError } from "../../../../errors/emptyField.errors";
import { PaymentsErrors } from "../../../../errors/payments.errors";
import { UsersErrors } from "../../../../errors/users.errors";
import { saveNewPayment } from "./PaymentDetails.helpers";
import { SuccessMessages } from "../../../../utils/toastMessages";
import { toastColor } from "../../../../utils/toastOptions";
import { responseError, statusErrors } from "../../../../utils/toastErrors";

const PaymentDetails = ({
  formType,
  handleLeft,
  handleRight,
  setStepperData,
  setSelectedCard,
  isButtonDisabled,
  setIsButtonDisabled,
}) => {
  const theme = useTheme();
  const cardNumberValue = useRef("");
  const cardExpirationDateValue = useRef("");
  const cardNameValue = useRef("");
  const { user } = useSelector((state) => state.auth);

  const [showMyCards, setShowMyCards] = useState(false);
  const [cardType, setCardType] = useState("");

  useEffect(() => {
    if (formType === "payment") {
      setIsButtonDisabled(true);
    }
  }, [formType, setIsButtonDisabled]);

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

  const handleChangeToUpperCase = () => {
    cardNameValue.current.value = cardNameValue.current.value.toUpperCase();
  };

  const handleClickCancel = () => {
    reset();
    setShowMyCards(true);
    if (formType !== "profile") {
      setIsButtonDisabled(false);
    }
  };

  const onSubmit = (formValues) => {
    try {
      saveNewPayment(formValues, cardType, user);
      toast.success(SuccessMessages.CHANGES_DONE, toastColor("success"));
      handleClickCancel();
    } catch (error) {
      console.log(error);
      statusErrors(error);
      responseError(error);
      reset();
    }
  };

  return showMyCards ? (
    <CardAddress
      formType={formType}
      itemType="card"
      handleLeft={handleLeft}
      handleRight={handleRight}
      setStepperData={setStepperData}
      setSelectedCard={setSelectedCard}
      isButtonDisabled={isButtonDisabled}
      setIsButtonDisabled={setIsButtonDisabled}
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
          required: EmptyFieldError.EMPTY_ERROR,
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
          placeholder="MMAA"
          required
          inputProps={{ maxLength: 4 }}
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
            required: EmptyFieldError.EMPTY_ERROR,
            validate: monthYearCheck,
            pattern: {
              value: PatternValidations.CARD_EXPIRATION_DATE,
              message: PaymentsErrors.CARD_EXPIRATION_DATE_INVALID,
            },
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
            required: EmptyFieldError.EMPTY_ERROR,
            minLength: {
              value: PatternValidations.CVC,
              message: PaymentsErrors.CVC_INVALID,
            },
            maxLength: {
              value: PatternValidations.CVC,
              message: PaymentsErrors.CVC_INVALID,
            },
            pattern: {
              value: PatternValidations.CVC,
              message: PaymentsErrors.CVC_INVALID,
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
          pattern: PatternValidations.NAMES_AND_SURNAMES,
          onChange: handleChangeToUpperCase,
        })}
        error={!!errors.cardName}
        helperText={
          watch("cardName")
            ? errors.cardName && UsersErrors.NAMES_INVALID
            : errors.cardName && EmptyFieldError.EMPTY_ERROR
        }
      />
      <ButtonsContainer
        formType={formType}
        leftName="Cancelar"
        rightName="Guardar"
        onClickLeft={handleClickCancel}
      />
    </PaymentDetailsContainer>
  );
};

export default PaymentDetails;
