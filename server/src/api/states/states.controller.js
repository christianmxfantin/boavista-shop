const { Sequelize } = require("sequelize");
const db = require("../../db/models/index.js");
const ErrorHandler = require("../../utils/errorHandler.js");
const logger = require("../../utils/logger.js");
const { StatesErrors } = require("./states.errors.js");
const { CountriesErrors } = require("../countries/countries.errors.js");
const { ApiErrors } = require("../api/api.errors.js");

const States = db.states;
const Countries = db.countries;

const getStates = async (req, res, next) => {
  try {
    const states = await States.findAll();

    return res.status(200).json(states);
  } catch (err) {
    const error = new ErrorHandler(err.message, err.statusCode);
    logger.error(err);
    next(error);
  }
};

const getStateById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const existingState = await States.findByPk(id);
    if (!existingState) {
      return res.status(404).json({
        message: ApiErrors.ID_NOT_FOUND,
      });
    }

    return res.status(200).json(existingState);
  } catch (err) {
    const error = new ErrorHandler(err.message, err.statusCode);
    logger.error(err);
    next(error);
  }
};
const createState = async (req, res, next) => {
  try {
    const { countryId } = req.body;
    const name = req.body.name.trim();

    // Check if state already exists (case-insensitive)
    const existingState = await States.findOne({
      where: Sequelize.where(
        Sequelize.fn("LOWER", Sequelize.col("name")),
        name.toLowerCase()
      ),
    });
    if (existingState) {
      return res.status(409).json({
        message: StatesErrors.STATE_ALREADY_EXISTS,
      });
    }

    //Check if countryId exists in countries table
    const existingCountry = await Countries.findByPk(countryId);
    if (!existingCountry) {
      return res.status(404).json({
        message: CountriesErrors.COUNTRY_NOT_FOUND,
      });
    }

    const newState = await States.create(req.body);

    return res.status(201).json(newState);
  } catch (err) {
    const error = new ErrorHandler(err.message, err.statusCode);
    logger.error(err);
    next(error);
  }
};

const updateState = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { countryId } = req.body;
    const name = req.body.name.trim();

    const existingState = await States.findByPk(id);
    if (!existingState) {
      return res.status(404).json({
        message: ApiErrors.ID_NOT_FOUND,
      });
    }

    // Check if state already exists (case-insensitive)
    const existingStateName = await States.findOne({
      where: Sequelize.where(
        Sequelize.fn("LOWER", Sequelize.col("name")),
        name.toLowerCase()
      ),
    });
    if (existingStateName) {
      return res.status(409).json({
        message: StatesErrors.STATE_ALREADY_EXISTS,
      });
    }

    //Check if countryId exists in countries table
    const existingCountry = await Countries.findByPk(countryId);
    if (!existingCountry) {
      return res.status(404).json({
        message: CountriesErrors.COUNTRY_NOT_FOUND,
      });
    }

    const updateState = await existingState.update(req.body);

    return res.status(200).json(updateState);
  } catch (err) {
    const error = new ErrorHandler(err.message, err.statusCode);
    logger.error(err);
    next(error);
  }
};

const deleteState = async (req, res, next) => {
  try {
    const { id } = req.params;

    const existingState = await States.findByPk(id);
    if (!existingState) {
      return res.status(404).json({
        message: ApiErrors.ID_NOT_FOUND,
      });
    }

    await States.destroy({
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
  getStates,
  getStateById,
  createState,
  updateState,
  deleteState,
};
