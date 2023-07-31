const { DataTypes } = require("sequelize");
const { sequelize } = require("../connection");
// const Users = require("./Users.js");

const Roles = sequelize.define(
  "roles",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
      unique: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    timestamps: false,
  }
);

// Roles.associate = () => {
//   Roles.hasMany(Users);
// };

module.exports = Roles;
