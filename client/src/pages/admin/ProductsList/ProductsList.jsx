import { useTheme } from "@emotion/react";
import {
  Icon as EditIcon,
  Icon as DeleteIcon,
} from "../../../components/ui/Icon";
import {
  ProductsListContainer,
  ProductsListTable,
  IconsContainer,
  StyledTableCell,
  StyledTableRow,
} from "./ProductsList.styles";
import { TableBody, TableHead, TableRow } from "@mui/material";
import { products } from "../../../components/products/productList";

const ProductsList = () => {
  const theme = useTheme();

  const handleEditProduct = () => {
    console.log("Editar Producto");
  };

  const handleDeleteProduct = () => {
    console.log("Borrar Producto");
  };

  return (
    <ProductsListContainer>
      <ProductsListTable>
        <TableHead>
          <TableRow>
            <StyledTableCell>ID</StyledTableCell>
            <StyledTableCell>Nombre</StyledTableCell>
            <StyledTableCell align="right">Precio</StyledTableCell>
            <StyledTableCell>Acciones</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product) => (
            <StyledTableRow key={product.id}>
              <StyledTableCell component="th" scope="row">
                {product.id}
              </StyledTableCell>
              <StyledTableCell component="th" scope="row">
                {product.name}
              </StyledTableCell>
              <StyledTableCell align="right">$ {product.price}</StyledTableCell>
              <StyledTableCell align="right">
                <IconsContainer>
                  <EditIcon
                    name="Edit-Data"
                    size={30}
                    color={theme.palette.primary[500]}
                    sx={{ marginRight: theme.spacing(1) }}
                    onClick={handleEditProduct}
                  />
                  <DeleteIcon
                    name="Delete-Data"
                    size={30}
                    color={theme.palette.error[500]}
                    onClick={handleDeleteProduct}
                  />
                </IconsContainer>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </ProductsListTable>
    </ProductsListContainer>
  );
};

export default ProductsList;
