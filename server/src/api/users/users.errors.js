const { lengthField } = require("../../db/db.errors");

const UserErrors = {
  NAMES_INVALID: "Los nombres ingresados no son válidos",
  SURNAMES_INVALID: "Los apellidos ingresados no son válidos",
  EMAIL_INVALID: "El email ingresado no es válido",
  PASSWORD_INVALID: "La contraseña ingresada no es válida",
  PASSWORD_LENGTH: lengthField("contraseña", 8, 18),
  EMAIL_ALREADY_EXISTS: "Ya existe una cuenta con el email que has ingresado",
  USER_NOT_FOUND: "El usuario ingresado no existe",
  TOKEN_INVALID: "El usuario no está autenticado",

  //No utilizados aun
  // SHOULD_REGISTER_WITH_GOOGLE:
  //   "Ya existe una cuenta con el e-mail que ingresaste. Si es tuya, iniciá sesión con Google.",
  // SHOULD_LOGIN_WITH_GOOGLE:
  //   "Te registraste usando tu cuenta de Google. Por favor, inicia sesión con ese método.",
};

module.exports = { UserErrors };
