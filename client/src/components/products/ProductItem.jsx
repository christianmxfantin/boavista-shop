import React from "react";
import { useTheme } from "@emotion/react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";
import { Icon as CartIcon } from "../Icon";
import ProductImage from "../../images/product.jpg";

const ProductItem = ({ data, addToCart }) => {
  const theme = useTheme();
  let { id, name, price } = data;

  return (
    <Card
      sx={{
        // border: `0.1px solid ${theme.palette.grey.main}`,
        borderRadius: "5px",
      }}
    >
      <CardMedia
        component="img"
        alt="prueba"
        height="140"
        image={ProductImage}
        sx={{ height: "180px" }}
      />
      <CardContent sx={{ padding: "10px !important" }}>
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          sx={{
            color: `${theme.palette.primary.main}`,
            fontWeight: 500,
            "&:hover": {
              color: `${theme.palette.primary.second}`,
              fontWeight: 600,
            },
          }}
        >
          {name}
        </Typography>
        <Container
          sx={{
            display: "flex",
            justifyContent: "space-between",
            padding: "0px !important",
          }}
        >
          <Typography
            variant="body1"
            sx={{ color: `${theme.palette.primary.main}` }}
          >
            $ {price}
          </Typography>
          <CartIcon
            name="Cart"
            color={theme.palette.primary.main}
            size={25}
            onClick={() => addToCart(id)}
          />
        </Container>
      </CardContent>
      {/* <Button size="small" onClick={() => addToCart(id)}>
          Agregar
        </Button> */}
    </Card>
  );
};

export default ProductItem;
