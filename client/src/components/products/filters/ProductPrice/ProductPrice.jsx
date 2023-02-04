import { InputAdornment } from "@mui/material";
import {
  ProductPriceCard,
  ProductPriceTitle,
  ProductPriceContainer,
  ProductPriceInput,
} from "./ProductPrice.styles";

const ProductPrice = () => {
  return (
    <ProductPriceCard>
      <ProductPriceTitle>Precio</ProductPriceTitle>
      <ProductPriceContainer>
        <ProductPriceInput
          variant="outlined"
          placeholder="Mínimo"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
          sx={{
            mr: 2,
            "& .MuiOutlinedInput-input": {
              p: 1, //8px
            },
          }} //16px
        />
        <ProductPriceInput
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
