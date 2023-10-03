const express = require("express");
const router = express.Router();
const productsController = require("./products.controller");

router
  .get("/", productsController.getProducts)
  .get("/:id", productsController.getProductById)
  .post("/", productsController.createProduct)
  .put("/:id", productsController.updateProduct)
  .put("/update-prices", productsController.updatePrices)
  .delete("/:id", productsController.deleteProduct);

module.exports = router;
