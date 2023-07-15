const { DataTypes } = require("sequelize");
const { sequelize } = require("../connection");

const Roles = sequelize.define(
  "roles",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    names: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Roles;
