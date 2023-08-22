const { Sequelize } = require("sequelize");
const db = require("../../db/models/index.js");
const ErrorHandler = require("../../utils/errorHandler.js");
const logger = require("../../utils/logger.js");
const { CardCompaniesErrors } = require("./cardCompanies.errors.js");

const CardCompanies = db.cardCompanies;

const getCardCompanies = async (req, res, next) => {
  try {
    const cardCompanies = await CardCompanies.findAll();

    return res.status(200).json(cardCompanies);
  } catch (err) {
    const error = new ErrorHandler(err.message, err.statusCode);
    logger.error(err);
    next(error);
  }
};

const getCardCompanyById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const existingCardCompany = await CardCompanies.findByPk(id);
    if (!existingCardCompany) {
      return res.status(404).json({
        message: CardCompaniesErrors.CARD_COMPANY_NOT_FOUND,
      });
    }

    return res.status(200).json(existingCardCompany);
  } catch (err) {
    const error = new ErrorHandler(err.message, err.statusCode);
    logger.error(err);
    next(error);
  }
};
const createCardCompany = async (req, res, next) => {
  try {
    const name = req.body.name.trim();

    // Check if card company already exists (case-insensitive)
    const existingCardCompany = await CardCompanies.findOne({
      where: Sequelize.where(
        Sequelize.fn("LOWER", Sequelize.col("name")),
        name.toLowerCase()
      ),
    });
    if (existingCardCompany) {
      return res.status(409).json({
        message: CardCompaniesErrors.CARD_COMPANY_ALREADY_EXISTS,
      });
    }

    const newCardCompany = await CardCompanies.create(req.body);

    return res.status(201).json(newCardCompany);
  } catch (err) {
    const error = new ErrorHandler(err.message, err.statusCode);
    logger.error(err);
    next(error);
  }
};

const updateCardCompany = async (req, res, next) => {
  try {
    const { id } = req.params;
    const name = req.body.name.trim();

    const existingCardCompany = await CardCompanies.findByPk(id);
    if (!existingCardCompany) {
      return res.status(404).json({
        message: CardCompaniesErrors.CARD_COMPANY_NOT_FOUND,
      });
    }

    // Check if card company already exists (case-insensitive)
    const existingCompanyName = await CardCompanies.findOne({
      where: Sequelize.where(
        Sequelize.fn("LOWER", Sequelize.col("name")),
        name.toLowerCase()
      ),
    });
    if (existingCompanyName) {
      return res.status(409).json({
        message: CardCompaniesErrors.CARD_COMPANY_ALREADY_EXISTS,
      });
    }

    const updateCardCompany = await existingCardCompany.update(req.body);

    return res.status(200).json(updateCardCompany);
  } catch (err) {
    const error = new ErrorHandler(err.message, err.statusCode);
    logger.error(err);
    next(error);
  }
};

const deleteCardCompany = async (req, res, next) => {
  try {
    const { id } = req.params;

    const existingCardCompany = await CardCompanies.findByPk(id);
    if (!existingCardCompany) {
      return res.status(404).json({
        message: CardCompaniesErrors.CARD_COMPANY_NOT_FOUND,
      });
    }

    await CardCompanies.destroy({
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
  getCardCompanies,
  getCardCompanyById,
  createCardCompany,
  updateCardCompany,
  deleteCardCompany,
};
