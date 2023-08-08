import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@emotion/react";
import {
  Button,
  Checkbox,
  FormControlLabel,
  FormHelperText,
  IconButton,
  InputAdornment,
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
import Toast from "../Toast/Toast";
import { Controller, useForm } from "react-hook-form";
import { validations } from "../../../helpers/validations";
import { loginResponse, registerResponse } from "../../../api/auth";
import { useDispatch } from "react-redux";
import { setUser } from "../../../reducers/auth";
import { getRoles } from "../../../api/roles";

const FormAuth = ({ formType, role }) => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [isToastVisible, setIsToastVisible] = useState(false);
  const [toastData, setToastData] = useState({
    severity: "success",
    message: "",
  });
  const {
    register,
    handleSubmit,
    watch,
    control,
    reset,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (e) => {
    e.preventDefault();
  };

  const handleGoogleAuth = () => {
    console.log("Inicio con Google");
  };

  // const handleFacebookAuth = () => {
  //   console.log("Inicio con Facebook");
  // };

  const handleTopButton = () => {
    navigate("/dashboard/users");
  };

  const handleBottomButton = () => {
    if (formType === "login") {
      navigate("/register");
    } else if (formType === "register") {
      navigate("/login");
    } else {
      navigate("/dashboard/products");
    }
  };

  const onSubmit = async (formValues) => {
    switch (formType) {
      case "login":
        try {
          const userData = {
            email: formValues.email.trim(),
            password: formValues.password.trim(),
          };

          const loginUser = await loginResponse(userData);
          dispatch(setUser(loginUser.data));

          if (loginUser.data.role.toLowerCase().trim() !== "Web") {
            navigate("/dashboard");
          } else {
            navigate("/");
          }
        } catch (error) {
          // console.error("Error en la solicitud:", err);

          if (!error.response || error.request) {
            setIsToastVisible(true);
            setToastData({
              severity: "error",
              message: "Ocurrió un error al procesar la solicitud",
            });
            return;
          }

          if (error.response.status > 399 || error.response.status < 500) {
            //client error
            setIsToastVisible(true);
            setToastData({
              severity: "error",
              message: "Los datos ingresados no son válidos",
            });
            return;
          }

          if (error.response.status > 499) {
            //server error
            setIsToastVisible(true);
            setToastData({
              severity: "error",
              message: "El servidor no está disponible",
            });
            return;
          }
        }
        break;

      case "register":
        try {
          //Check if exists the Web role in database
          const roles = await getRoles();
          const roleName = roles.data.find(
            (role) => role.names.toLowerCase().trim() === "web"
          );

          //Register the user and sing in
          const newUser = {
            names: formValues.names.trim(),
            surnames: formValues.surnames.trim(),
            email: formValues.email.toLowerCase().trim(),
            password: formValues.password.trim(),
            role_id: roleName.id,
          };
          const registerUser = await registerResponse(newUser);

          dispatch(setUser(registerUser.data));
          navigate("/");
        } catch (error) {
          // console.error("Error en la solicitud:", err);

          if (!error.response || error.request) {
            setIsToastVisible(true);
            setToastData({
              severity: "error",
              message: "Ocurrió un error al procesar la solicitud",
            });
            return;
          }

          if (error.response.status > 399 || error.response.status < 500) {
            //client error
            setIsToastVisible(true);
            setToastData({
              severity: "error",
              message: "Los datos ingresados no son válidos",
            });
            return;
          }

          if (error.response.status > 499) {
            //server error
            setIsToastVisible(true);
            setToastData({
              severity: "error",
              message: "El servidor no está disponible",
            });
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
                onClick={handleGoogleAuth}
              >
                Google
              </GoogleButton>
              {/* <FacebookButton
                variant="outlined"
                startIcon={<Icon name="Facebook" />}
                onClick={handleFacebookAuth}
              >
                Facebook
              </FacebookButton> */}
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
              {...register("names", {
                required: true,
                pattern: validations.names.pattern,
              })}
              error={!!errors.names}
              helperText={
                watch("names")
                  ? errors.names && validations.names.errorDataNotValid
                  : errors.names && validations.errorEmptyField
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
              {...register("surnames", {
                pattern: validations.names.pattern,
              })}
              error={!!errors.surnames}
              helperText={errors.surnames && errors.names.errorDataNotValid}
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
                pattern: validations.mail.pattern,
              })}
              error={!!errors.email}
              helperText={
                watch("email")
                  ? errors.email && validations.mail.errorDataNotValid
                  : errors.email && validations.errorEmptyField
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
              {...register("password", {
                required: true,
                pattern: validations.password.pattern,
              })}
              error={!!errors.password}
              helperText={
                watch("password")
                  ? errors.password && validations.password.errorDataNotValid
                  : errors.password && validations.errorEmptyField
              }
            />
          </FormAuthEmail>
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
              {!!errors.terms && "Debe aceptar los términos para continuar"}
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
          {formType !== "dashboard" ? (
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
          ) : (
            <>
              {role === "Admin" && (
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
            </>
          )}
        </ButtonsContainer>
      </FormAuthContainer>
      <Toast
        isToastVisible={isToastVisible}
        setIsToastVisible={setIsToastVisible}
        toastData={toastData}
      />
    </main>
  );
};

export default FormAuth;
