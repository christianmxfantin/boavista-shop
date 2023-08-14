import { PaymentsErrors } from "../errors/payments.errors";

export const PatternValidations = {
  NAMES_AND_SURNAMES: /^[\p{L} -]{1,100}$/u,
  EMAIL: /^(?=.{6,100}$)[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
  PASSWORD: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,18}$/,
  ADDRESS: /^[a-zA-Z0-9\s.,'#-]{1,100}$/,
  PHONE: /^(?=.*[0-9].*)[0-9()+ ]{5,100}$/,
  COMMENTS: /^[a-zA-Z0-9\s.,!?"'()-]{0,200}$/,
  CARD_EXPIRATION_DATE: /^[0-9]{4}$/,
  CVC: /^[0-9]{3,4}$/,
};

export const validateCardNumber = (cardNumber) => {
  let sum = 0;
  let shouldDouble = false;

  for (let i = cardNumber.length - 1; i >= 0; i--) {
    let digit = parseInt(cardNumber.charAt(i), 10);

    if (shouldDouble) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }

    sum += digit;
    shouldDouble = !shouldDouble;
  }

  if ((sum % 10 === 0) === false) {
    return PaymentsErrors.CARD_NUMBER_INVALID;
  }
};

export const monthYearCheck = (value) => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1;

  const month = value.substring(0, 2);
  const year = value.substring(2);
  const inputMonth = parseInt(month.trim(), 10);
  let inputYear = 2000 + parseInt(year.trim(), 10);

  if (
    inputYear < currentYear ||
    (inputYear === currentYear && inputMonth < currentMonth)
  ) {
    return PaymentsErrors.CARD_EXPIRATION_DATE_INVALID;
  }

  return true;
};
