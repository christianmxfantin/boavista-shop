const { DataTypes } = require("sequelize");
const { sequelize } = require("../connection");

const Users = sequelize.define(
  "users",
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
    surnames: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.UUID,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Users;
