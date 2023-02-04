import { Typography } from "@mui/material";
import {
  ProductDiscountCard,
  ProductDiscountTitle,
  ProductDiscountData,
} from "./ProductDiscount.styles";

const ProductDiscount = () => {
  return (
    <ProductDiscountCard>
      <ProductDiscountTitle>Descuentos</ProductDiscountTitle>
      <ProductDiscountData>
        {/* COMPONENTE QUE GENERA LA DATA AUTOMATICAMENTE DESDE LA BD */}
        <Typography>5% OFF, 10% OFF, 20% OFF</Typography>
      </ProductDiscountData>
    </ProductDiscountCard>
  );
};

export default ProductDiscount;
