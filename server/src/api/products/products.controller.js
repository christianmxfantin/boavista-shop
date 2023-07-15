const Products = require("../../db/models/Products.js");

const getProducts = async (req, res) => {
  try {
    const response = await Products.findAll();
    res.status(200).send(response);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await Products.findByPk(id);
    res.status(200).send(response);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
const createProduct = async (req, res) => {
  try {
    const response = await Products.create(req.body);
    res.status(201).send(response);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, price, stock, discount } = req.body;

    const response = await Products.findByPk(id);
    response.name = name;
    response.price = price;
    response.stock = stock;
    response.discount = discount;

    await response.save(req.body);
    res.status(200).send(response);
  } catch (error) {
    res.status(500).send({ message: error.message });
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
