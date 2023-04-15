export const validationsForm = (form, field) => {
  let errors = {};
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  let regexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

  //   if (!form[field].trim()) {
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
