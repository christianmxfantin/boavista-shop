const { emptyField, lengthField } = require("../db.errors");

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
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          notEmpty: {
            msg: emptyField("nombre"),
          },
          len: {
            args: [1, 100],
            msg: lengthField("nombre", 1, 100),
          },
        },
      },
    },
    {
      timestamps: false,
    }
  );
  return Roles;
};
