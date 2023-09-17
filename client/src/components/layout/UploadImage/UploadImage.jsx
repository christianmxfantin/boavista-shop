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
import { useSelector } from "react-redux";
import { uploadAvatar } from "../../../api/users";
import { ToastContainer, toast } from "react-toastify";
import { SuccessMessages } from "../../../utils/toastMessages";
import { toastColor } from "../../../utils/toastOptions";

const UploadImage = ({ openDialog, setOpenDialog }) => {
  const { user } = useSelector((state) => state.auth);
  const theme = useTheme();

  const [image, setImage] = useState();

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    transformFileData(file);
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
    try {
      const updatedAvatar = {
        image: image,
      };

      const response = await uploadAvatar(user.id, updatedAvatar);
      if (response) {
        toast.success(SuccessMessages.CHANGES_DONE, toastColor("success"));
      }
    } catch (error) {
      console.log(error);
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
            <input type="file" accept="image/*" onChange={handleFileUpload} />
          </DialogContent>
          <DialogActions sx={{ display: "flex", justifyContent: "center" }}>
            <Button onClick={handleCloseDialog}>Cancelar</Button>
            <Button onClick={handleSubmit}>Guardar</Button>
          </DialogActions>
        </Dialog>
      </UploadImageContainer>
      <ToastContainer />
    </>
  );
};

export default UploadImage;
