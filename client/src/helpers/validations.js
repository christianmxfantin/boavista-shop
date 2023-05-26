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
};
