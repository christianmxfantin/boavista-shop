import { useState } from "react";
import theme from "../../../styles/theme";
import {
  ProductTitleContainer,
  ProductCategory,
  ProductCategoryTitle,
  ProductCategoryQuantity,
  ProductOrderByContainer,
  ProductOrderBySelect,
} from "./ProductTitle.styles";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  Divider,
  MenuItem,
} from "@mui/material";
import ProductFilter from "../ProductFilter";

const ProductTitle = ({
  search,
  totResults,
  category,
  setSelectedOrder,
  categories,
  discounts,
  setSelectedCategory,
  selectedPrice,
  setSelectedPrice,
  setSelectedDiscount,
}) => {
  const searchData = decodeURIComponent(search.slice(3).replace(/\+/g, " "));

  const [openDialog, setOpenDialog] = useState(false);

  const handleOrderByChange = (value) => {
    setSelectedOrder(value);
  };

  const handleFilterButton = () => {
    setOpenDialog(true);
  };

  const handleCloseFilters = () => {
    setOpenDialog(false);
  };

  return (
    <ProductTitleContainer component={"article"}>
      <ProductCategory>
        <ProductCategoryTitle variant="h5">
          {search ? searchData : category ? category : "Todas las Categorías"}
        </ProductCategoryTitle>
        <ProductCategoryQuantity variant="subtitle1">
          {totResults} {totResults === 1 ? "artículo" : "artículos"}
        </ProductCategoryQuantity>
      </ProductCategory>
      <ProductOrderByContainer>
        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <Button
            sx={{
              marginRight: theme.spacing(2),
              backgroundColor: theme.palette.primary[500],
              color: theme.palette.secondary.A100,
              "&:hover": {
                backgroundColor: theme.palette.secondary[500],
                color: theme.palette.primary[500],
              },
            }}
            onClick={handleFilterButton}
          >
            Filtrar
          </Button>
          <Divider
            orientation="vertical"
            variant="middle"
            flexItem
            sx={{ marginRight: theme.spacing(1) }}
          />
          <Dialog open={openDialog}>
            <Box
              sx={{
                margin: theme.spacing(2),
                padding: theme.spacing(3),
                borderRadius: theme.spacing(1.5), //12px
                backgroundColor: theme.palette.primary[50],
                color: theme.palette.primary[500],
              }}
            >
              <ProductFilter
                categories={categories}
                discounts={discounts}
                setSelectedCategory={setSelectedCategory}
                selectedPrice={selectedPrice}
                setSelectedPrice={setSelectedPrice}
                setSelectedDiscount={setSelectedDiscount}
              />
            </Box>
            <DialogActions
              sx={{
                display: "flex",
                justifyContent: "center",
                marginBottom: theme.spacing(2),
              }}
            >
              <Button onClick={handleCloseFilters}>Cerrar</Button>
            </DialogActions>
          </Dialog>
        </Box>
        <ProductOrderBySelect
          name="productOrder"
          variant="standard"
          defaultValue={1}
          onChange={(e) => handleOrderByChange(e.target.value)}
        >
          <MenuItem value={1}>Ordenar por:</MenuItem>
          <MenuItem value={2}>Menor precio</MenuItem>
          <MenuItem value={3}>Mayor precio</MenuItem>
        </ProductOrderBySelect>
      </ProductOrderByContainer>
    </ProductTitleContainer>
  );
};

export default ProductTitle;
