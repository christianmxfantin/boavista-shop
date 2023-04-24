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

  const handleSubmit = (e, handleAuth, isChecked, handleSendData) => {
    e.preventDefault();

    if (form.type === "register" && isChecked) {
      form.terms = false;
    }

    const errors = validateForm(form);
    setErrors(errors);

    if (Object.keys(errors).length === 0) {
      switch (form.type) {
        case "login":
          //SE LOGUEA EL USUARIO
          let credentialsLogin = {
            email: e.target[2].value,
            password: e.target[4].value,
          };
          console.log("LOGIN", credentialsLogin);

          let role = "";
          if (role === "admin") {
            navigate("/dashboard");
            handleAuth(true);
          } else {
            navigate("/");
            handleAuth(true);
          }
          break;

        case "register":
          //SE REGISTRA EL USUARIO Y SE LOGUEA
          let credentialsRegister = {
            name: e.target[0].value,
            surname: e.target[2].value,
            email: e.target[4].value,
            password: e.target[6].value,
            terms: e.target[8].checked,
          };
          console.log("REGISTER", credentialsRegister);

          navigate("/");
          handleAuth(true);
          break;

        case "change-email":
          handleSendData();
          console.log("Se cambió la dirección de email");
          break;

        case "change-password":
          handleSendData();
          console.log("Se cambió la contraseña");
          break;

        default:
          console.log("Form type no reconocido");
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
