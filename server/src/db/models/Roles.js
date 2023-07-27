const { DataTypes } = require("sequelize");
const { sequelize } = require("../connection");

module.exports = (sequelize, DataTypes) => {
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

  Roles.associate = (models) => {
    Roles.hasMany(models.users);
  };

  return Roles;
};
