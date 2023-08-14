const ProductsErrors = {
  NAME_INVALID:
    "El nombre de producto ingresados no es válido. Ten en cuenta que solo se permiten entre 1 y 100 caracteres, que incluyen letras, números, espacios y los siguientes caracteres: . , ! ( ) - +",
  PRICE_INVALID: "El precio ingresado no es válido.",
  PRICE_INTEGER_PART:
    "El precio solo admite hasta 10 dígitos antes del punto decimal.",
  PRICE_DECIMAL_PART:
    "El precio solo admite hasta 2 dígitos después del punto decimal.",
  STOCK_INVALID: "El stock solo permite ingresar hasta 4 dígitos.",
  PRODUCT_NOT_FOUND: "El producto ingresado no existe.",
  PRODUCT_NAME_ALREADY_EXISTS: "El nombre del producto ingresado ya existe.",
  ROLE_DELETE_ACTION:
    "Debe ser un usuario administrador para poder borrar un producto.",
};

module.exports = { ProductsErrors };
