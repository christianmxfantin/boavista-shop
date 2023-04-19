import { useState } from "react";
// import {
//   validateLoginForm,
//   validateRegisterForm,
// } from "../helpers/validationsForm";

export const useForm = (
  initialForm,
  validateLoginForm,
  validateRegisterForm
) => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleBlur = (e) => {
    handleChange(e);
    if (form.type === "login") {
      console.log(form);
      setErrors(validateLoginForm(form));
    } else if (form.type === "register") {
      console.log(form);
      setErrors(validateRegisterForm(form));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors =
      form.type === "login"
        ? validateLoginForm(form)
        : validateRegisterForm(form);
    if (Object.keys(errors).length === 0) {
      if (form.type === "login") {
        //SE LOGUEA EL USUARIO
        let credentials = {
          email: e.target[2].value,
          password: e.target[4].value,
        };
        console.log("LOGIN", credentials);
      } else {
        //SE REGISTRA EL USUARIO Y SE LOGUEA
        let credentials = {
          name: e.target[0].value,
          surname: e.target[2].value,
          email: e.target[4].value,
          password: e.target[6].value,
          // terms: e.target[8].checked,
        };
        // console.log(errors);
        console.log("REGISTER", credentials);
      }
    } else {
      form.type === "login"
        ? setErrors(validateLoginForm(form))
        : setErrors(validateRegisterForm(form));
    }
  };

  return {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  };
};
