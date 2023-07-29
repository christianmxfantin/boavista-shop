const { DataTypes } = require("sequelize");
const { sequelize } = require("../connection");

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
      // type: DataTypes.DECIMAL,
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    // discountId: {
    //   type: DataTypes.INTEGER,
    //   allowNull: true,
    // },
    // categoryId: {
    //   type: DataTypes.UUID,
    //   allowNull: false,
    // },
  },
  {
    timestamps: false,
  }
);

module.exports = Products;
