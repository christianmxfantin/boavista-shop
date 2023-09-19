import { useEffect } from "react";
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
import ActionButtons from "../ActionButtons/ActionButtons";
import useProducts from "../../../hooks/api/useProducts";
import useUsers from "../../../hooks/api/useUsers";
import EmptyData from "../EmptyData/EmptyData";

const DashboardTable = ({ typeData }) => {
  const theme = useTheme();
  const { products, getProducts } = useProducts();
  const { users, getUsers } = useUsers();

  useEffect(() => {
    if (typeData === "users") {
      getUsers();
    } else {
      getProducts();
    }
  }, [typeData, getUsers, getProducts]);

  let database;
  if (typeData === "users") {
    database = users;
  } else {
    database = products;
  }

  return (
    <>
      {database.length === 0 && (
        <EmptyData title={typeData === "users" ? "usuarios" : "productos"} />
      )}
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
                      alt={`Imágen del ${
                        typeData === "users" ? "Usuario" : "Producto"
                      }`}
                      src={typeData === "users" ? data.avatarURL : "ver"}
                      sx={{ marginRight: theme.spacing(2) }}
                    />
                    <TableName>
                      {typeData === "users"
                        ? `${data.names} ${data.surnames}`
                        : data.name}
                    </TableName>
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
    </>
  );
};

export default DashboardTable;
