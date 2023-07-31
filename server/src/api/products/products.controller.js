const Products = require("../../db/models/Products.js");

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
    const newProduct = await Products.create(req.body);
    return res.status(201).send(newProduct);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;

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
