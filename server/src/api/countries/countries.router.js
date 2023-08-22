const express = require("express");
const router = express.Router();
const countriesController = require("./countries.controller");

router
  .get("/", countriesController.getCountries)
  .get("/:id", countriesController.getCountryById)
  .post("/", countriesController.createCountry)
  .put("/:id", countriesController.updateCountry)
  .delete("/:id", countriesController.deleteCountry);

module.exports = router;
