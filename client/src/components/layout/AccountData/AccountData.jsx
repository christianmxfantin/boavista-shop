import { useState } from "react";
import { useTheme } from "@emotion/react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Avatar, Button, IconButton, InputAdornment } from "@mui/material";
import {
  AccountDataContainer,
  ChangeNamesInput,
  ChangeSurnamesInput,
  ChangeEmailInput,
  ConfirmPasswordInput,
  NewPasswordInput,
  ButtonContainer,
  AccountInfoContainer,
  AvatarContainer,
} from "./AccountData.styles";
import { useForm } from "react-hook-form";
import { Icon } from "../../ui/Icon";
import ButtonsContainer from "../ButtonsContainer/ButtonsContainer";
import TestImage from "../../../images/product2.jpg";
import { getUserByIdResponse, updateUserResponse } from "../../../api/users";
import { setUser } from "../../../reducers/auth";
import { toastColor } from "../../../utils/toastOptions";
import { ErrorsMessages } from "../../../utils/toastMessages";
import { PatternValidations } from "../../../helpers/validations";
import { UsersErrors } from "../../../errors/users.errors";
import { EmptyFieldError } from "../../../errors/emptyField.errors";
import { changePasswordResponse } from "../../../api/auth";
// import CameraAltIcon from "@mui/icons-material/CameraAlt";

const AccountData = ({ formType, newPassword, userId }) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const [changeEmail, setChangeEmail] = useState(false);
  const [changePassword, setChangePassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
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

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (e) => {
    e.preventDefault();
  };

  const handleClickChangeEmail = (e) => {
    e.preventDefault();
    setChangeEmail(true);
  };

  const handleClickChangePassword = (e) => {
    e.preventDefault();
    setChangePassword(true);
  };

  const handleClickCancel = () => {
    reset();

    //si estas en FormAuth vuelve a login
    if (newPassword) {
      navigate("/login");
    }

    //sino va a Profile
    if (changeEmail) {
      setChangeEmail(false);
    } else {
      setChangePassword(false);
    }
  };

  const onSubmit = async (formValues) => {
    if (!changePassword && !newPassword) {
      //Change Email
      try {
        const userFound = await getUserByIdResponse(user.id);

        const userData = {
          id: userFound.data.id,
          // imageURL: "imageURL",
          names: formValues.newNames.trim(),
          surnames: formValues.newSurnames ? formValues.newSurnames.trim() : "",
          email: formValues.newEmail.toLowerCase().trim(),
          password: userFound.data.password,
          roleId: userFound.data.roleId,
        };

        const res = await updateUserResponse(userFound.data.id, userData);
        const updatedUser = res.data;

        dispatch(setUser(updatedUser));
        // toast.success("Los cambios se han guardado", toastColor("success"));
        window.location.reload();
      } catch (error) {
        console.error("Error en la solicitud:", error);

        if (!error.response) {
          toast.error(ErrorsMessages.RESPONSE_ERROR, toastColor("error"));
          return;
        }
        statusErrors(error);
      }
    }

    if (changePassword || newPassword) {
      //Change Password
      try {
        // console.log(userId);
        const data = userId ? userId : user.id;
        const userFound = await getUserByIdResponse(data);

        const userData = {
          newPassword: formValues.newPassword,
          confirmPassword: formValues.confirmPassword,
        };

        const res = await changePasswordResponse(userFound.data.id, userData);

        if (res.status === 200) {
          // navigate("/login");
          toast.success(
            "Los cambios se han guardado correctamente",
            toastColor("success")
          );
        }
      } catch (error) {
        console.error("Error en la solicitud:", error);

        if (!error.response) {
          toast.error(ErrorsMessages.RESPONSE_ERROR, toastColor("error"));
          return;
        }
        statusErrors(error);
      }
    }

    handleClickCancel();
  };

  return (
    <>
      <AccountDataContainer
        component={"form"}
        autoComplete="off"
        noValidate
        onSubmit={handleSubmit(onSubmit)}
      >
        {!changePassword && !newPassword ? (
          <AccountInfoContainer>
            <AvatarContainer>
              <Avatar
                alt="Avatar del Usuario"
                src={TestImage}
                sx={{
                  width: "200px",
                  height: "200px",
                  "&:hover": {
                    cursor: "pointer",
                    filter: "brightness(50%)",
                  },
                }}
              />
              {/* <CameraAltIcon
                sx={{
                  width: "50px",
                  height: "50px",
                  color: theme.palette.secondary.A100,
                  position: "absolute",
                  top: "48%",
                }}
              /> */}
            </AvatarContainer>
            <ChangeNamesInput
              defaultValue={user.names}
              name="newNames"
              type="text"
              variant="outlined"
              size="small"
              disabled={!changeEmail ? true : false}
              required
              {...register("newNames", {
                required: true,
                pattern: PatternValidations.NAMES_AND_SURNAMES,
              })}
              error={!!errors.newNames}
              helperText={
                watch("newNames")
                  ? errors.newNames && UsersErrors.NAMES_INVALID
                  : errors.newNames && EmptyFieldError.EMPTY_ERROR
              }
            />
            <ChangeSurnamesInput
              defaultValue={user.surnames}
              name="newSurnames"
              type="text"
              variant="outlined"
              size="small"
              disabled={!changeEmail ? true : false}
              {...register("newSurnames", {
                pattern: PatternValidations.NAMES_AND_SURNAMES,
              })}
              error={!!errors.newSurnames}
              helperText={errors.newNames && UsersErrors.SURNAMES_INVALID}
            />
            <ChangeEmailInput
              defaultValue={user.email}
              name="newEmail"
              type="email"
              variant="outlined"
              size="small"
              disabled={!changeEmail ? true : false}
              required
              {...register("newEmail", {
                required: true,
                pattern: PatternValidations.EMAIL,
              })}
              error={!!errors.newEmail}
              helperText={
                watch("newEmail")
                  ? errors.newEmail && UsersErrors.EMAIL_INVALID
                  : errors.newEmail && EmptyFieldError.EMPTY_ERROR
              }
            />
          </AccountInfoContainer>
        ) : changePassword || newPassword ? (
          <>
            <NewPasswordInput
              name="newPassword"
              type={showPassword ? "text" : "password"}
              variant="outlined"
              size="small"
              placeholder="Escribe tu Nueva Contraseña"
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
              {...register("newPassword", {
                required: true,
                pattern: PatternValidations.PASSWORD,
              })}
              error={!!errors.newPassword}
              helperText={
                watch("newPassword")
                  ? errors.newPassword && UsersErrors.PASSWORD_INVALID
                  : errors.newPassword && EmptyFieldError.EMPTY_ERROR
              }
            />
            <ConfirmPasswordInput
              name="confirmPassword"
              type={showPassword ? "text" : "password"}
              variant="outlined"
              size="small"
              placeholder="Repite la Nueva Contraseña"
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
              {...register("confirmPassword", {
                required: true,
                validate: (value) =>
                  value === watch("newPassword") ||
                  UsersErrors.PASSWORD_NOT_EQUAL,
              })}
              error={!!errors.confirmPassword}
              helperText={
                errors.confirmPassword && errors.confirmPassword.message
              }
            />
          </>
        ) : null}
        {changePassword || newPassword || changeEmail ? (
          <ButtonsContainer
            formType={formType}
            leftName="Cancelar"
            rightName="Guardar"
            onClickLeft={handleClickCancel}
          />
        ) : (
          <ButtonContainer>
            <Button
              variant="text"
              type="button"
              onClick={handleClickChangeEmail}
              sx={{ width: "50%" }}
            >
              Modificar Datos
            </Button>
            <Button
              variant="contained"
              type="button"
              onClick={handleClickChangePassword}
              sx={{ width: "50%" }}
            >
              Cambiar Contraseña
            </Button>
          </ButtonContainer>
        )}
      </AccountDataContainer>
      <ToastContainer />
    </>
  );
};

export default AccountData;
