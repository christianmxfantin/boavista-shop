const express = require("express");
const router = express.Router();
const addressesController = require("./addresses.controller");

router
  .get("/", addressesController.getAddresses)
  .get("/:id", addressesController.getAddressById)
  .post("/", addressesController.createAddress)
  .put("/:id", addressesController.updateAddress)
  .delete("/:id", addressesController.deleteAddress);

module.exports = router;
