const express = require("express");
const router = express.Router();
const countriesController = require("./countries.controller");

router
  .get("/", countriesController.getCountries)
  .get("/:id", countriesController.getCountryById)
  .post("/name", countriesController.countryByName)
  .post("/", countriesController.createCountry)
  .put("/:id", countriesController.updateCountry)
  .delete("/:id", countriesController.deleteCountry);

module.exports = router;
