import { useState } from "react";
import { useTheme } from "@emotion/react";
import { Button } from "@mui/material";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AccountData from "../AccountData/AccountData";
import {
  EmailInput,
  ForgetPasswordContainer,
  ForgetPasswordForm,
  FormAuthTitle,
} from "./ForgetPassword.styles";
import { useForm } from "react-hook-form";
import { PatternValidations } from "../../../helpers/validations";
import { UsersErrors } from "../../../errors/users.errors";
import { EmptyFieldError } from "../../../errors/emptyField.errors";
import { getUserByEmailResponse } from "../../../api/users";
import { ErrorsMessages } from "../../../utils/toastMessages";
import { toastColor } from "../../../utils/toastOptions";
import { useLocation } from "react-router-dom";

const ForgetPassword = () => {
  const theme = useTheme();
  const location = useLocation();
  const { changePassword, formAuthUserID } = location.state;
  console.log(location.state);

  const [showEmail, setShowEmail] = useState(changePassword ? false : true);
  const [userId, setUserId] = useState("");

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  const statusErrors = (error) => {
    //client error
    if (error.response.status > 399 || error.response.status < 500) {
      toast.error(ErrorsMessages.CLIENT_STATUS, toastColor("error"));
      return;
    }
    //server error
    if (error.response.status > 499) {
      toast.error(ErrorsMessages.SERVER_STATUS, toastColor("error"));
      return;
    }
  };

  const onSubmit = async (formValues) => {
    try {
      const userFound = await getUserByEmailResponse(formValues.email);
      setUserId(userFound.data.id);
      setShowEmail(false);
      reset();
    } catch (error) {
      // console.error("Error en la solicitud:", error);

      if (!error.response) {
        toast.error(ErrorsMessages.RESPONSE_ERROR, toastColor("error"));
        return;
      }
      statusErrors(error);
    }
  };

  return (
    <main>
      <ForgetPasswordContainer>
        <ForgetPasswordForm
          component={"form"}
          autoComplete="off"
          noValidate
          onSubmit={handleSubmit(onSubmit)}
        >
          <FormAuthTitle variant="h5">
            {changePassword
              ? "Modifica tu contraseña"
              : showEmail
              ? "Ingresa tu Email"
              : "Ingresa tu Nueva Contraseña"}
          </FormAuthTitle>
          {(showEmail || !changePassword) && (
            <>
              <EmailInput
                name="email"
                type="email"
                variant="outlined"
                size="small"
                placeholder="Ingresa tu Email"
                required
                {...register("email", {
                  required: true,
                  pattern: PatternValidations.EMAIL,
                })}
                error={!!errors.email}
                helperText={
                  watch("email")
                    ? errors.email && UsersErrors.EMAIL_INVALID
                    : errors.email && EmptyFieldError.EMPTY_ERROR
                }
              />
              <Button
                variant="contained"
                type="submit"
                sx={{
                  width: "376px",
                  "&:hover": {
                    backgroundColor: theme.palette.secondary[500],
                    color: theme.palette.primary[500],
                  },
                }}
              >
                Continuar
              </Button>
            </>
          )}
        </ForgetPasswordForm>
        {(!showEmail || changePassword) && (
          <AccountData
            newPassword={true}
            userId={userId ? userId : formAuthUserID}
          />
        )}
      </ForgetPasswordContainer>
      <ToastContainer />
    </main>
  );
};

export default ForgetPassword;
