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
  CategoryInput,
  DiscountInput,
  FormContainer,
  PercentageInput,
  SelectContainer,
} from "./DashboardModal.styles";
import { DashboardModalError } from "../../../errors/dashboardModal.errors";
import { EmptyFieldError } from "../../../errors/emptyField.errors";
import { PatternValidations } from "../../../helpers/validations";
import useProducts from "../../../hooks/api/useProducts";
import { toastColor } from "../../../utils/toastOptions";
import { ProductsErrors } from "../../../errors/products.errors";

const DashboardModal = ({
  formType,
  openDialog,
  setOpenDialog,
  setSelectedCategory,
}) => {
  const { updatePrices } = useProducts();

  const theme = useTheme();
  const percentageInputValue = useRef("");
  const categoryInputValue = useRef("");
  const discountInputValue = useRef("");

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

  const handleInputChange = () => {
    const hasValue = (value) => value === "";

    if (formType === "changePrices") {
      setDisabledSave(hasValue(percentageInputValue.current.value));
    }

    if (formType === "category") {
      setDisabledSave(hasValue(categoryInputValue.current.value));
    }

    if (formType === "discount") {
      setDisabledSave(hasValue(discountInputValue.current.value));
    }
  };

  const onSubmit = async (formValues) => {
    switch (formType) {
      case "changePrices":
        try {
          const changePrices = {
            type: formValues.changeType,
            percentage: Number(formValues.changePercentage),
          };

          const updatedProducts = await updatePrices(changePrices);
          console.log(updatedProducts);
          if (updatedProducts) {
            toast.success("Los cambios se han guardado", toastColor("success"));
          }
        } catch (error) {
          console.log(error);
        }
        break;

      case "category":
        setSelectedCategory(formValues.category);
        break;

      case "discount":
        break;
      default:
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
            {formType === "changePrices"
              ? "Cambio Masivo de Precios"
              : formType === "category"
              ? "Agregar Nueva Categoría"
              : "Agregar Nuevo Descuento"}
          </DialogTitle>
          <DialogContent>
            {formType === "changePrices" && (
              <>
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
                            DashboardModalError.CHANGE_TYPE_INVALID}
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
                    endAdornment: (
                      <InputAdornment position="end">%</InputAdornment>
                    ),
                  }}
                  {...register("changePercentage", {
                    required: true,
                    pattern: PatternValidations.NUMBERS,
                    onChange: handleInputChange,
                  })}
                  error={!!errors.changePercentage}
                  helperText={
                    watch("changePercentage")
                      ? errors.changePercentage &&
                        DashboardModalError.CHANGE_PERCENTAGE_INVALID
                      : errors.changePercentage && EmptyFieldError.EMPTY_ERROR
                  }
                />
              </>
            )}
            {formType === "category" && (
              <CategoryInput
                name="category"
                type="text"
                variant="outlined"
                size="small"
                placeholder="Nombre de la Categoría"
                required
                fullWidth
                inputRef={categoryInputValue}
                {...register("category", {
                  required: true,
                  pattern: PatternValidations.NAMES_AND_SURNAMES,
                  onChange: handleInputChange,
                })}
                error={!!errors.category}
                helperText={
                  watch("category")
                    ? errors.category && ProductsErrors.CATEGORY_INVALID
                    : errors.category && EmptyFieldError.EMPTY_ERROR
                }
              />
            )}
            {formType === "discount" && (
              <DiscountInput
                name="discount"
                type="text"
                variant="outlined"
                size="small"
                placeholder="Ingresa el Porcentaje"
                required
                fullWidth
                inputRef={discountInputValue}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">% OFF</InputAdornment>
                  ),
                }}
                {...register("discount", {
                  required: true,
                  pattern: PatternValidations.NUMBERS,
                  onChange: handleInputChange,
                })}
                error={!!errors.discount}
                helperText={
                  watch("discount")
                    ? errors.discount && ProductsErrors.DISCOUNT_INVALID
                    : errors.discount && EmptyFieldError.EMPTY_ERROR
                }
              />
            )}
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

export default DashboardModal;
