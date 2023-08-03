const express = require("express");
const router = express.Router();
const paymentsController = require("./payments.controller");

router
  .get("/", paymentsController.getPayments)
  .get("/:id", paymentsController.getPaymentById)
  .post("/", paymentsController.createPayment)
  .put("/:id", paymentsController.updatePayment)
  .delete("/:id", paymentsController.deletePayment);

module.exports = router;
