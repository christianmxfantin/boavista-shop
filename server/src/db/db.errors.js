const emptyField = (field) => {
  return `El campo ${field} no puede estar vacío`;
};

const lengthField = (field, min, max) => {
  return `El campo ${field} solo puede contener ${min} ${
    min === 1 ? "caracter" : "caracteres"
  } como mínimo y ${max} como máximo`;
};

module.exports = { emptyField, lengthField };
