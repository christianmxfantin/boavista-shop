import { useState } from "react";
import { InputAdornment } from "@mui/material";
import {
  ProductPriceCard,
  ProductPriceTitle,
  ProductPriceContainer,
  ProductMinPrice,
  ProductMaxPrice,
} from "./ProductPrice.styles";

const ProductPrice = () => {
  // const [value, setValue] = useState(0);

  // const handleChange = (event) => {
  //   setValue(parseFloat(event.target.value));
  // };

  return (
    <ProductPriceCard>
      <ProductPriceTitle>Precio</ProductPriceTitle>
      <ProductPriceContainer>
        <ProductMinPrice
          type="number"
          variant="outlined"
          placeholder="Mínimo"
          step="0.01"
          // value={value}
          // onChange={handleChange}
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
        <ProductMaxPrice
          type="number"
          variant="outlined"
          placeholder="Máximo"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
      </ProductPriceContainer>
    </ProductPriceCard>
  );
};

export default ProductPrice;
