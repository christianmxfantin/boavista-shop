const { Sequelize } = require("sequelize");
const db = require("../../db/models/index.js");
const ErrorHandler = require("../../utils/errorHandler.js");
const logger = require("../../utils/logger.js");
const { CitiesErrors } = require("./cities.errors.js");

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
        message: CitiesErrors.CITY_NOT_FOUND,
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
    const name = req.body.name.trim();

    // Check if city already exists (case-insensitive)
    const existingCity = await Cities.findOne({
      where: Sequelize.where(
        Sequelize.fn("LOWER", Sequelize.col("name")),
        name.toLowerCase()
      ),
    });
    if (existingCity) {
      return res.status(409).json({
        message: CitiesErrors.CITY_ALREADY_EXISTS,
      });
    }

    const newCity = await Cities.create(req.body);

    return res.status(201).json(newCity);
  } catch (err) {
    const error = new ErrorHandler(err.message, err.statusCode);
    logger.error(err);
    next(error);
  }
};

const updateCity = async (req, res, next) => {
  try {
    const { id } = req.params;
    const name = req.body.name.trim();

    const existingCity = await Cities.findByPk(id);
    if (!existingCity) {
      return res.status(404).json({
        message: CitiesErrors.CITY_NOT_FOUND,
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

    const updateCity = await existingCity.update(req.body);

    return res.status(200).json(updateCity);
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
        message: CitiesErrors.CITY_NOT_FOUND,
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
  createCity,
  updateCity,
  deleteCity,
};
