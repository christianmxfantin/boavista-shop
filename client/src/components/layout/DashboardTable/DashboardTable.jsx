import { useState } from "react";
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
import TableActions from "../TableActions/TableActions";
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
  const [showModal, setShowModal] = useState(false);
  const [actionType, setActionType] = useState(null);

  const handleEdit = () => {
    setShowModal(true);
    setActionType("edit");
  };

  const handleDelete = () => {
    setShowModal(true);
    setActionType("delete");
  };

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
                  <IconsContainer>
                    <div>
                      <EditIcon
                        name="Edit-Data"
                        size={30}
                        color={theme.palette.primary[500]}
                        sx={{ marginRight: theme.spacing(1) }}
                        actionType="edit"
                        onClick={handleEdit}
                      />
                    </div>
                    <div>
                      <DeleteIcon
                        name="Delete-Data"
                        size={30}
                        color={theme.palette.error[500]}
                        actionType="delete"
                        onClick={handleDelete}
                      />
                    </div>
                  </IconsContainer>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </TableList>
      </DashboardTableContainer>
      <TableActions
        type={type}
        showModal={showModal}
        setShowModal={setShowModal}
        actionType={actionType}
      />
    </>
  );
};

export default DashboardTable;
