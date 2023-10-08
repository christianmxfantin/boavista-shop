import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@emotion/react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Button,
  Checkbox,
  FormControlLabel,
  FormHelperText,
  IconButton,
  InputAdornment,
  Link,
  Tooltip,
} from "@mui/material";
import { Icon } from "../../ui/Icon";
import Underline from "../../ui/Underline";
import {
  FormAuthContainer,
  FormAuthName,
  FormAuthSocial,
  FormAuthSocialButtons,
  FormAuthTitle,
  GoogleButton,
  NameInput,
  SurnameInput,
  EmailInput,
  PasswordInput,
  ButtonsContainer,
  FormAuthEmail,
} from "./FormAuth.styles";
import { Controller, useForm } from "react-hook-form";
import {
  googleAuthResponse,
  loginResponse,
  registerResponse,
} from "../../../api/auth";
import { useDispatch } from "react-redux";
import { setUser } from "../../../reducers/auth";
import { getRoleById, getRoles } from "../../../api/roles";

import { UsersErrors } from "../../../errors/users.errors";
import { EmptyFieldError } from "../../../errors/emptyField.errors";
import { PatternValidations } from "../../../helpers/validations";
import { toastColor } from "../../../utils/toastOptions";
import { ErrorsMessages } from "../../../utils/toastMessages";
import { capitalizeWords } from "../../../utils/capitalizeWords";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";

const FormAuth = ({ formType, role }) => {
  const namesInputValue = useRef("");
  const surnamesInputValue = useRef("");

  const theme = useTheme();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    control,
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

  const handleNamesBlur = () => {
    namesInputValue.current.value = capitalizeWords(
      namesInputValue.current.value
    );
  };
  const handleSurnamesBlur = () => {
    surnamesInputValue.current.value = capitalizeWords(
      surnamesInputValue.current.value
    );
  };

  const handleCopyPaste = (e) => {
    e.preventDefault();
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (e) => {
    e.preventDefault();
  };

  const handleGoogleAuth = useGoogleLogin({
    onSuccess: async (response) => {
      try {
        const res = await axios.get(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          {
            headers: {
              Authorization: `Bearer ${response.access_token}`,
            },
          }
        );

        //Check if exists the Web role in database
        const roles = await getRoles();
        const roleName = roles.data.find(
          (role) => role.name.toLowerCase().trim() === "web"
        );

        const date = new Date();
        const newPassword = `Google${date.getFullYear()}`;

        const googleUser = {
          avatarURL: res.data.picture,
          names: res.data.given_name,
          surnames: res.data.family_name,
          email: res.data.email,
          password: newPassword,
          roleId: roleName.id,
        };
        const registerUser = await googleAuthResponse(googleUser);

        dispatch(setUser(registerUser.data));
        navigate("/");
      } catch (error) {
        console.log(error);
      }
    },
  });

  const handleTopButton = () => {
    navigate("/dashboard/users");
  };

  const handleBottomButton = () => {
    switch (formType) {
      case "login":
        navigate("/register");
        break;
      case "register":
        navigate("/login");
        break;
      case "dashboard":
        navigate("/dashboard/products");
        break;
      default:
    }
  };

  const handleChangePassword = () => {
    navigate("/auth/change-password");
  };

  const handleResetDatabase = () => {
    //reset database
    //1ro advertencia de que se va a resetear la base y esta accion no se puede deshacer
  };

  const onSubmit = async (formValues) => {
    switch (formType) {
      case "login":
        try {
          const userData = {
            email: formValues.email.toLowerCase().trim(),
            password: formValues.password,
          };
          const loginUser = await loginResponse(userData);

          //Search the role id in database
          const roles = await getRoleById(loginUser.data.roleId);
          const roleName = roles.data.name;

          const date = new Date();
          const userPassword = `User${date.getFullYear()}`;

          if (
            roleName.toLowerCase().trim() === "user" &&
            formValues.password === userPassword
          ) {
            navigate("/auth/change-password", {
              state: {
                changePassword: true,
                formAuthUserID: loginUser.data.id,
              },
            });
          } else if (roleName.toLowerCase().trim() !== "web") {
            dispatch(setUser(loginUser.data));
            navigate("/dashboard");
          } else {
            dispatch(setUser(loginUser.data));
            navigate("/");
          }
        } catch (error) {
          if (!error.response) {
            toast.error(ErrorsMessages.RESPONSE_ERROR, toastColor("error"));
            return;
          }
          statusErrors(error);
        }
        break;

      case "register":
        try {
          //Check if exists the Web role in database
          const roles = await getRoles();
          const roleName = roles.data.find(
            (role) => role.name.toLowerCase().trim() === "web"
          );

          //Register the user and sing in
          const newUser = {
            avatarURL: "",
            names: capitalizeWords(formValues.names.trim()),
            surnames: capitalizeWords(formValues.surnames.trim()),
            email: formValues.email.toLowerCase().trim(),
            password: formValues.password,
            roleId: roleName.id,
          };
          const registerUser = await registerResponse(newUser);

          dispatch(setUser(registerUser.data));
          navigate("/");
        } catch (error) {
          if (error.response.statusText === "Conflict") {
            toast.error(error.response.data.message, toastColor("error"));
            return;
          }

          statusErrors(error);

          if (!error.response) {
            toast.error(ErrorsMessages.RESPONSE_ERROR, toastColor("error"));
            return;
          }
        }
        break;

      default:
    }

    reset();
  };

  return (
    <main>
      <FormAuthContainer
        component={"form"}
        autoComplete="off"
        noValidate
        onSubmit={handleSubmit(onSubmit)}
      >
        <FormAuthTitle
          variant={formType !== "dashboard" ? "h5" : "h4"}
          sx={{
            marginBottom: formType !== "dashboard" && theme.spacing(3),
          }}
        >
          {formType === "login"
            ? "Ingresa a tu cuenta a través de"
            : formType === "register"
            ? "Completa tus datos"
            : "Panel de Administración"}
        </FormAuthTitle>
        {formType === "login" && (
          <FormAuthSocial component={"section"}>
            <FormAuthSocialButtons>
              <GoogleButton
                variant="outlined"
                startIcon={<Icon name="Google" />}
                onClick={() => handleGoogleAuth()}
              >
                Google
              </GoogleButton>
            </FormAuthSocialButtons>
            <Underline
              width={376}
              height={1}
              color={theme.palette.primary[500]}
            />
          </FormAuthSocial>
        )}
        {formType === "register" && (
          <FormAuthName>
            <NameInput
              name="names"
              type="text"
              variant="outlined"
              size="small"
              placeholder="Ingresa tus Nombres"
              required
              inputRef={namesInputValue}
              {...register("names", {
                required: true,
                pattern: PatternValidations.NAMES_AND_SURNAMES,
                onBlur: handleNamesBlur,
              })}
              error={!!errors.names}
              helperText={
                watch("names")
                  ? errors.names && UsersErrors.NAMES_INVALID
                  : errors.names && EmptyFieldError.EMPTY_ERROR
              }
            />
            <SurnameInput
              name="surnames"
              type="text"
              variant="outlined"
              size="small"
              placeholder="Ingresa tus Apellidos"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Tooltip title="En el mundo hay varias personas sin apellidos, por ese motivo no es un campo requerido. De igual modo, te sugerimos que completes este campo si lo tienes.">
                      <IconButton edge="end">
                        <Icon name="Info" color={theme.palette.primary[300]} />
                      </IconButton>
                    </Tooltip>
                  </InputAdornment>
                ),
              }}
              inputRef={surnamesInputValue}
              {...register("surnames", {
                pattern: PatternValidations.NAMES_AND_SURNAMES,
                onBlur: handleSurnamesBlur,
              })}
              error={!!errors.surnames}
              helperText={errors.surnames && UsersErrors.SURNAMES_INVALID}
            />
          </FormAuthName>
        )}
        {formType !== "dashboard" && (
          <FormAuthEmail
            sx={{
              marginTop: formType === "login" && theme.spacing(4),
              marginBottom: formType === "login" && theme.spacing(2),
            }}
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
            <PasswordInput
              name="password"
              type={showPassword ? "text" : "password"}
              variant="outlined"
              size="small"
              placeholder="Ingresa tu Contraseña"
              required
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? (
                        <Icon
                          name="Visibility-off"
                          color={theme.palette.primary[300]}
                        />
                      ) : (
                        <Icon
                          name="Visibility"
                          color={theme.palette.primary[300]}
                        />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              onCopy={handleCopyPaste}
              onCut={handleCopyPaste}
              onPaste={handleCopyPaste}
              {...register("password", {
                required: true,
                pattern: PatternValidations.PASSWORD,
              })}
              error={!!errors.password}
              helperText={
                watch("password")
                  ? errors.password && UsersErrors.PASSWORD_INVALID
                  : errors.password && EmptyFieldError.EMPTY_ERROR
              }
            />
          </FormAuthEmail>
        )}
        {formType === "login" && (
          <Link
            style={{
              marginBottom: theme.spacing(2),
              cursor: "pointer",
            }}
            onClick={handleChangePassword}
          >
            ¿Olvidaste tu contraseña?
          </Link>
        )}
        {formType === "register" && (
          <>
            <Controller
              name="terms"
              control={control}
              rules={{ required: true }}
              render={({ field: props }) => (
                <FormControlLabel
                  control={
                    <Checkbox
                      {...props}
                      onChange={(e) => props.onChange(e.target.checked)}
                    />
                  }
                  label="Acepto los Términos y Condiciones"
                />
              )}
            />
            <FormHelperText error={!!errors.terms}>
              {!!errors.terms && UsersErrors.TERMS_ERROR}
            </FormHelperText>
          </>
        )}
        <ButtonsContainer
          component={"section"}
          sx={{
            height: formType === "dashboard" ? "350px" : "auto",
            justifyContent: formType === "dashboard" ? "center" : "initial",
          }}
        >
          {formType === "login" || formType === "register" ? (
            <>
              <Button
                type="submit"
                variant="contained"
                sx={{
                  width: "376px",
                  marginTop: formType === "register" && theme.spacing(2),
                  marginBottom: theme.spacing(1.5),
                  "&:hover": {
                    backgroundColor: theme.palette.secondary[500],
                    color: theme.palette.primary[500],
                  },
                }}
              >
                Continuar
              </Button>
              <Button
                variant="text"
                sx={{
                  width: "376px",
                  "&:hover": {
                    backgroundColor: theme.palette.secondary[500],
                    color: theme.palette.primary[500],
                  },
                }}
                onClick={handleBottomButton}
              >
                {formType === "login"
                  ? "Crear Cuenta"
                  : "Ingresa con tus datos"}
              </Button>
            </>
          ) : formType === "dashboard" ? (
            <>
              {role === "admin" && (
                <Button
                  variant="contained"
                  sx={{
                    width: "376px",
                    marginBottom: theme.spacing(4),
                    fontSize: theme.spacing(3), //24px
                    "&:hover": {
                      backgroundColor: theme.palette.secondary[500],
                      color: theme.palette.primary[500],
                    },
                  }}
                  onClick={handleTopButton}
                >
                  Usuarios
                </Button>
              )}
              <Button
                variant="contained"
                sx={{
                  width: "376px",
                  fontSize: theme.spacing(3), //24px
                  "&:hover": {
                    backgroundColor: theme.palette.secondary[500],
                    color: theme.palette.primary[500],
                  },
                }}
                onClick={handleBottomButton}
              >
                Productos
              </Button>
              {role === "admin" && (
                <Link
                  style={{
                    textAlign: "center",
                    marginTop: theme.spacing(5),
                    cursor: "pointer",
                  }}
                  onClick={handleResetDatabase}
                >
                  Volver Base de Datos al Estado Inicial
                </Link>
              )}
            </>
          ) : null}
        </ButtonsContainer>
      </FormAuthContainer>
      <ToastContainer />
    </main>
  );
};

export default FormAuth;
