const express = require("express");
const router = express.Router();
const categoriesController = require("./categories.controller");

router
  .get("/", categoriesController.getCategories)
  .get("/:id", categoriesController.getCategoryById)
  .post("/name", categoriesController.categoryByName)
  .post("/", categoriesController.createCategory)
  .put("/:id", categoriesController.updateCategory)
  .delete("/:id", categoriesController.deleteCategory);

module.exports = router;
