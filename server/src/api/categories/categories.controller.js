const { Sequelize } = require("sequelize");
const db = require("../../db/models/index.js");
const { CategoriesErrors } = require("./categories.errors.js");
const { ApiErrors } = require("../api/api.errors.js");
const ErrorHandler = require("../../utils/errorHandler.js");
const logger = require("../../utils/logger.js");

const Categories = db.categories;

const getCategories = async (req, res, next) => {
  try {
    const categories = await Categories.findAll();

    return res.status(200).json(categories);
  } catch (err) {
    const error = new ErrorHandler(err.message, err.statusCode);
    logger.error(err);
    next(error);
  }
};

const getCategoryById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const existingCategory = await Categories.findByPk(id);
    if (!existingCategory) {
      return res.status(404).json({
        message: ApiErrors.ID_NOT_FOUND,
      });
    }

    return res.status(200).json(existingCategory);
  } catch (err) {
    const error = new ErrorHandler(err.message, err.statusCode);
    logger.error(err);
    next(error);
  }
};
const createCategory = async (req, res, next) => {
  try {
    const name = req.body.name.trim();

    // Check if category already exists (case-insensitive)
    const existingCategory = await Categories.findOne({
      where: Sequelize.where(
        Sequelize.fn("LOWER", Sequelize.col("name")),
        name.toLowerCase()
      ),
    });
    if (existingCategory !== null) {
      return res.status(409).json({
        message: CategoriesErrors.CATEGORY_ALREADY_EXISTS,
      });
    }

    const newCategory = await Categories.create(req.body);

    return res.status(201).json(newCategory);
  } catch (err) {
    const error = new ErrorHandler(err.message, err.statusCode);
    logger.error(err);
    next(error);
  }
};

const updateCategory = async (req, res, next) => {
  try {
    const { id } = req.params;
    const name = req.body.name.trim();

    const existingCategoryId = await Categories.findByPk(id);
    if (!existingCategoryId) {
      return res.status(404).json({
        message: ApiErrors.ID_NOT_FOUND,
      });
    }

    // Check if category already exists (case-insensitive)
    const existingCategory = await Categories.findOne({
      where: Sequelize.where(
        Sequelize.fn("LOWER", Sequelize.col("name")),
        name.toLowerCase()
      ),
    });
    if (existingCategory !== null) {
      return res.status(409).json({
        message: CategoriesErrors.CATEGORY_ALREADY_EXISTS,
      });
    }

    const updateCategory = await existingCategory.update(req.body);

    return res.status(200).json(updateCategory);
  } catch (err) {
    const error = new ErrorHandler(err.message, err.statusCode);
    logger.error(err);
    next(error);
  }
};

const deleteCategory = async (req, res, next) => {
  try {
    const { id } = req.params;

    const existingCategory = await Categories.findByPk(id);
    if (!existingCategory) {
      return res.status(404).json({
        message: ApiErrors.ID_NOT_FOUND,
      });
    }

    await Categories.destroy({
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
  getCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
};
