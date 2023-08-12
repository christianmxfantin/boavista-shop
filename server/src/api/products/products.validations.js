const db = require("../../db/models/index.js");
const ErrorHandler = require("../../utils/errorHandler.js");
const { hashPassword } = require("../../utils/hashPassword.js");
const logger = require("../../utils/logger.js");
const { CategoriesErrors } = require("../categories/categories.errors.js");
const { DiscountsErrors } = require("../discounts/discounts.errors.js");
const { UsersErrors } = require("../users/users.errors.js");
const { ProductsErrors } = require("./products.errors.js");

const Products = db.products;
const Discounts = db.discounts;
const Categories = db.categories;
const Users = db.users;

const createAndUpdateProduct = async (req, res, next) => {
  try {
    const { name, price, discountId, categoryId, userId } = req.body;

    //Check if product name is already exists
    const existingProduct = await Products.findOne({ where: { name } });
    if (existingProduct) {
      return res.status(409).json({
        message: ProductsErrors.PRODUCT_NAME_ALREADY_EXISTS,
      });
    }

    //Check if price is different to zero
    if (!parseInt(price)) {
      return res.status(400).json({
        message: ProductsErrors.PRICE_INVALID,
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

    //Check if userId exists in users table
    const existingUser = await Users.findByPk(userId);
    if (!existingUser) {
      return res.status(404).json({
        message: UsersErrors.USER_NOT_FOUND,
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
  createAndUpdateProduct,
};
