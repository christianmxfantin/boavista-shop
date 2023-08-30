const express = require("express");
const router = express.Router();
const cardCompaniesController = require("./cardCompanies.controller");

router
  .get("/", cardCompaniesController.getCardCompanies)
  .get("/:id", cardCompaniesController.getCardCompanyById)
  .post("/name", cardCompaniesController.cardCompanyByName)
  .post("/", cardCompaniesController.createCardCompany)
  .put("/:id", cardCompaniesController.updateCardCompany)
  .delete("/:id", cardCompaniesController.deleteCardCompany);

module.exports = router;
