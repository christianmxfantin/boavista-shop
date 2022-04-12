import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import ProductImage from "../../images/product.jpg";

const ProductItem = ({ data, addToCart }) => {
  let { id, name, price } = data;
  return (
    <Card
      sx={{
        border: "2px solid blue",
        borderRadius: "10px",
      }}
    >
      <CardMedia
        component="img"
        alt="prueba"
        height="140"
        image={ProductImage}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          $ {price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => addToCart(id)}>
          Agregar
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductItem;
