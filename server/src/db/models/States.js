const { StatesErrors } = require("../../api/states/states.errors");

module.exports = (sequelize, DataTypes) => {
  const States = sequelize.define(
    "states",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
        unique: true,
      },
      name: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true,
        validate: {
          is: {
            args: /^[\p{L} -]{1,50}$/u,
            msg: StatesErrors.NAME_INVALID,
          },
        },
      },
    },
    {
      timestamps: false,
    }
  );
  return States;
};
