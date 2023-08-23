const { Sequelize } = require("sequelize");
const db = require("../../db/models/index.js");
const ErrorHandler = require("../../utils/errorHandler.js");
const logger = require("../../utils/logger.js");
const { CountriesErrors } = require("../countries/countries.errors.js");
const { StatesErrors } = require("../states/states.errors.js");
const { CitiesErrors } = require("./cities.errors.js");

const Cities = db.cities;
const States = db.states;
const Countries = db.countries;

const createAndUpdateCity = async (req, res, next) => {
  try {
    const { stateId, countryId } = req.body;
    const name = req.body.name.trim();

    //Check if stateId exists in states table
    const existingState = await States.findByPk(stateId);
    if (!existingState) {
      return res.status(404).json({
        message: StatesErrors.STATE_NOT_FOUND,
      });
    }

    //Check if countryId exists in countries table
    const existingCountry = await Countries.findByPk(countryId);
    if (!existingCountry) {
      return res.status(404).json({
        message: CountriesErrors.COUNTRY_NOT_FOUND,
      });
    }

    // Check if city already exists (case-insensitive)
    const existingCityName = await Cities.findOne({
      where: Sequelize.where(
        Sequelize.fn("LOWER", Sequelize.col("name")),
        name.toLowerCase()
      ),
    });
    if (existingCityName) {
      return res.status(409).json({
        message: CitiesErrors.CITY_ALREADY_EXISTS,
      });
    }

    return req.body;
  } catch (err) {
    const error = new ErrorHandler(err.message, err.statusCode);
    logger.error(err);
    next(error);
  }
};

module.exports = {
  createAndUpdateCity,
};
