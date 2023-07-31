const { DataTypes } = require("sequelize");
const { sequelize } = require("../connection");
const Users = require("./Users.js");

const Addresses = sequelize.define(
  "addresses",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
      unique: true,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    country: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "Argentina",
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Addresses;

Users.hasMany(Addresses, {
  foreignKey: "userId",
  sourceKey: "id",
});

Addresses.belongsTo(Users, {
  foreignKey: "userId",
  targetId: "id",
});
