const db = require("../../db/models/index.js");
const ErrorHandler = require("../../utils/errorHandler.js");
const logger = require("../../utils/logger.js");
const { ApiErrors } = require("../api/api.errors.js");
const { ProductsErrors } = require("./products.errors.js");
const { createAndUpdateProduct } = require("./products.validations.js");

const Products = db.products;

const getProducts = async (req, res, next) => {
  try {
    const products = await Products.findAll();

    return res.status(200).json(products);
  } catch (err) {
    const error = new ErrorHandler(err.message, err.statusCode);
    logger.error(err);
    next(error);
  }
};

const getProductById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const existingProduct = await Products.findByPk(id);
    if (!existingProduct) {
      return res.status(404).json({
        message: ApiErrors.ID_NOT_FOUND,
      });
    }

    return res.status(200).json(existingProduct);
  } catch (err) {
    const error = new ErrorHandler(err.message, err.statusCode);
    logger.error(err);
    next(error);
  }
};
const createProduct = async (req, res, next) => {
  try {
    const productData = await createAndUpdateProduct(req, res, next);
    if (productData) {
      const newProduct = await Products.create(productData);
      return res.status(201).json(newProduct);
    }
  } catch (err) {
    const error = new ErrorHandler(err.message, err.statusCode);
    logger.error(err);
    next(error);
  }
};

const updateProduct = async (req, res, next) => {
  try {
    const { id } = req.params;

    const productData = await createAndUpdateProduct(req, res, next);
    if (productData) {
      //Check if product id exists
      const existingProduct = await Products.findByPk(id);
      if (!existingProduct) {
        return res.status(404).json({
          message: ApiErrors.ID_NOT_FOUND,
        });
      }

      const updateProduct = await existingProduct.update(productData);
      return res.status(200).json(updateProduct);
    }
  } catch (err) {
    const error = new ErrorHandler(err.message, err.statusCode);
    logger.error(err);
    next(error);
  }
};

const deleteProduct = async (req, res, next) => {
  try {
    const { id } = req.params;

    const existingProduct = await Products.findByPk(id);
    if (!existingProduct) {
      return res.status(404).json({
        message: ApiErrors.ID_NOT_FOUND,
      });
    }

    await Products.destroy({
      where: {
        id,
      },
    });
    res.sendStatus(204);
  } catch (err) {
    const error = new ErrorHandler(err.message, err.statusCode);
    logger.error(err);
    next(error);
  }
};

module.exports = {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
