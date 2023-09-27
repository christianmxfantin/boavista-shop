import { useState } from "react";
import { useTheme } from "@emotion/react";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Select,
  TextField,
} from "@mui/material";

const ChangePrices = ({ openDialog, setOpenDialog }) => {
  const theme = useTheme();
  const [disabledSave, setDisabledSave] = useState(true);

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleSubmit = () => {};

  return (
    <Dialog open={openDialog} onClose={handleCloseDialog}>
      <DialogTitle
        sx={{ textAlign: "center", color: theme.palette.primary[500] }}
      >
        Cambio Masivo de Precios
      </DialogTitle>
      <DialogContent>
        <Box>
          <Select></Select>
          <TextField></TextField>
        </Box>
      </DialogContent>
      <DialogActions sx={{ display: "flex", justifyContent: "center" }}>
        <Button onClick={handleCloseDialog}>Cancelar</Button>
        <Button type="submit" disabled={disabledSave}>
          Guardar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ChangePrices;
