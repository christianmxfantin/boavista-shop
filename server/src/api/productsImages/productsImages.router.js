const express = require("express");
const router = express.Router();
const productsImagesController = require("./productsImages.controller");

router
  .get("/", productsImagesController.getProductsImages)
  .get("/:id", productsImagesController.getProductImageById)
  .post("/", productsImagesController.createProductImage)
  .put("/:id", productsImagesController.updateProductImage)
  .delete("/:id", productsImagesController.deleteProductImage);

module.exports = router;
