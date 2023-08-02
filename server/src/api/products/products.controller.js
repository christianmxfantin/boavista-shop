const db = require("../../db/models/index.js");

const Products = db.products;
const Discounts = db.discounts;
const Categories = db.categories;

const getProducts = async (req, res) => {
  try {
    const products = await Products.findAll();
    return res.status(200).json(products);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

const getProductById = async (req, res) => {
  try {
    const { id } = req.params;

    const existingProduct = await Products.findByPk(id);
    if (!existingProduct) {
      return res.status(409).json({
        message: "Conflict: This product doesn't exist",
      });
    }

    return res.status(200).json(existingProduct);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};
const createProduct = async (req, res) => {
  try {
    const { name, discountId, categoryId } = req.body;

    //Check if product name is already exists
    const existingProduct = await Products.findOne({ where: { name } });
    if (existingProduct) {
      return res.status(409).json({
        message: "Unauthorized: This product name is already exists",
      });
    }

    //Check if discountId exists in discounts table
    const existingDiscount = await Discounts.findByPk(discountId);
    if (!existingDiscount) {
      return res.status(409).json({
        message: "Conflict: The discount doesn't exist",
      });
    }

    //Check if categoryId exists in categories table
    const existingCategory = await Categories.findByPk(categoryId);
    if (!existingCategory) {
      return res.status(409).json({
        message: "Conflict: The category doesn't exist",
      });
    }

    const newProduct = await Products.create(req.body);

    return res.status(201).send(newProduct);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    //Check if product name is already exists
    const existingName = await Products.findOne({ where: { name } });
    if (existingName) {
      return res.status(409).json({
        message: "Unauthorized: This product name is already exists",
      });
    }

    //Check if product id exists
    const existingProduct = await Products.findByPk(id);
    if (!existingProduct) {
      return res.status(409).json({
        message: "Conflict: This product doesn't exist",
      });
    }
    const updateProduct = await existingProduct.update(req.body);

    return res.status(200).json(updateProduct);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    await Products.destroy({
      where: {
        id,
      },
    });
    res.sendStatus(204);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

module.exports = {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
