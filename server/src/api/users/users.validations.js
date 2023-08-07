const namesValidate = (names) => {
  const regexName = /^[\p{L} -]+$/u;
  return regexName.test(names);
};

const surnamesValidate = (surnames) => {
  const regexName = /^[\p{L} -]+$/u;
  return regexName.test(surnames);
};

const emailValidate = (email) => {
  const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  return regexEmail.test(email);
};

const passwordValidate = (password) => {
  const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  return regexPassword.test(password);
};

module.exports = {
  namesValidate,
  surnamesValidate,
  emailValidate,
  passwordValidate,
};
