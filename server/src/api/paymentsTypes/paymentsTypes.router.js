const express = require("express");
const router = express.Router();
const paymentsTypesController = require("./paymentsTypes.controller");

router
  .get("/", paymentsTypesController.getPaymentsTypes)
  .get("/:id", paymentsTypesController.getPaymentTypeById)
  .post("/name", paymentsTypesController.paymentTypeByName)
  .post("/", paymentsTypesController.createPaymentType)
  .put("/:id", paymentsTypesController.updatePaymentType)
  .delete("/:id", paymentsTypesController.deletePaymentType);

module.exports = router;
