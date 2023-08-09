const db = require("../../db/models/index.js");
const ErrorHandler = require("../../utils/errorHandler.js");
const logger = require("../../utils/logger.js");
const { CategoriesErrors } = require("../categories/categories.errors.js");
const { DiscountsErrors } = require("../discounts/discounts.errors.js");
const { ProductsErrors } = require("./products.errors.js");

const Products = db.products;
const Discounts = db.discounts;
const Categories = db.categories;

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
        message: ProductsErrors.PRODUCT_NOT_FOUND,
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
    const { name, discountId, categoryId } = req.body;

    //Check if product name is already exists
    const existingProduct = await Products.findOne({ where: { name } });
    if (existingProduct) {
      return res.status(409).json({
        message: ProductsErrors.PRODUCT_NAME_ALREADY_EXISTS,
      });
    }

    //Check if discountId exists in discounts table
    const existingDiscount = await Discounts.findByPk(discountId);
    if (!existingDiscount) {
      return res.status(404).json({
        message: DiscountsErrors.DISCOUNT_NOT_FOUND,
      });
    }

    //Check if categoryId exists in categories table
    const existingCategory = await Categories.findByPk(categoryId);
    if (!existingCategory) {
      return res.status(404).json({
        message: CategoriesErrors.CATEGORY_NOT_FOUND,
      });
    }

    const newProduct = await Products.create(req.body);

    return res.status(201).send(newProduct);
  } catch (err) {
    const error = new ErrorHandler(err.message, err.statusCode);
    logger.error(err);
    next(error);
  }
};

const updateProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    //Check if product name is already exists
    const existingName = await Products.findOne({ where: { name } });
    if (existingName) {
      return res.status(409).json({
        message: ProductsErrors.PRODUCT_NAME_ALREADY_EXISTS,
      });
    }

    //Check if product id exists
    const existingProduct = await Products.findByPk(id);
    if (!existingProduct) {
      return res.status(404).json({
        message: ProductsErrors.PRODUCT_NOT_FOUND,
      });
    }
    const updateProduct = await existingProduct.update(req.body);

    return res.status(200).json(updateProduct);
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
        message: ProductsErrors.PRODUCT_NOT_FOUND,
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
