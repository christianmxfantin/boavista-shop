import { useState } from "react";
import { useTheme } from "@emotion/react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { UploadImageContainer } from "./UploadImageContainer.styles";
import { useDispatch, useSelector } from "react-redux";
import { updateAvatarResponse } from "../../../api/users";
import { ToastContainer, toast } from "react-toastify";
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
    } else {
      //Profile
      try {
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
      }
    }

    handleCloseDialog();
  };

  return (
    <>
      <UploadImageContainer>
        <Dialog open={openDialog} onClose={handleCloseDialog}>
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
        </Dialog>
      </UploadImageContainer>
      <ToastContainer />
    </>
  );
};

export default UploadImage;
