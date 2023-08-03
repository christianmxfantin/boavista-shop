const express = require("express");
const router = express.Router();
const ordersController = require("./orders.controller");

router
  .get("/", ordersController.getOrders)
  .get("/:id", ordersController.getOrderById)
  .post("/", ordersController.createOrder)
  .put("/:id", ordersController.updateOrder)
  .delete("/:id", ordersController.deleteOrder);

module.exports = router;
