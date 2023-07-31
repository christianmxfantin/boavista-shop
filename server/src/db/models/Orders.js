const { DataTypes } = require("sequelize");
const { sequelize } = require("../connection");
const Users = require("./Users");

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
    order: {
      type: DataTypes.BLOB,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Orders;

Users.hasMany(Orders, {
  foreignKey: "userId",
  sourceKey: "id",
});

Orders.belongsTo(Users, {
  foreignKey: "userId",
  targetId: "id",
});
