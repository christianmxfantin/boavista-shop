const ProductsErrors = {
  NAME_INVALID:
    "El nombre de producto ingresados no es válido. Ten en cuenta que solo se permiten entre 1 y 100 caracteres, que incluyen letras, números, espacios y los siguientes caracteres: . , ! ( ) - +",
  PRICE_INVALID: "El precio ingresado no es válido.",
  PRICE_INTEGER_PART:
    "El precio solo admite hasta 10 dígitos antes del punto decimal.",
  PRICE_DECIMAL_PART:
    "El precio solo admite hasta 2 dígitos después del punto decimal.",
  STOCK_INVALID: "El stock solo permite ingresar hasta 4 dígitos.",
  PRODUCT_NAME_ALREADY_EXISTS: "El nombre del producto ingresado ya existe.",
  TYPE_CHANGE_PRICES: "El tipo de cambio de precio ingresado no es válido.",
  PERCENTAGE_INVALID: "El porcentaje ingresado no es válido.",
};

module.exports = { ProductsErrors };
