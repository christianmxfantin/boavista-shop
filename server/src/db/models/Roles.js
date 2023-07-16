const { DataTypes } = require("sequelize");
const { sequelize } = require("../connection");
const Users = require("./Users");

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
    names: {
      type: DataTypes.STRING,
      allowNull: false,
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
