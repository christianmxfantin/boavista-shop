export const validateLoginForm = (form, fieldName) => {
  const value = form[fieldName];
  const errors = {};
  const regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  const regexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

  if (!value.trim()) {
    errors[fieldName] = "El campo no puede estar vacío";
  } else if (fieldName === "email" && !regexEmail.test(value.trim())) {
    errors[fieldName] = "Los datos ingresados no son válidos";
  } else if (fieldName === "password" && !regexPassword.test(value.trim())) {
    errors[fieldName] =
      "El campo debe contener al menos 8 caracteres, incluyendo al menos un número, una letra minúscula y una letra mayúscula";
  }

  return errors[fieldName];
};

export const validateRegisterForm = (form, fieldName) => {
  const value = form[fieldName];
  const errors = {};
  const regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  const regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  const regexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

  if (!value.trim()) {
    errors[fieldName] = "El campo no puede estar vacío";
  } else if (fieldName === "name" && !regexName.test(value.trim())) {
    errors[fieldName] = "Los datos ingresados no son válidos";
  } else if (fieldName === "surname" && !regexName.test(value.trim())) {
    errors[fieldName] = "Los datos ingresados no son válidos";
  } else if (fieldName === "email" && !regexEmail.test(value.trim())) {
    errors[fieldName] = "Los datos ingresados no son válidos";
  } else if (fieldName === "password" && !regexPassword.test(value.trim())) {
    errors[fieldName] =
      "El campo debe contener al menos 8 caracteres, incluyendo al menos un número, una letra minúscula y una letra mayúscula";
  }

  return errors[fieldName];
};

export const validateAuthForm = (form) => {
  let errors = {};
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  let regexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

  if (form.type === "register") {
    if (!form.name.trim()) {
      errors.name = "El campo no puede estar vacío";
    } else if (!regexName.test(form.name.trim())) {
      errors.name = "Los datos ingresados no son válidos";
    }

    if (!form.surname.trim()) {
      errors.surname = "El campo no puede estar vacío";
    } else if (!regexName.test(form.surname.trim())) {
      errors.surname = "Los datos ingresados no son válidos";
    }
  }

  if (!form.email.trim()) {
    errors.email = "El campo no puede estar vacío";
  } else if (!regexEmail.test(form.email.trim())) {
    errors.email = "Los datos ingresados no son válidos";
  }

  if (!form.password.trim()) {
    errors.password = "El campo no puede estar vacío";
  } else if (!regexPassword.test(form.password.trim())) {
    errors.password =
      "El campo debe contener al menos 8 caracteres, incluyendo al menos un número, una letra minúscula y una letra mayúscula";
  }

  return errors;
};

//Fruta
export const validateChangePasswordField = (form, fieldName) => {
  const value = form[fieldName];
  const errors = {};
  const regexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

  if (!value.trim()) {
    errors[fieldName] = "El campo no puede estar vacío";
  } else if (
    fieldName === "last-password" &&
    fieldName === "new-password" &&
    fieldName === "confirm-password" &&
    !regexPassword.test(value.trim())
  ) {
    errors[fieldName] =
      "El campo debe contener al menos 8 caracteres, incluyendo al menos un número, una letra minúscula y una letra mayúscula";
  }

  return errors[fieldName];
};

export const validateChangePasswordForm = (form) => {
  let errors = {};
  let regexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

  if (!form.password.trim()) {
    errors.password = "El campo no puede estar vacío";
  } else if (!regexPassword.test(form.password.trim())) {
    errors.password =
      "El campo debe contener al menos 8 caracteres, incluyendo al menos un número, una letra minúscula y una letra mayúscula";
  }

  return errors;
};
