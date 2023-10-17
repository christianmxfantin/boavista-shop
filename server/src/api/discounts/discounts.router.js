const express = require("express");
const router = express.Router();
const discountsController = require("./discounts.controller");

router
  .get("/", discountsController.getDiscounts)
  .get("/:id", discountsController.getDiscountById)
  .post("/name", discountsController.discountByName)
  .post("/", discountsController.createDiscount)
  .put("/:id", discountsController.updateDiscount)
  .delete("/:id", discountsController.deleteDiscount);

module.exports = router;
