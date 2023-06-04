export const validations = {
  errorEmptyField: "El campo no puede estar vacío",
  names: {
    pattern: /^[\p{L} -]+$/u,
    errorDataNotValid: "Los datos ingresados son inválidos",
  },
  mail: {
    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    errorDataNotValid: "Los datos ingresados son inválidos",
  },
  password: {
    pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
    errorDataNotValid:
      "El campo debe contener al menos 8 caracteres, incluyendo al menos un número, una letra minúscula y una letra mayúscula",
  },
  address: {
    pattern: /^[\p{L}\d\s.,'#-]+$/u,
    errorDataNotValid:
      "La dirección solo puede contener caracteres alfanuméricos, comas, puntos, guiones medios (-), apóstrofes (') y el símbolo numeral (#)",
  },
  phone: {
    pattern: /^(?=.*[0-9].*)[0-9()+ ]{5,}$/,
    errorDataNotValid:
      "Los números telefónicos solo pueden incluir números, espacios, el símbolo de suma (+), los paréntesis () y al menos cinco dígitos como mínimo",
  },
  cardNumber: {
    errorDataNotValid: "El número de tarjeta ingresado no es válido",
  },
  cardExpirationDate: {
    errorDataNotValid:
      "La fecha de expiración debe ser superior al mes y el año actual, y solo puede contener dos dígitos para el mes (MM) y dos dígitos para el año (AA)",
  },
  cardCVC: {
    pattern: /^[0-9]{3,4}$/,
    errorDataNotValid:
      "El Código de Seguridad solo puede contener números, como mínimo 3 dígitos y como máximo 4 dígitos",
  },
};

export const validateCardNumber = (cardNumber) => {
  console.log(cardNumber);
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
    return validations.cardNumber.errorDataNotValid;
  }
};

export const monthYearCheck = (value) => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1;

  const [month, year] = value.split("/");
  const inputMonth = parseInt(month.trim(), 10);
  let inputYear = 2000 + parseInt(year.trim().slice(-2), 10);

  if (
    inputYear < currentYear ||
    (inputYear === currentYear && inputMonth < currentMonth)
  ) {
    return validations.cardExpirationDate.errorDataNotValid;
  }

  return true;
};
