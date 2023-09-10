import { InputAdornment } from "@mui/material";
import {
  ProductPriceCard,
  ProductPriceTitle,
  ProductPriceContainer,
  ProductMinPrice,
  ProductMaxPrice,
} from "./ProductPrice.styles";

const ProductPrice = ({ selectedPrice, setSelectedPrice }) => {
  const handleMinPriceChange = (value) => {
    setSelectedPrice([value === "" ? 0 : value, selectedPrice[1]]);
    console.log(selectedPrice);
  };

  const handleMaxPriceChange = (value) => {
    setSelectedPrice([selectedPrice[0], value === "" ? 0 : value]);
    console.log(selectedPrice);
  };

  return (
    <ProductPriceCard>
      <ProductPriceTitle>Precio</ProductPriceTitle>
      <ProductPriceContainer>
        <ProductMinPrice
          type="number"
          variant="outlined"
          placeholder="Mínimo"
          step="0.01"
          onBlur={(e) => handleMinPriceChange(e.target.value)}
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
        <ProductMaxPrice
          type="number"
          variant="outlined"
          placeholder="Máximo"
          step="0.01"
          onBlur={(e) => handleMaxPriceChange(e.target.value)}
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
      </ProductPriceContainer>
    </ProductPriceCard>
  );
};

export default ProductPrice;
