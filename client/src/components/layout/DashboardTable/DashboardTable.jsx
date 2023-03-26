import { useTheme } from "@emotion/react";
import {
  DashboardTableContainer,
  IconsContainer,
  StyledTableCell,
  StyledTableRow,
  TableList,
  TableName,
  TableNameContainer,
} from "./DashboardTable.styles";
import {
  Icon as EditIcon,
  Icon as DeleteIcon,
} from "../../../components/ui/Icon";
import { Avatar, TableBody, TableHead, TableRow } from "@mui/material";
import { products, users } from "../../../components/products/productList";
import AvatarImage from "../../../images/product.jpg";

const DashboardTable = ({ type }) => {
  let database;
  if (type === "users") {
    database = users;
  } else {
    database = products;
  }

  const theme = useTheme();

  const handleEdit = () => {
    console.log("Editar");
  };

  const handleDelete = () => {
    console.log("Borrar");
  };

  return (
    <DashboardTableContainer>
      <TableList>
        <TableHead>
          <TableRow>
            <StyledTableCell>Nombre</StyledTableCell>
            {type === "products" && (
              <StyledTableCell align="right">Precio</StyledTableCell>
            )}
            <StyledTableCell>Acciones</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {database.map((data) => (
            <StyledTableRow key={data.id}>
              <StyledTableCell component="th" scope="row">
                <TableNameContainer>
                  <Avatar
                    alt={`Imágen del Producto ID ${data.id}`}
                    src={AvatarImage}
                    sx={{ marginRight: theme.spacing(2) }}
                  />
                  <TableName>{data.name}</TableName>
                </TableNameContainer>
              </StyledTableCell>
              {type === "products" && (
                <StyledTableCell align="right">$ {data.price}</StyledTableCell>
              )}
              <StyledTableCell align="right">
                <IconsContainer>
                  <EditIcon
                    name="Edit-Data"
                    size={30}
                    color={theme.palette.primary[500]}
                    sx={{ marginRight: theme.spacing(1) }}
                    onClick={handleEdit}
                  />
                  <DeleteIcon
                    name="Delete-Data"
                    size={30}
                    color={theme.palette.error[500]}
                    onClick={handleDelete}
                  />
                </IconsContainer>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </TableList>
    </DashboardTableContainer>
  );
};

export default DashboardTable;
