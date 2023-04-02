import { useTheme } from "@emotion/react";
import {
  DashboardTableContainer,
  StyledTableCell,
  StyledTableRow,
  TableList,
  TableName,
  TableNameContainer,
} from "./DashboardTable.styles";
import { Avatar, TableBody, TableHead, TableRow } from "@mui/material";
import { products, users } from "../../../components/products/productList";
import AvatarImage from "../../../images/product.jpg";
import ActionButtons from "../ActionButtons/ActionButtons";

const DashboardTable = ({ type }) => {
  let database;
  if (type === "users") {
    database = users;
  } else {
    database = products;
  }

  const theme = useTheme();
  return (
    <>
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
                  <StyledTableCell align="right">
                    $ {data.price}
                  </StyledTableCell>
                )}
                <StyledTableCell align="right">
                  <ActionButtons
                    data={{ id: data.id, name: data.name, price: data.price }}
                    type={type}
                  />
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </TableList>
      </DashboardTableContainer>
    </>
  );
};

export default DashboardTable;
