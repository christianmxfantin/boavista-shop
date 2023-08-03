const { Sequelize } = require("sequelize");
const db = require("../../db/models/index.js");

const Categories = db.categories;

const getCategories = async (req, res) => {
  try {
    const categories = await Categories.findAll();
    return res.status(200).json(categories);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getCategoryById = async (req, res) => {
  try {
    const { id } = req.params;

    const existingCategory = await Categories.findByPk(id);
    if (!existingCategory) {
      return res.status(409).json({
        message: "Conflict: This category doesn't exist",
      });
    }

    return res.status(200).json(existingCategory);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};
const createCategory = async (req, res) => {
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
        message: "Unauthorized: This category already exists",
      });
    }

    const newCategory = await Categories.create(req.body);

    return res.status(201).json(newCategory);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

const updateCategory = async (req, res) => {
  try {
    const { id } = req.params;

    const existingCategory = await Categories.findByPk(id);
    if (!existingCategory) {
      return res.status(409).json({
        message: "Conflict: This category doesn't exist",
      });
    }
    const updateCategory = await existingCategory.update(req.body);

    return res.status(200).json(updateCategory);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;
    await Categories.destroy({
      where: {
        id,
      },
    });
    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

module.exports = {
  getCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
};
