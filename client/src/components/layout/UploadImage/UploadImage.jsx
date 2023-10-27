import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTheme } from "@emotion/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Box,
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";
import { UploadImageContainer } from "./UploadImageContainer.styles";

import { updateAvatarResponse } from "../../../api/users";
import { SuccessMessages } from "../../../utils/toastMessages";
import { toastColor } from "../../../utils/toastOptions";
import { setUser } from "../../../reducers/auth";
import { fileError } from "../../../utils/toastErrors";

const UploadImage = ({
  openDialog,
  setOpenDialog,
  formType,
  setProductImage,
}) => {
  const { user } = useSelector((state) => state.auth);
  const theme = useTheme();
  const dispatch = useDispatch();

  const [image, setImage] = useState();
  const [disabledSave, setDisabledSave] = useState(true);
  const [loadingImage, setLoadingImage] = useState(false);

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setDisabledSave(true);
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      transformFileData(file);
      setDisabledSave(false);
    } else {
      fileError();
      e.target.value = null;
    }
  };

  const transformFileData = (file) => {
    const reader = new FileReader();

    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setImage(reader.result);
      };
    } else {
      setImage("");
    }
  };

  const handleSubmit = async () => {
    if (formType === "dashboard-users") {
      setProductImage(image);
    }

    if (formType === "dashboard-products") {
      setProductImage(image);
    }

    if (formType === "profile") {
      try {
        setLoadingImage(true);
        const updatedAvatar = {
          image: image,
        };

        const response = await updateAvatarResponse(user.id, updatedAvatar);

        const updatedUser = {
          id: user.id,
          avatarURL: response.data.avatarURL,
          names: user.names,
          surnames: user.surnames,
          email: user.email,
          roleId: user.roleId,
        };
        dispatch(setUser(updatedUser));

        if (response) {
          toast.success(SuccessMessages.CHANGES_DONE, toastColor("success"));
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoadingImage(false);
      }
    }

    handleCloseDialog();
  };

  return (
    <>
      <UploadImageContainer>
        <Dialog open={openDialog}>
          {loadingImage ? (
            <Box
              sx={{
                width: "300px",
                height: "150px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <CircularProgress />
              <Typography
                sx={{
                  marginTop: theme.spacing(2),
                  color: theme.palette.primary[500],
                }}
              >
                Cargando...
              </Typography>
            </Box>
          ) : (
            <>
              <DialogTitle
                sx={{ textAlign: "center", color: theme.palette.primary[500] }}
              >
                Cargar Archivos
              </DialogTitle>
              <DialogContent>
                <input
                  type="file"
                  accept=".jpg, .jpeg, .png"
                  multiple={false}
                  onChange={handleFileUpload}
                />
              </DialogContent>
              <DialogActions sx={{ display: "flex", justifyContent: "center" }}>
                <Button onClick={handleCloseDialog}>Cancelar</Button>
                <Button disabled={disabledSave} onClick={handleSubmit}>
                  Guardar
                </Button>
              </DialogActions>
            </>
          )}
        </Dialog>
      </UploadImageContainer>
      <ToastContainer />
    </>
  );
};

export default UploadImage;
