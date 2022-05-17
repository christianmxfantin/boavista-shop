import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";

const ProductCategory = () => {
  return (
    <>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 200 }}>
        <InputLabel>Seleccionar Categoría</InputLabel>
        <Select
        // value={age}
        // onChange={handleChange}
        // displayEmpty
        >
          <MenuItem value="">Categoría 1</MenuItem>
        </Select>
      </FormControl>
    </>
  );
};

export default ProductCategory;
