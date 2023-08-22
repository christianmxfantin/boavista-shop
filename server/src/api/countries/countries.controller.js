const { Sequelize } = require("sequelize");
const db = require("../../db/models/index.js");
const ErrorHandler = require("../../utils/errorHandler.js");
const logger = require("../../utils/logger.js");
const { CountriesErrors } = require("./countries.errors.js");

const Countries = db.countries;

const getCountries = async (req, res, next) => {
  try {
    const countries = await Countries.findAll();

    return res.status(200).json(countries);
  } catch (err) {
    const error = new ErrorHandler(err.message, err.statusCode);
    logger.error(err);
    next(error);
  }
};

const getCountryById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const existingCountry = await Countries.findByPk(id);
    if (!existingCountry) {
      return res.status(404).json({
        message: CountriesErrors.COUNTRY_NOT_FOUND,
      });
    }

    return res.status(200).json(existingCountry);
  } catch (err) {
    const error = new ErrorHandler(err.message, err.statusCode);
    logger.error(err);
    next(error);
  }
};
const createCountry = async (req, res, next) => {
  try {
    const name = req.body.name.trim();

    // Check if country already exists (case-insensitive)
    const existingCountry = await Countries.findOne({
      where: Sequelize.where(
        Sequelize.fn("LOWER", Sequelize.col("name")),
        name.toLowerCase()
      ),
    });
    if (existingCountry) {
      return res.status(409).json({
        message: CountriesErrors.COUNTRY_ALREADY_EXISTS,
      });
    }

    const newCountry = await Countries.create(req.body);

    return res.status(201).json(newCountry);
  } catch (err) {
    const error = new ErrorHandler(err.message, err.statusCode);
    logger.error(err);
    next(error);
  }
};

const updateCountry = async (req, res, next) => {
  try {
    const { id } = req.params;
    const name = req.body.name.trim();

    const existingCountry = await Countries.findByPk(id);
    if (!existingCountry) {
      return res.status(404).json({
        message: CountriesErrors.COUNTRY_NOT_FOUND,
      });
    }

    // Check if country already exists (case-insensitive)
    const existingCountryName = await Countries.findOne({
      where: Sequelize.where(
        Sequelize.fn("LOWER", Sequelize.col("name")),
        name.toLowerCase()
      ),
    });
    if (existingCountryName) {
      return res.status(409).json({
        message: CountriesErrors.COUNTRY_ALREADY_EXISTS,
      });
    }

    const updateCountry = await existingCountry.update(req.body);

    return res.status(200).json(updateCountry);
  } catch (err) {
    const error = new ErrorHandler(err.message, err.statusCode);
    logger.error(err);
    next(error);
  }
};

const deleteCountry = async (req, res, next) => {
  try {
    const { id } = req.params;

    const existingCountry = await Countries.findByPk(id);
    if (!existingCountry) {
      return res.status(404).json({
        message: CountriesErrors.COUNTRY_NOT_FOUND,
      });
    }

    await Countries.destroy({
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
  getCountries,
  getCountryById,
  createCountry,
  updateCountry,
  deleteCountry,
};
