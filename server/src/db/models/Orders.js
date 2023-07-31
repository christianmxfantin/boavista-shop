const { DataTypes } = require("sequelize");
const { sequelize } = require("../connection");

const Orders = sequelize.define(
  "orders",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
      unique: true,
    },
    // name: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    //   unique: true,
    // },
  },
  {
    timestamps: false,
  }
);

module.exports = Orders;
