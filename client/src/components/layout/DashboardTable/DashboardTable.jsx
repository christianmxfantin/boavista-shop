import { useEffect, useState } from "react";
import { useTheme } from "@emotion/react";
import {
  DashboardTableContainer,
  StyledTableCell,
  StyledTableRow,
  TableList,
  TableName,
  TableNameContainer,
} from "./DashboardTable.styles";
import { Avatar, Box, TableBody, TableHead, TableRow } from "@mui/material";
import ActionButtons from "../ActionButtons/ActionButtons";
import useProducts from "../../../hooks/api/useProducts";
import useUsers from "../../../hooks/api/useUsers";
import EmptyData from "../EmptyData/EmptyData";
import { getProductsImagesResponse } from "../../../api/productsImages";
import { Icon } from "../../ui/Icon";
import DashboardTableSkeleton from "../../skeleton/DashboardTableSkeleton/DashboardTableSkeleton";
import { responseError, statusErrors } from "../../../utils/toastErrors";

const DashboardTable = ({ typeData }) => {
  const theme = useTheme();
  const { loadingProducts, products, getProducts } = useProducts();
  const { loadingUsers, users, getUsers } = useUsers();

  const [productsImages, setProductsImages] = useState([]);

  useEffect(() => {
    if (typeData === "users") {
      getUsers();
    } else {
      getProducts();
    }
  }, [typeData]);

  useEffect(() => {
    if (typeData === "products") {
      const getData = async () => {
        try {
          const images = await getProductsImagesResponse();
          setProductsImages(images.data);
        } catch (error) {
          statusErrors(error);
          responseError(error);
        }
      };
      getData();
    }
  }, []);

  let database;
  if (typeData === "users") {
    database = users;
  } else {
    const productsWithURL = products.map((product) => {
      const images = productsImages.filter(
        (img) => img.productId === product.id
      );

      if (images.length === 0) {
        images.push({ url: "S/D" });
      }

      return {
        ...product,
        images,
      };
    });
    database = productsWithURL;
  }

  return (
    <>
      {database.length === 0 && (!loadingProducts || !loadingUsers) && (
        <Box>
          <EmptyData
            iconName={typeData === "users" ? "users" : "products"}
            size={100}
            title={typeData === "users" ? "usuarios" : "productos"}
          />
        </Box>
      )}
      <DashboardTableContainer>
        {loadingProducts && loadingUsers ? (
          <DashboardTableSkeleton />
        ) : (
          <TableList>
            <TableHead>
              <TableRow>
                {database.length !== 0 && (
                  <>
                    <StyledTableCell>Nombre</StyledTableCell>
                    {typeData === "products" && (
                      <StyledTableCell align="right">Precio</StyledTableCell>
                    )}
                    <StyledTableCell>Acciones</StyledTableCell>
                  </>
                )}
              </TableRow>
            </TableHead>
            <TableBody>
              {database.map((data) => (
                <StyledTableRow key={data.id}>
                  <StyledTableCell component="th" scope="row">
                    <TableNameContainer>
                      {typeData === "products" &&
                      data.images[0].url === "S/D" ? (
                        <Avatar
                          sx={{
                            marginRight: theme.spacing(2),
                            backgroundColor: theme.palette.primary[500],
                          }}
                        >
                          <Icon name="products" />
                        </Avatar>
                      ) : (
                        <Avatar
                          alt={`Imágen del ${
                            typeData === "users" ? "Usuario" : "Producto"
                          }`}
                          src={
                            typeData === "users"
                              ? data.avatarURL
                              : productsImages
                              ? data.images[0].url
                              : null
                          }
                          sx={{
                            marginRight: theme.spacing(2),
                            backgroundColor: theme.palette.primary[500],
                          }}
                        />
                      )}
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
        )}
      </DashboardTableContainer>
    </>
  );
};

export default DashboardTable;
