const { DataTypes } = require("sequelize");
const { sequelize } = require("../connection");
const Discounts = require("./Discounts.js");
const Categories = require("./Categories.js");

const Products = sequelize.define(
  "products",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    // imageURL: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    // },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Products;

Discounts.hasMany(Products, {
  foreignKey: "discountId",
  sourceKey: "id",
});

Products.belongsTo(Discounts, {
  foreignKey: "discountId",
  targetId: "id",
});

Categories.hasMany(Products, {
  foreignKey: "categoriesId",
  sourceKey: "id",
});

Products.belongsTo(Categories, {
  foreignKey: "categoriesId",
  targetId: "id",
});
