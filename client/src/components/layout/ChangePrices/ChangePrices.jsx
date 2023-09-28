import { useRef, useState } from "react";
import { useTheme } from "@emotion/react";
import { Controller, useForm } from "react-hook-form";
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

const ChangePrices = ({ openDialog, setOpenDialog }) => {
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
    reset();
    setDisabledSave(true);
  };

  return (
    <Dialog open={openDialog}>
      <DialogTitle
        sx={{ textAlign: "center", color: theme.palette.primary[500] }}
      >
        Cambio Masivo de Precios
      </DialogTitle>
      <DialogContent>
        <FormContainer
          component={"form"}
          autoComplete="off"
          noValidate
          onSubmit={handleSubmit(onSubmit)}
        >
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
                    <MenuItem value={1} key={1}>
                      Aumentar
                    </MenuItem>
                    <MenuItem value={2} key={2}>
                      Disminuir
                    </MenuItem>
                  </Select>
                  <FormHelperText error={!!errors.changeType}>
                    {errors.changeType && ChangePricesError.CHANGE_TYPE_INVALID}
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
        </FormContainer>
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
