import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { validateField, validateForm } from "../helpers/validationsForm";

export const useForm = (initialForm) => {
  const navigate = useNavigate();
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
    const fieldName = e.target.name;
    handleChange(e);
    if (e.target.type !== "submit") {
      const fieldError = validateField(fieldName, form[fieldName]);
      setErrors((prevErrors) => ({ ...prevErrors, [fieldName]: fieldError }));
    }
  };

  const handleSubmit = (e, handleAuth, handleSendData) => {
    e.preventDefault();
    const errors = validateForm(form);
    setErrors(errors);
    console.log(form);
    console.log(errors);

    if (Object.keys(errors).length === 0) {
      if (form.type === "login") {
        //SE LOGUEA EL USUARIO
        let credentials = {
          email: e.target[2].value,
          password: e.target[4].value,
        };
        console.log("LOGIN", credentials);

        let role = "";
        if (role === "admin") {
          navigate("/dashboard");
          // ver si necesita un handleAuth esta parte
          // handleAuth(true);
        } else {
          navigate("/");
          handleAuth(true);
        }
      } else if (form.type === "register") {
        //SE REGISTRA EL USUARIO Y SE LOGUEA
        let credentials = {
          name: e.target[0].value,
          surname: e.target[2].value,
          email: e.target[4].value,
          password: e.target[6].value,
          terms: e.target[8].checked,
        };
        console.log("REGISTER", credentials);

        navigate("/");
        handleAuth(true);
      } else if (form.type === "change-email") {
        handleSendData();
        console.log("Se cambió la dirección de email");
      } else if (form.type === "change-password") {
        handleSendData();
        console.log("Se cambió la contraseña");
      }
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
