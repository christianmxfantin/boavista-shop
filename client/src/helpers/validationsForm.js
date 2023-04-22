const rules = [
  {
    type: "names",
    regex: /^[a-zA-Z]{2,}$/,
    error: "Los datos ingresados no son válidos",
  },
  {
    type: "email",
    regex: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    error: "Los datos ingresados no son válidos",
  },
  {
    type: "password",
    regex: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
    error:
      "El campo debe contener al menos 8 caracteres, incluyendo al menos un número, una letra minúscula y una letra mayúscula",
  },
];

const validateRules = (fieldName, value) => {
  if (
    ["last-password", "new-password", "confirm-password"].includes(fieldName)
  ) {
    fieldName = "password";
  } else if (["name", "surname"].includes(fieldName)) {
    fieldName = "names";
  }

  const fieldRules = rules.filter((rule) => rule.type === fieldName);
  const fieldErrors = [];

  if (!value.trim()) {
    fieldErrors.push("El campo no puede estar vacío");
    return fieldErrors;
  }

  if (!fieldRules) {
    return null;
  }

  fieldRules.forEach((rule) => {
    const regex = new RegExp(rule.regex);
    if (!regex.test(value.trim())) {
      fieldErrors.push(rule.error);
    }
  });

  return fieldErrors;
};

export const validateField = (fieldName, value) => {
  const errors = validateRules(fieldName, value);
  return errors.length ? errors : null;
};

export const validateForm = (form) => {
  let errors = {};

  Object.keys(form).forEach((fieldName) => {
    const fieldErrors = validateRules(fieldName, form[fieldName]);
    if (Object.keys(fieldErrors).length) {
      errors[fieldName] = fieldErrors;
    }
  });

  return errors;
};
