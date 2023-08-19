import { useState } from "react";
import { useTheme } from "@emotion/react";
import { Button } from "@mui/material";
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

const ForgetPassword = () => {
  const theme = useTheme();
  const [showEmail, setShowEmail] = useState(true);
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
      console.log(userFound.data.id);
      setUserId(userFound.data.id);
      setShowEmail(false);
      reset();
    } catch (error) {
      console.log(error);
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
            {showEmail ? "Ingresa tu Email" : "Ingresa tu Nueva Contraseña"}
          </FormAuthTitle>
          {showEmail && (
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
        {!showEmail && <AccountData newPassword={true} userId={userId} />}
      </ForgetPasswordContainer>
    </main>
  );
};

export default ForgetPassword;
