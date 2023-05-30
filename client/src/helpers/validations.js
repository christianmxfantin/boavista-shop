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
    pattern: "",
    errorDataNotValid: "",
  },
  cardExpirationDate: {
    pattern: /^(0[1-9]|1[0-2])\/(2[2-9]|[3-9][0-9])$/,
    errorDataNotValid:
      "La fecha de expiración debe ser superior al mes y el año actual, y solo puede contener dos dígitos para el mes (MM) y dos dígitos para el año (AA)",
  },
};

export const monthYearCheck = (value) => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1;

  const [month, year] = value.split("/");
  const inputMonth = parseInt(month, 10);
  let inputYear = parseInt(year, 10);

  // Agrega el prefijo "20" si el año tiene solo dos dígitos
  if (year.length === 2) {
    inputYear += 2000;
  }

  if (
    inputYear < currentYear ||
    (inputYear === currentYear && inputMonth < currentMonth)
  ) {
    return validations.cardExpirationDate.errorDataNotValid;
  }

  return true;
};
