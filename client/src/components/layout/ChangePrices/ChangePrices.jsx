import { useRef, useState } from "react";
import { useTheme } from "@emotion/react";
import { Controller, useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormHelperText,
  InputAdornment,
  MenuItem,
  Select,
} from "@mui/material";
import {
  FormContainer,
  PercentageInput,
  SelectContainer,
} from "./ChangePrices.styles";
import { ChangePricesError } from "../../../errors/changePrices.errors";
import { EmptyFieldError } from "../../../errors/emptyField.errors";
import { PatternValidations } from "../../../helpers/validations";
import useProducts from "../../../hooks/api/useProducts";
import { toastColor } from "../../../utils/toastOptions";

const ChangePrices = ({ openDialog, setOpenDialog }) => {
  const { updatePrices } = useProducts();

  const theme = useTheme();
  const percentageInputValue = useRef("");

  const [disabledSave, setDisabledSave] = useState(true);

  const {
    register,
    handleSubmit,
    watch,
    control,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
  });

  const handleCloseDialog = () => {
    reset();
    setDisabledSave(true);
    setOpenDialog(false);
  };

  const handlePercentage = () => {
    if (percentageInputValue.current.value !== "") {
      setDisabledSave(false);
    } else {
      setDisabledSave(true);
    }
  };

  const onSubmit = async (formValues) => {
    try {
      const changePrices = {
        type: formValues.changeType,
        percentage: Number(formValues.changePercentage),
      };

      const updatedProducts = await updatePrices(changePrices);
      if (updatedProducts) {
        toast.success("Los cambios se han guardado", toastColor("success"));
      }
    } catch (error) {
      console.log(error);
    }

    reset();
    setDisabledSave(true);
    setOpenDialog(false);
  };

  return (
    <>
      <Dialog open={openDialog}>
        <FormContainer
          component={"form"}
          autoComplete="off"
          noValidate
          onSubmit={handleSubmit(onSubmit)}
        >
          <DialogTitle
            sx={{ textAlign: "center", color: theme.palette.primary[500] }}
          >
            Cambio Masivo de Precios
          </DialogTitle>
          <DialogContent>
            <SelectContainer>
              <Controller
                name="changeType"
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { name, onChange } }) => (
                  <>
                    <Select
                      name={name}
                      fullWidth
                      defaultValue={1}
                      onChange={(e) => {
                        onChange(e.target.value);
                      }}
                      error={!!errors.state}
                    >
                      <MenuItem disabled value={1} key={1}>
                        Selecciona una opción
                      </MenuItem>
                      <MenuItem value="Aumentar" key={2}>
                        Aumentar
                      </MenuItem>
                      <MenuItem value="Disminuir" key={3}>
                        Disminuir
                      </MenuItem>
                    </Select>
                    <FormHelperText error={!!errors.changeType}>
                      {errors.changeType &&
                        ChangePricesError.CHANGE_TYPE_INVALID}
                    </FormHelperText>
                  </>
                )}
              />
            </SelectContainer>
            <PercentageInput
              name="changePercentage"
              type="text"
              variant="outlined"
              size="small"
              placeholder="Ingresa el Porcentaje"
              required
              fullWidth
              inputRef={percentageInputValue}
              InputProps={{
                endAdornment: <InputAdornment position="end">%</InputAdornment>,
              }}
              {...register("changePercentage", {
                required: true,
                pattern: PatternValidations.NUMBERS,
                onChange: handlePercentage,
              })}
              error={!!errors.changePercentage}
              helperText={
                watch("changePercentage")
                  ? errors.changePercentage &&
                    ChangePricesError.CHANGE_PERCENTAGE_INVALID
                  : errors.changePercentage && EmptyFieldError.EMPTY_ERROR
              }
            />
          </DialogContent>
          <DialogActions sx={{ display: "flex", justifyContent: "center" }}>
            <Button onClick={handleCloseDialog}>Cancelar</Button>
            <Button type="submit" disabled={disabledSave}>
              Guardar
            </Button>
          </DialogActions>
        </FormContainer>
      </Dialog>
      <ToastContainer />
    </>
  );
};

export default ChangePrices;
