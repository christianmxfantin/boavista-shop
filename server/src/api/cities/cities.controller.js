const { Sequelize } = require("sequelize");
const db = require("../../db/models/index.js");
const ErrorHandler = require("../../utils/errorHandler.js");
const logger = require("../../utils/logger.js");
const { ApiErrors } = require("../api/api.errors.js");
const { CitiesErrors } = require("./cities.errors.js");
const { createAndUpdateCity } = require("./cities.validations.js");

const Cities = db.cities;

const getCities = async (req, res, next) => {
  try {
    const cities = await Cities.findAll();

    return res.status(200).json(cities);
  } catch (err) {
    const error = new ErrorHandler(err.message, err.statusCode);
    logger.error(err);
    next(error);
  }
};

const getCityById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const existingCity = await Cities.findByPk(id);
    if (!existingCity) {
      return res.status(404).json({
        message: ApiErrors.ID_NOT_FOUND,
      });
    }

    return res.status(200).json(existingCity);
  } catch (err) {
    const error = new ErrorHandler(err.message, err.statusCode);
    logger.error(err);
    next(error);
  }
};

const cityByName = async (req, res, next) => {
  try {
    const name = req.body.name.trim();

    const existingCity = await Cities.findOne({
      where: Sequelize.where(
        Sequelize.fn("LOWER", Sequelize.col("name")),
        Sequelize.fn("LOWER", name)
      ),
    });
    if (!existingCity) {
      return res.status(200).json({
        message: CitiesErrors.CITY_IS_AVAILABLE,
      });
    }

    return res.status(200).json(existingCity);
  } catch (err) {
    const error = new ErrorHandler(err.message, err.statusCode);
    logger.error(err);
    next(error);
  }
};

const createCity = async (req, res, next) => {
  try {
    const cityData = await createAndUpdateCity(req, res, next);
    if (cityData) {
      const newCity = await Cities.create(cityData);
      return res.status(201).json(newCity);
    }
  } catch (err) {
    const error = new ErrorHandler(err.message, err.statusCode);
    logger.error(err);
    next(error);
  }
};

const updateCity = async (req, res, next) => {
  try {
    const { id } = req.params;

    const cityData = await createAndUpdateCity(req, res, next);
    if (cityData) {
      //Check if city id exists
      const existingCity = await Cities.findByPk(id);
      if (!existingCity) {
        return res.status(404).json({
          message: ApiErrors.ID_NOT_FOUND,
        });
      }

      const updateCity = await existingCity.update(cityData);

      return res.status(200).json(updateCity);
    }
  } catch (err) {
    const error = new ErrorHandler(err.message, err.statusCode);
    logger.error(err);
    next(error);
  }
};

const deleteCity = async (req, res, next) => {
  try {
    const { id } = req.params;

    const existingCity = await Cities.findByPk(id);
    if (!existingCity) {
      return res.status(404).json({
        message: ApiErrors.ID_NOT_FOUND,
      });
    }

    await Cities.destroy({
      where: {
        id,
      },
    });
    return res.sendStatus(204);
  } catch (err) {
    const error = new ErrorHandler(err.message, err.statusCode);
    logger.error(err);
    next(error);
  }
};

module.exports = {
  getCities,
  getCityById,
  cityByName,
  createCity,
  updateCity,
  deleteCity,
};
