const AddressesErrors = {
  TYPE_INVALID:
    "El tipo de dirección ingresado no es válido. Ten en cuenta que solo se permiten entre 1 y 20 caracteres, que incluyen letras y espacios.",
  ADDRESS_INVALID:
    "La dirección ingresada no es válida. Ten en cuenta que solo se permiten entre 1 y 100 caracteres, que incluyen letras, números, espacios y los siguientes caracteres: . , # -",
  STATE_INVALID:
    "El estado ingresado no es válido. Ten en cuenta que solo se permiten entre 1 y 50 caracteres alfabéticos",
  CITY_INVALID:
    "La ciudad ingresada no es válida. Ten en cuenta que solo se permiten entre 1 y 50 caracteres alfabéticos",
  COUNTRY_INVALID:
    "El país ingresado no es válido. Ten en cuenta que solo se permiten entre 1 y 100 caracteres alfabéticos",
  PHONE_INVALID:
    "El teléfono ingresado no es válido. Ten en cuenta que solo se permiten entre 1 y 100 caracteres, que incluyen números, espacios, el símbolo de suma (+) y los paréntesis ()",
  ADDRESS_NOT_FOUND: "La dirección ingresada no existe.",
};

module.exports = { AddressesErrors };
