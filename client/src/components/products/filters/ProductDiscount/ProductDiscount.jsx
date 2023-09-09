import { MenuItem } from "@mui/material";
import {
  ProductDiscountCard,
  ProductDiscountSelect,
  ProductDiscountTitle,
} from "./ProductDiscount.styles";

const ProductDiscount = ({ discounts, discountFilter, setDiscountFilter }) => {
  const handleDiscountChange = (value) => {
    // console.log(value);
    setDiscountFilter(value);
  };

  return (
    <ProductDiscountCard>
      <ProductDiscountTitle>Descuentos</ProductDiscountTitle>
      <ProductDiscountSelect
        name="productCategory"
        variant="outlined"
        defaultValue={1}
        onChange={(e) => handleDiscountChange(e.target.value)}
      >
        <MenuItem value={1}>Selecciona un Descuento</MenuItem>
        {discounts.map((discount, index) => (
          <MenuItem value={discount.percentage} key={index}>
            {`${discount.percentage}% OFF`}
          </MenuItem>
        ))}
      </ProductDiscountSelect>
    </ProductDiscountCard>
  );
};

export default ProductDiscount;
