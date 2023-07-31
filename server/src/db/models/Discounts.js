const { DataTypes } = require("sequelize");
const { sequelize } = require("../connection");

const Discounts = sequelize.define(
  "discounts",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    percentage: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Discounts;
