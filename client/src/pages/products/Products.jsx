import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../actions/cart";

import { Box, Grid, MenuItem, Select, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

import ProductFilter from "../../components/products/ProductFilter";
import ProductItem from "../../components/products/ProductItem";

const Products = () => {
  //traer data de la BD
  let products = [
    { id: 1, name: "Lapicera Bic x 24 unidades", price: 500 },
    { id: 2, name: "Marcador Schneider Trazo fino x 6 unidades", price: 400 },
    { id: 3, name: "Lápices Staedtler x 24 unidades", price: 500 },
    {
      id: 4,
      name: "Goma de borrar Staedtler Tinta/Lápiz x 12 unidades",
      price: 600,
    },
    { id: 5, name: "Transportador Pizzini x 12 unidades", price: 700 },
    { id: 6, name: "Compáses Pizzini x 12 unidades", price: 900 },
  ];

  //const state = useSelector((state) => state);
  const dispatch = useDispatch();
  //aca debe ser un state.products
  //const { products } = state.cart;

  const ProductContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    color: theme.palette.primary[500],
  }));

  const ProductFilters = styled(Box)(({ theme }) => ({
    margin: theme.spacing(4, 3.5, 2, 3), //32px, 28px, 16px, 24px
    padding: theme.spacing(4), //32px
    width: "30%",
    display: "flex",
    flexDirection: "column",
    borderRadius: theme.spacing(1.5), //12px
    backgroundColor: theme.palette.primary[50],
  }));

  // const ProductData = styled(Box)(() => ({
  //   //styles
  // }));

  const ProductTitleContainer = styled(Box)(() => ({
    display: "flex",
  }));

  const ProductTitle = styled(Box)(({ theme }) => ({
    paddingTop: theme.spacing(4), //32px,
  }));

  const ProductCategoryTitle = styled(Typography)(({ theme }) => ({
    paddingLeft: theme.spacing(1), //12px
    color: theme.palette.primary[500],
    fontWeight: 500,
  }));

  const ProductCategoryQuantity = styled(Typography)(({ theme }) => ({
    paddingLeft: theme.spacing(1), //12px
    color: theme.palette.primary[500],
  }));

  const ProductOrderByContainer = styled(Box)(({ theme }) => ({
    marginLeft: "auto",
    padding: theme.spacing(6, 1.5, 0, 0), //48px y 12px,
    display: "flex",
    alignItems: "center",
  }));

  const ProductOrderByTitle = styled(Typography)(({ theme }) => ({
    paddingRight: theme.spacing(1), //8px,
    fontWeight: 500,
  }));

  const ProductOrderBySelect = styled(Select)(({ theme }) => ({
    width: "150px",
    padding: theme.spacing(0.5), //4px,
  }));

  const ProductListContainer = styled(Grid)(({ theme }) => ({
    maxWidth: "100%",
    margin: `${theme.spacing(0)} !important`,
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridAutoRows: "1fr",
  }));

  const ProductListItem = styled(Grid)(({ theme }) => ({
    padding: `${theme.spacing(1.5, 1.5, 2, 0)} !important`, //12px y 12px
  }));

  return (
    <ProductContainer>
      <ProductFilters>
        <ProductFilter />
      </ProductFilters>
      <Box>
        <ProductTitleContainer>
          <ProductTitle>
            <ProductCategoryTitle variant="h5">Categoría</ProductCategoryTitle>
            <ProductCategoryQuantity variant="subtitle1">
              50 artículos
            </ProductCategoryQuantity>
          </ProductTitle>
          <ProductOrderByContainer>
            <ProductOrderByTitle>Ordenar por:</ProductOrderByTitle>
            <ProductOrderBySelect variant="standard" defaultValue={1}>
              <MenuItem value={1}>Menor precio</MenuItem>
              <MenuItem value={2}>Mayor precio</MenuItem>
              <MenuItem value={3}>Más vendido</MenuItem>
            </ProductOrderBySelect>
          </ProductOrderByContainer>
        </ProductTitleContainer>
        <ProductListContainer container spacing={3}>
          {products.map((product) => (
            <ProductListItem item key={product.id}>
              <ProductItem
                key={product.id}
                data={product}
                addToCart={() => dispatch(addToCart(product.id))}
              />
            </ProductListItem>
          ))}
        </ProductListContainer>
      </Box>
    </ProductContainer>
  );
};

export default Products;
