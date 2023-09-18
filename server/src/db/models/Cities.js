const { CitiesErrors } = require("../../api/cities/cities.errors");

module.exports = (sequelize, DataTypes) => {
  const Cities = sequelize.define(
    "cities",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true,
        validate: {
          is: {
            args: /^[\p{L} -]{1,50}$/u,
            msg: CitiesErrors.NAME_INVALID,
          },
        },
      },
    },
    {
      timestamps: false,
    }
  );
  return Cities;
};
