import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { styled } from "@mui/material/styles";

const FormCategory = styled(FormControl)(({ theme }) => ({
  minWidth: 200,
}));

const ProductCategory = () => {
  return (
    <>
      <FormCategory variant="standard">
        <InputLabel>Seleccionar Categoría</InputLabel>
        <Select
        // value={age}
        // onChange={handleChange}
        // displayEmpty
        >
          <MenuItem value="">Categoría 1</MenuItem>
        </Select>
      </FormCategory>
    </>
  );
};

export default ProductCategory;
