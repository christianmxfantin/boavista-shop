import { useState } from "react";

export const useForm = (initialForm, validateForm) => {
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
    setErrors(validateForm(form));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validateForm(form));

    if (Object.keys(errors).length === 0) {
      if (form.type === "login") {
        //SE LOGUEA EL USUARIO
        console.log(form);
        let credentials = {
          email: e.target[2].value,
          password: e.target[4].value,
        };
        console.log("LOGIN");
      } else {
        //SE REGISTRA EL USUARIO Y SE LOGUEA
        // let credentials = {
        //   name: e.target[0].value,
        //   surname: e.target[2].value,
        //   email: e.target[4].value,
        //   password: e.target[6].value,
        //   // terms: e.target[8].checked,
        // };
        console.log(errors);
        console.log("REGISTER");
      }
    } else {
      return;
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
