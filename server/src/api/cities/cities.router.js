const express = require("express");
const router = express.Router();
const citiesController = require("./cities.controller");

router
  .get("/", citiesController.getCities)
  .get("/:id", citiesController.getCityById)
  .post("/name", citiesController.cityByName)
  .post("/", citiesController.createCity)
  .put("/:id", citiesController.updateCity)
  .delete("/:id", citiesController.deleteCity);

module.exports = router;
