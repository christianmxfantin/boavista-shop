import { useState } from "react";
import { useTheme } from "@emotion/react";
import { Button } from "@mui/material";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AccountData from "../AccountData/AccountData";
import {
  EmailInput,
  ForgetPasswordContainer,
  ForgetPasswordForm,
  FormAuthContent,
  FormAuthTitle,
} from "./ForgetPassword.styles";
import { useForm } from "react-hook-form";
import { PatternValidations } from "../../../helpers/validations";
import { UsersErrors } from "../../../errors/users.errors";
import { EmptyFieldError } from "../../../errors/emptyField.errors";
import { getUserByEmailResponse } from "../../../api/users";
import { useLocation } from "react-router-dom";
import { responseError, statusErrors } from "../../../utils/toastErrors";

const ForgetPassword = () => {
  const theme = useTheme();
  const location = useLocation();
  const { changePassword, formAuthUserID } = location.state;

  const [showEmail, setShowEmail] = useState(changePassword ? false : true);
  const [userId, setUserId] = useState("");

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  const onSubmit = async (formValues) => {
    try {
      const userFound = await getUserByEmailResponse(formValues.email);
      setUserId(userFound.data.id);
      setShowEmail(false);
      reset();
    } catch (error) {
      responseError(error);
      statusErrors(error);
    }
  };

  return (
    <main>
      <ForgetPasswordContainer
        sx={{
          width: { xs: "100%", sm: "450px" },
          margin: { sm: `${theme.spacing(6.5)} auto` },
          borderRadius: { sm: theme.spacing(1.5) },
        }}
      >
        <FormAuthTitle variant="h5">
          {changePassword
            ? "Modifica tu contraseña"
            : showEmail
            ? "Ingresa tu Email"
            : "Ingresa tu Nueva Contraseña"}
        </FormAuthTitle>
        <FormAuthContent>
          {showEmail && !changePassword ? (
            <ForgetPasswordForm
              component={"form"}
              autoComplete="off"
              noValidate
              onSubmit={handleSubmit(onSubmit)}
            >
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
            </ForgetPasswordForm>
          ) : (
            <AccountData
              formType="change-password"
              newPassword={true}
              userId={userId ? userId : formAuthUserID}
            />
          )}
        </FormAuthContent>
      </ForgetPasswordContainer>
      <ToastContainer />
    </main>
  );
};

export default ForgetPassword;
