const express = require("express");
const router = express.Router();
const addressesTypesController = require("./addressesTypes.controller");

router
  .get("/", addressesTypesController.getAddressesTypes)
  .get("/:id", addressesTypesController.getAddressTypeById)
  .post("/name/", addressesTypesController.addressTypeByName)
  .post("/", addressesTypesController.createAddressType)
  .put("/:id", addressesTypesController.updateAddressType)
  .delete("/:id", addressesTypesController.deleteAddressType);

module.exports = router;
