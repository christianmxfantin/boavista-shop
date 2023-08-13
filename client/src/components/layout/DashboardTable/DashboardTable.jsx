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
import AvatarImage from "../../../images/product.jpg";
import ActionButtons from "../ActionButtons/ActionButtons";
import useProducts from "../../../hooks/useProducts";
import { useEffect } from "react";

const DashboardTable = ({ typeData }) => {
  const theme = useTheme();
  const { getProducts, products, errors } = useProducts();
  // const users = getUsers();

  useEffect(() => {
    getProducts();
  }, []);

  let database;
  if (typeData === "users") {
    // database = users;
  } else {
    database = products;
  }

  return (
    <>
      {/* {users.length === 0 || products.length === 0 && (
        <ListEmpty msg="Aun no hay productos o usuarios ingresados"/>
      )} */}
      {!errors ? (
        <DashboardTableContainer>
          <TableList>
            <TableHead>
              <TableRow>
                <StyledTableCell>Nombre</StyledTableCell>
                {typeData === "products" && (
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
                  {typeData === "products" && (
                    <StyledTableCell align="right">
                      $ {data.price}
                    </StyledTableCell>
                  )}
                  <StyledTableCell align="right">
                    <ActionButtons
                      database={{
                        typeData,
                        data,
                      }}
                    />
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </TableList>
        </DashboardTableContainer>
      ) : (
        console.log(errors)
      )}
    </>
  );
};

export default DashboardTable;
