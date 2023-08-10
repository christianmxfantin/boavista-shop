const { lengthField } = require("../../db/db.errors");

const UsersErrors = {
  NAMES_INVALID:
    "Los nombres ingresados no son válidos. Ten en cuenta que solo se permiten entre 1 y 100 caracteres.",
  SURNAMES_INVALID:
    "Los apellidos ingresados no son válidos. Ten en cuenta que solo se permiten entre 1 y 100 caracteres.",
  EMAIL_INVALID:
    "El email ingresado no es válido. Ten en cuenta que solo se permiten entre 6 y 100 caracteres.",
  PASSWORD_INVALID:
    "La contraseña ingresada no es válida. Ten en cuenta que solo se permiten entre 8 y 18 caracteres.",
  EMAIL_ALREADY_EXISTS: "Ya existe una cuenta con el email que has ingresado",
  USER_NOT_FOUND: "El usuario ingresado no existe",
  TOKEN_INVALID: "El usuario no está autenticado",
  ROLE_ERROR: "No se puede crear un usuario con el rol ingresado",

  //No utilizados aun
  // SHOULD_REGISTER_WITH_GOOGLE:
  //   "Ya existe una cuenta con el e-mail que ingresaste. Si es tuya, iniciá sesión con Google.",
  // SHOULD_LOGIN_WITH_GOOGLE:
  //   "Te registraste usando tu cuenta de Google. Por favor, inicia sesión con ese método.",
};

module.exports = { UsersErrors };
