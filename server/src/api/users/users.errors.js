const UserErrors = {
  NAMES_INVALID: "El nombre ingresado tiene caracteres no válidos",
  EMAIL_INVALID: "El email ingresado tiene caracteres no válidos",
  PASSWORD_INVALID: "La contraseña ingresada tiene caracteres no válidos",
  EMAIL_ALREADY_EXISTS: "Ya existe una cuenta con el email que ingresado",
  USER_NOT_FOUND: "El usuario ingresado no existe",

  //No utilizados aun
  // SHOULD_REGISTER_WITH_GOOGLE:
  //   "Ya existe una cuenta con el e-mail que ingresaste. Si es tuya, iniciá sesión con Google.",
  // SHOULD_LOGIN_WITH_GOOGLE:
  //   "Te registraste usando tu cuenta de Google. Por favor, inicia sesión con ese método.",
};

module.exports = { UserErrors };
